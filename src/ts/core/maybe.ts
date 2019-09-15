//
export interface Maybe <A> {
  andThen <B> (f: (a: A) => Maybe<B>): Maybe<B>,
  map <B> (f: (a: A) => B): Maybe<B>,
  withDefault (a: A): A
}

//
export const just = (a: A): Maybe<A> => ({
  andThen: f => f(a),
  map: f => f(a) |> Just,
  withDefault: _ => a
})

//
export const nothing = (): Maybe<A> => ({
  andThen: _ => Nothing(),
  map: _ => Nothing(),
  withDefault: a => a
})

//
export default Maybe