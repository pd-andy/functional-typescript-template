/* eslint no-use-before-define: ["error", { "functions": false }] */
//
export interface Logger {
  error (a: any): Logger,
  log (a: any): Logger,
  warn (a: any): Logger,
  history: any[]
}

//
export function create (): Logger {
  const history = []
  return {
    error (a: any) { 
      console.error(a)
      history.push(a)
      return this
    },
    log (a: any) { 
      console.log(a)
      history.push(a)
      return this
    },
    warn (a: any) { 
      console.warn(a)
      history.push(a)
      return this
    },
    history
  }
}

//
export default Logger