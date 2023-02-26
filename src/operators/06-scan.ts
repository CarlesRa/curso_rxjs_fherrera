import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalAucmulator = (acc, cur) => acc + cur;

// Reduce
from(numbers).pipe(reduce(totalAucmulator, 0))
    .subscribe(console.log);

from(numbers).pipe(scan(totalAucmulator))
    .subscribe(console.log);

// Redux
interface User {
    id?: string;
    autenticated?: boolean;
    token?: string;
    age?: number
}
const users: User[] = [
    { id: 'car', autenticated: false, token: null },
    { id: 'car', autenticated: true, token: 'ABC' },
    { id: 'car', autenticated: false, token: 'ABC123' }
];

const state$ = from(users).pipe(
    scan<User, User>((acc, cur) => {
        return { ...acc, ...cur }
    }, { age: 33 })
);
const id$ = state$.pipe(map(state => state));
id$.subscribe(console.log);