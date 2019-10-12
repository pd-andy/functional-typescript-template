// The Maybe type contains a value that might or might not exist. It's much
// more powerful than typescripts optional constructs because we can perform
// operations like `map` without checking for undefined/null/etc.
export interface MaybeT <A> {
  // `andThen` takes a function that takes a value of type A and returns a value
  // of type MaybeT<B>. It "unboxes" the current Maybe value and calls the
  // function if that value does exist. In other languages this might be called
  // `chain` or a monadic `bind`.
  andThen <B> (f: (a: A) => MaybeT<B>): MaybeT<B>,
  // `map` works just like Array.map does, we transform the value held inside
  // the Maybe container by applying some function to it. As was the case with
  // `andThen`, if the value doesn't exist the function doesn't get applied!
  map <B> (f: (a: A) => B): MaybeT<B>,
  // Eventually it is necessary for us to manually "unbox" the Maybe value and
  // move on with the rest of our program. This function forces developers to
  // choose a sensible default to fallback to in the case that the value dpesn't
  // exist. That means no more dealing with undefined!
  withDefault (a: A): A
}

// A value is `Just` if it exists.
export function just <A> (a: A): MaybeT<A> {
  return {
    andThen: f => f(a),
    map: f => f(a) |> just,
    withDefault: _ => a
  }
}

// If a value doesn't exist then it must be `Nothing`.
export function nothing <A> (): MaybeT<A> {
  return {
    andThen: _ => nothing(),
    map: _ => nothing(),
    withDefault: a => a
  }
}

//
export default MaybeT
