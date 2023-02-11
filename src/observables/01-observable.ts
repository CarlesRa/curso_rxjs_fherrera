import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (value) => console.log('next:', value),
    error: (err) => console.warn('error:', err),
    complete: () => console.info('complete')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Forzar error
    /* const a = undefined;
    a.nombre = 'Carlos'; */

    subscriber.complete();

    subscriber.next('No se emite');
});

obs$.subscribe(observer);
