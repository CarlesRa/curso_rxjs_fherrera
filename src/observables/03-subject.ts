import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (err) => console.warn('error:', err),
    complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(intervalID)
        console.log('Interval destroyed');
    };
});

/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);



/* const subs1 = interval$.subscribe(rnd => console.log('1:', rnd));
const subs2 = interval$.subscribe(rnd => console.log('2:', rnd)); */

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);