let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

//uputs since this the seond variable is in the block