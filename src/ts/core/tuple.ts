//
export interface Tuple <A, B> {
  0: A,
  1: B,
  both: [A, B],
  first: A,
  mapBoth <X, Y> (f: (a: A) => X, g: (b: B) => Y): Tuple<X, Y>,
  mapFirst <X> (f: (a: A) => X): Tuple<X, B>,
  mapSecond <X> (f: (b: B) => X): Tuple<A, X>,
  second: B,
}

//
export const pair = (a: A, b: B): Tuple<A, B> => ({
  0: a,
  1: b,
  both: [a, b],
  first: a,
  mapBoth: (f, g) => Pair(f(a), g(b)),
  mapFirst: f => Pair(f(a), b),
  mapSecond: f => Pair(a, f(b)),
  second: b,
})

//
export default Tuple