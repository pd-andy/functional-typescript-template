import MaybeT, * as Maybe from './maybe'

// Result is like the Maybe type but with more information. We use this to
// model computations that can fail in multiple ways so that the developer has
// the information to handle the problem. It's sort of like an exception but
// the program won't grind to a halt if you raise one without catching it.
export interface ResultT <E, A> {
  andThen <B> (f: (a: A) => ResultT<E, B>): ResultT<E, B>,
  map <B> (f: (a: A) => B): ResultT<E, B>,
  mapErr <X> (f: (e: E) => X): ResultT<X, A>,
  toMaybe (): MaybeT<A>,
  withDefault (a: A): A
}

//
export function ok <A, E> (a: A): ResultT<E, A> {
  return {
    andThen: f => f(a),
    map: f => f(a) |> Maybe.ok,
    mapErr: _ => ok(a),
    toMaybe: () => Maybe.just(a),
    withDefault: _ => a
  }
}

//
export function err <A, E> (e: E): ResultT<E, A> {
  return {
    andThen: _ => err(e),
    map: _ => err(e),
    mapErr: f => f(e) |> err,
    toMaybe: () => Maybe.nothing(),
    withDefault: a => a
  }
}

//
export default ResultT
