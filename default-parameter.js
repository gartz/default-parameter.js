function defaults(){
  // Example usage:
  // ```
  // function abc(a,b,c){
  //   if(arguments.length < arguments.callee.length){
  //     return defaults.call(this, 'a',{e:1,f:2,g:3},c');
  //   }
  //   return arguments;
  // }
  // ```
  // run `abc(1)` and it will return `[1, 'b', 'c']`
  if( (function() { return !this; })() ) throw new Error('Defaults doesn\'t work on strict mode.');
  // All vars must have underscores before, to don't screw the closure variables
  // just because this is harder to someone use this dumb pattern
  var ___argsDefault = Array.prototype.slice.call( arguments );
  var ___args = Array.prototype.slice.call( arguments.callee.caller.arguments );
  for(var ___i = 0; ___i < ___args.length; ___i++){
    if(typeof ___args[___i] === 'object' && typeof ___argsDefault[___i] === 'object'){
      for( var ___k in ___argsDefault[___i] ) 
      if( ___argsDefault[___i].hasOwnProperty( ___k ) )
      if( !___args[___i].hasOwnProperty( ___k ) ){
        ___args[___i][___k] = ___argsDefault[___i][___k];
      }
    }
  }
  if( ___args.length < ___argsDefault.length ){
    return arguments.callee.caller.apply( this, ___args.concat( ___argsDefault.slice( ___args.length ) ) );
  }
}
