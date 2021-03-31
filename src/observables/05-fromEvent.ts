import { fromEvent } from 'rxjs';

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
};

// src1$.subscribe(ev => {
//     console.log(ev.x);
//     console.log(ev.y);
// });
src1$.subscribe(({x, y}) => {
    console.log('x: ',x, ' y: ', y);

});

src2$.subscribe(observer);
