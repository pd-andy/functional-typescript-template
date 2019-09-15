import MaybeT, * as Maybe from './maybe'

//
export interface Result <E, A> {
  andThen <B> (f: (a: A) => Result<E, B>): Result<E, B>,
  map <B> (f: (a: A) => B): Result<E, B>,
  mapErr <X> (f: (e: E) => X): Result<X, A>,
  toMaybe (): MaybeT<A>,
  withDefault (a: A): A
}

//
export const ok = (a: A): Result<E, A> => ({
  andThen: f => f(a),
  map: f => f(a) |> Ok,
  mapErr: _ => Ok(a),
  toMaybe: () => Maybe.Just(a),
  withDefault: _ => a
})

//
export const err = (e: E): Result<E, A> => ({
  andThen: _ => Err(e),
  map: _ => Err(e),
  mapErr: f => f(e) |> Err,
  toMaybe: () => Maybe.Nothing(),
  withDefault: a => a
})

//
export default Result