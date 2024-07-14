"use strict";
//---- Objects Method ----- //
const obj = {
    height: 77.7,
    weight: 120,
    // gender: true
};
const obj1 = {
    name: "MuhammadInam",
    age: 18,
    enginner: true
};
const worker1 = {
    name: "rashied",
    workerCode: 129,
    age: 23,
    oldestWorker: false
};
const worker2 = {
    name: "Muhammad sahbir",
    workerCode: 1290,
    age: 43,
    oldestWorker: true
};
//Simple example ka huma employee ka bounes and salary divide karne ha ka total kitne ha
const newWorker = {
    name: "inam",
    workerCode: 1212,
    age: 20,
    enginner: true,
    divideFunc: (n, m) => {
        console.log(n * m);
    }
};
newWorker === null || newWorker === void 0 ? void 0 : newWorker.divideFunc(2000, 30);
