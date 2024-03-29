import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(event => console.log('tap', event.clientY)),
    /* map(event => ({
        clientY: event.clientY,
        clientX: event.clientX
    })), */
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});