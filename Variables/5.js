let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);


//it will log 'bar'