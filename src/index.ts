import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (value) => console.log('next:', value),
    error: (err) => console.warn('error:', err),
    complete: () => console.info('complete')
}