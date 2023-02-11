import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => console.log('next:', value),
    error: (err) => console.warn('error:', err),
    complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subscriber => {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);

    }, 1000);
    setTimeout(() => {
        subscriber.complete();
    }, 2500);
    return () => {
        clearInterval(interval);
        console.log('Interval destroyed');
    }
});

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription.add(subscription2);
subscription2.add(subscription3);


setTimeout(() => {
    subscription.unsubscribe();
    /* subscription.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe(); */
    console.log('complete timeout');

}, 6000);