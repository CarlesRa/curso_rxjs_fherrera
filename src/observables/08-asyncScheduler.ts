import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const hello = () => console.log('Hello world');
const hello2 = (name: string, lastname: string) => console.log(`Hello ${name} ${lastname}`);

// asyncScheduler.schedule(hello, 2000);
// asyncScheduler.schedule(hello2, 2000, 'Carlos');

const subscription = asyncScheduler.schedule(function (state) {

    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

/* setTimeout(() => {
    subscription.unsubscribe();
}, 6000); */
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);