import { map, range, tap } from 'rxjs';


const numbers = range(1, 5);
numbers.pipe(
    tap(x => console.log('before', x)),
    map(val => (val * 10).toString()),
    tap({
        next: val => console.log('before', val),
        complete: () => console.log('ended')
    })
).subscribe(val => console.log('subs', val));