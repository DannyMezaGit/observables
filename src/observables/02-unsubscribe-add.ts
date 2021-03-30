import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    
    // Crear Contador
    let count = 0;

    const interval = setInterval( () => {
        // Cada segundo
        count++;
        subscriber.next( count );
    }, 1000);

    setTimeout( () => {
        subscriber.complete();
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido");
    }
});

const subs = intervalo$.subscribe(num => console.log('Num: ', num));
const subs2 = intervalo$.subscribe(num => console.log('Num: ', num));
const subs3 = intervalo$.subscribe(num => console.log('Num: ', num));

// Encadenar observables para terminarlos
subs.add( subs2 )
    .add( subs3 );

setTimeout( () => {
    subs.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
}, 3000);