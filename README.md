default-parameter.js
====================

A experimental default values for function parameters in Javascript, that just uses arguments.callee and arguments.caller

This is just an *experimental* project, that shows how `arguments.callee` and `arguments.caller`
could be used in real world applications to make programmers life easier.

Frankly speaking I would add an parameter in the arguments that allows you to get the `context`
of the function, this way we could create very powerfull stuffs like this project.

The ideia is to have a function that goes inside any function, and you can easy create
default values for the function parameters.

Usage
-----

To use you need to wrap 3 lines code in any function:

```
if(arguments.length < arguments.callee.length){
  return defaults.call(this, /* default values, separeted by comma */);
}
```

Or you can use an array as second parameter using `apply` instead `call`.

```
if(arguments.length < arguments.callee.length){
  return defaults.apply(this, /* default values in array [arg1, arg2, arg3...] */);
}
```

Example
-------

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

Compatibility
-------------

Any browser if you don't use strict mode.
