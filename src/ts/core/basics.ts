// Imports ---------------------------------------------------------------------

// Types -----------------------------------------------------------------------

// Constants -------------------------------------------------------------------

// Functions -------------------------------------------------------------------
// The identity function returns its argument unchanged. Can be handy for things
// like Array.map
export const identity = <A> (a: A): A => a
export const id = identity

// A collection of functions that mirror the equality and comparison operators
// we have in javascript. This is handy when you want to avoid writing a lambda
// for a simple comparison (such as when using the match structure below).
// For completeness the functions, in order, are:
//  lt  |  <  | "less than"
//  gt  |  >  | "greater than"
//  eq  | === | "equals"
//  lte | <=  | "less than or equals"
//  gte | >=  | "greater than or equals"
export const lt = (y: number) => (x: number): boolean => x < y
export const gt = (y: number) => (x: number): boolean => x > y
export const eq = (y: number) => (x: number): boolean => x === y
export const lte = (y: number) => (x: number): boolean => x <= y
export const gte = (y: number) => (x: number): boolean => x >= y

// Default export --------------------------------------------------------------
