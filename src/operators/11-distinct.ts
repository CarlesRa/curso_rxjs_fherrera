import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 2, '1');

numbers$.pipe(
    distinct() // hace el triple igual ===
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
    distinct(person => person.name)
).subscribe(console.log);