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
};

globalVar2();

const loadEvent = () => {
    const rootEl = document.querySelector('#root');

};

window.addEventListener('load', loadEvent);