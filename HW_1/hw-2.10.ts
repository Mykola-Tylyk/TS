let a: number = +prompt('Введіть перше число для порівняння');
let b: number = +prompt('Введіть друге число для порівняння');
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log('Рівні');
}