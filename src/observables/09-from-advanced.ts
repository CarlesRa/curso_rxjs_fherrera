import { from, of } from "rxjs";
/**
 * of = Toma argumentos y genera una secuencia de valores
 * from = array, promise, iterable, observable
 */


const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
};

// const source$ = from([1, 2, 3, 4, 5, 6]);
// const source$ = of(...[1, 2, 3, 4, 5, 6]);
// const source$ = from('Carlos');

const source$ = from(fetch('https://api.github.com/users/carlesra'));

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const myIterable = myGenerator();

/* for (let id of myIterable) {
    console.log(id);
} */

from(myIterable).subscribe(observer);

/* source$.subscribe(async (resp) => {
    const data = await resp.json();
    console.log(data);
}); */