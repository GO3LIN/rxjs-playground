import * as Rx from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

// Open the console in the bottom right to see results.

const apiURL = (name) => `https://pokeapi.co/api/v2/pokemon/${name}`;
const pokeAPI$ = (name) => fromFetch(apiURL(name));

const names = ['pikachu', 'charmander', 'pidgeot', 'rattata'];

Rx.from(names)
  .pipe(
    Rx.mergeMap((c) => pokeAPI$(c)),
    Rx.tap((c) => {
      console.log((new Date()).getTime())
    }),
    Rx.take(2)
  )
  .subscribe(console.log);



