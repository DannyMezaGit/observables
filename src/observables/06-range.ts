import { asyncScheduler, of, range,  } from 'rxjs';

const src$ = of(1,2,3,4,5);

src$.subscribe(console.log);


const src2$ = range(1, 20);
// const src2$ = range(5); dará 5 emisiones a partir de 0, por defecto
// const src2$ = range(1, 20, asyncScheduler); se ejecuta fuera del hilo principal

console.log('inicio');
src2$.subscribe(console.log);
console.log('fin');

