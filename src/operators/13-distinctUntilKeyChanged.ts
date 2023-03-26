import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
    distinctUntilKeyChanged('name')
).subscribe(console.log);