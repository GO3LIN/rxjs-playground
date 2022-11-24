import * as Rx from 'rxjs';

/*
// pending
const promesse = new Promise((resolve, reject) => {
  console.log('ok');
  // fullfilled
  resolve('o');
  // rejected
  reject('y');
});
promesse.then((c) => console.log('ok2'));
*/
const wakeUp$ = Rx.of('woke up');

const goToWork = Rx.of('goToWork').pipe(
  Rx.delay(500),
  Rx.finalize(() => console.log('work finilazed'))
);
const openStore = Rx.of('openStore').pipe(
  Rx.delay(10),
  Rx.finalize(() => console.log('store finilazed'))
);
const driveLambo = Rx.of('driveLambo');
const getMarried = Rx.of('getMarried');
const goToMiami = Rx.of('goToMiami');

const sub1 = wakeUp$
  .pipe(
    Rx.mergeMap((c) => {
      console.log(c);
      return goToWork;
    }),
    Rx.mergeMap((c) => {
      console.log('went to work');
      return openStore;
    })
  )
  .subscribe(console.log);

// Open the console in the bottom right to see results.
