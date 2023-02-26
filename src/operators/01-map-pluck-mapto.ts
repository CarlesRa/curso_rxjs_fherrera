import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

/* range(1, 5).pipe(map<number, string>(val => (val * 10).toString()))
    .subscribe(console.log); */
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(map(event => event.code));
const keyUpPluck$ = keyUp$.pipe(pluck('target', 'baseURI'));
const keyUpMapTo$ = keyUp$.pipe(mapTo('key presed'));

keyUp$.subscribe(console.log);
keyUpCode$.subscribe(val => console.log('map', val));
keyUpPluck$.subscribe(val => console.log('pluck', val));
keyUpMapTo$.subscribe(val => console.log('mapTo', val));