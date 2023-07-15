

  
type DeepReadonly<T> = {
    readonly [P in keyof T ]: T[P] extends object ? DeepReadonly<T[P]> : T[P] 
}

type X = { 
    x: { 
      a: 1
      b: {
        n:111
      }
    }
    y: 'hey'
  }
  
  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }
  
 type Todo = DeepReadonly<X> 
