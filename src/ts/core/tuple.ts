// Typescript does have a tuple type that is represented as a fixed length
// array. This is OK but we could do better. To begin with we define a tuple
// as exclusively containing only two values; n-tuples aren't allowed, use an
// object instead. Then a number of handy functions are implemented so we can
// manipulate just one (or both) of the items in the tuple without having to
// "unbox" it and manually recreate another one.
export interface TupleT <A, B> {
  0: A,
  1: B,
  both: [A, B],
  first: A,
  mapBoth <X, Y> (f: (a: A) => X, g: (b: B) => Y): TupleT<X, Y>,
  mapFirst <X> (f: (a: A) => X): TupleT<X, B>,
  mapSecond <X> (f: (b: B) => X): TupleT<A, X>,
  second: B,
}

//
export function pair <A, B> (a: A, b: B): TupleT<A, B> {
  return {
    0: a,
    1: b,
    both: [a, b],
    first: a,
    mapBoth: (f, g) => pair(f(a), g(b)),
    mapFirst: f => pair(f(a), b),
    mapSecond: f => pair(a, f(b)),
    second: b
  }
}

//
export default TupleT
