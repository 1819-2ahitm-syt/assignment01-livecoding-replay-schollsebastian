let x = {value: 10};
let y = x;
x.value = 20;

console.log('x = ', x);

console.log('y = ', y);


let number = 10;

function increaseNumber(number) {
    number++;
}

increaseNumber(number);
console.log(number);


let obj = {value: 10};

function increaseObject(obj) {
    obj.value++;
}

increaseObject(obj);
console.log(obj);