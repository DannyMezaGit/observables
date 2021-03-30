import { Observable, Observer, Subject } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completado')
};

const intervalo$ = new Observable<number>(subs => {

    const intervalId = setInterval( () => {

        subs.next( Math.random() );

    }, 3000);

    return () => clearInterval(intervalId);

});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd))

const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd))
const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd))                                                                           

setTimeout( () => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500)