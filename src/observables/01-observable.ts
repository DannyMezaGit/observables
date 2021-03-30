import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('siguiente, next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completado')
};

const obs$ = new Observable<string>(subs => {

    subs.next("Hola");
    subs.next("Mundo");

    subs.complete();

    subs.next("Cruel");

});

obs$.subscribe(observer);

// obs$.subscribe(console.log);

obs$.subscribe(
    valor => console.log('next: ', valor), // Next
    error => console.log('error: ', error), // Error
    () => console.log('Completado') // Complete
);