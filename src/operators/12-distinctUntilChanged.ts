import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 2, 1, '1');

numbers$.pipe(
    distinctUntilChanged() // hace el triple igual ===
).subscribe(console.log);

interface Person {
    name: string;
}

const persons: Person[] = [
    {
        name: 'Pepe'
    },
    {
        name: 'Pepe'
    },
    {
        name: 'Juan'
    },
    {
        name: 'Manolo'
    },
    {
        name: 'Pepe'
    },
    {
        name: 'Juan'
    },
    {
        name: 'Manolo'
    }
];

from<Person[]>(persons).pipe(
    distinctUntilChanged((previus, current) => previus.name === current.name)
).subscribe(console.log);