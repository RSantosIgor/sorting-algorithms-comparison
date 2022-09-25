import { bubbleSort } from './algorithms/bubbleSort.js';
import { shellSort } from "./algorithms/shellSort.js";
import { mergeSort } from "./algorithms/mergeSort.js";
import { quickSort } from "./algorithms/quickSort.js";
import { heapSort } from "./algorithms/heapSort.js";
import { Result } from "./result.js";
import  {Parser}  from "json2csv";
import fs from 'fs';

const algorithms = [bubbleSort, shellSort, heapSort, mergeSort, quickSort];
const arraysLength = [1000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];
const arraysSortType = {
    sortASC: {sorted: true, reverse: false},
    sortDESC: {sorted: true, reverse: true},
    random: {sorted: false, reverse: false}
};
const labels = { sortASC: "Crescente", sortDESC: "Decrescente", random: "Aleatorio"};

run();

async function run() {
    const analysis = [];

    for (const sortType in arraysSortType) {
        for (const algorithm of algorithms) {
            for (const arrayLength of arraysLength) {

                const options = arraysSortType[sortType];
                const array = getVetor(arrayLength, options);
                const result = new Result();
                const params = (algorithm.name == 'mergeSort' || algorithm.name == 'quickSort') ? [array, 0, array.length - 1, result]: [array, result];
                
                //TODO: start time counter
                console.time(`${algorithm.name} ${labels[sortType]}  ${arrayLength}`);
                result.startTime();
                algorithm(...params);
                result.endTime();
                console.timeEnd(`${algorithm.name} ${labels[sortType]}  ${arrayLength}`);

                const obj = {Ordenacao: labels[sortType], Algoritmo: algorithm.name, Tamanho: arrayLength, Tempo: result.time, Trocas: result.swap, Comparacoes: result.comparation};
                analysis.push(obj);
            }
        }
    }
    const csvData = csv(analysis);
    saveFile(`Analyze.csv`, csvData);

    console.timeEnd('Tempo');
}

function getVetor(n, options = {sorted, reverse}) {
    let array = [];
    for (let index = 0; index < n; index++) {
        array.push(Math.round(Math.random() * 1000000))
    }
    return options.sorted ? (options.reverse ? array.sort((a, b) => a - b).reverse(): array.sort((a, b) => a - b)): array;
}

function csv(data) {
    const parser = new Parser({delimiter: "\t"});
    const csv = parser.parse(data);
    return csv;
}

function saveFile (name, data) {
    fs.writeFile(`src/save/${name}`, data, function (err) {
    if (err) return console.log(err);
    console.log('File saved');
    });
}