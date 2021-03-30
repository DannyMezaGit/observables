import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6,7,8,9);
const obs$ = of<number>(1,2,3,4,5,6,7,8,9);

console.log('inicio del observable');

obs$.subscribe({
    next: next => { console.log('next', next) },
    error: null,
    complete: () => console.log('Completado')
});

console.log('fin del observable');
