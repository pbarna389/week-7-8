console.log(varVariable);
let globalVar1 = 12;

let globalVar2 = () => {
    console.log(`runs from the inside`);
    let functionVar1 = "Hello";


    let functionVar2 = () => {
        console.log(`'Sup`);
        console.log(globalVar1);
        console.log(functionVar1);

        let funInFuncVar01 = true;

        let funInFuncVar02 = () => {
            console.log(funInFuncVar01);
        };

        funInFuncVar02();
    };

    functionVar2();

    // console.log(functionVar1, globalVar1);
    if (functionVar1 === "Hello") {
        var blockVar1 = "Mayor Tom reporting in";
    } else {
        // console.log(blockVar1);
    };

    console.log(blockVar1);

};

globalVar2();

var varVariable = 1;

let letVariable1;
console.log(letVariable1);

let letVariable2 = 2;
console.log(letVariable2);

const constVariable1 = "ciao";
// constVariable1 = "hello";
console.log(constVariable1);

const obj1 = {};
obj1.key = "value"
// obj1 = { key: "value" };

console.log(obj1);

const globalVar4 = "apple2";

const globalVar5 = () => {
    return "pear"
};

const globalVar6 = () => {
    return "banana"
};

const globalVar3 = (parameter1, parameter2, parameter3) => {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3());
};

globalVar3(globalVar5(), globalVar4, globalVar6);

const loadEvent = (param1) => {
    const rootEl = document.querySelector('#root');
    console.log(rootEl);
    // console.log(param1)

    rootEl.addEventListener('click', function (event) {
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML('beforeend', "Clicked, ");
        event.currentTarget.classList.toggle('green');
    });
};

window.addEventListener('load', loadEvent);