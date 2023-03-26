import { range, take, tap } from 'rxjs';


const numbers$ = range(1, 5).pipe(tap(console.log));

numbers$.pipe(
    tap(t => console.log(t)),
    take(3))
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });