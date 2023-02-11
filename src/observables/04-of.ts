import { of } from 'rxjs';

const obs$ = of<number[]>(1, 2, 3, 4, 5, 6);
//const obs$ = of<any>([1, 2], { a: 1, b: 2 }, function () { }, Promise.resolve(true));
//const obs$ = of(...[1, 2, 3, 4, 5, 6]);

console.log('init observable');
obs$.subscribe({
    next: (value) => console.log(value),
    error: () => { },
    complete: () => { }
});
console.log('end observable');