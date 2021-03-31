import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}
const hoyEn5s = new Date();
hoyEn5s.setSeconds(hoyEn5s.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5s);

console.log('inicio')
// interval$.subscribe( observer );
timer$.subscribe(observer);
console.log('fin')

