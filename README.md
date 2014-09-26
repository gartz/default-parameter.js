# default-parameter.js

This is just an *experimental* project, that shows how `arguments.callee` and `arguments.caller`
could be used in real world applications to make programmers life easier.

Frankly speaking I would add an parameter in the arguments that allows you to get the `context`
of the function, this way we could create very powerfull stuffs like this project.

The ideia is to have a function that goes inside any function, and you can easy create
default values for the function parameters.

## Example

```
function abc(a, b, c){
  if(arguments.length < arguments.callee.length){
    return defaults.call(this, 'a',{e: 1, f: 2, g: 3},'c');
  }
  return [a,b,c];
}
```

Tests:

```
abc();
// ["a", { e:1, f:2, g:3 }, "c"]

abc('d');
// ["d", { e:1, f:2, g:3 }, "c"]

abc(null, {e:'e'});
// [null, { e:'e', f:2, g:3 }, "c"]
```

## Compatibility

Any browser if you don't use strict mode.
