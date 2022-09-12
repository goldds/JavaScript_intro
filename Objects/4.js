let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
  let empty = []
  for (let prop in obj) {
    empty.push(prop.toUpperCase());
  } 
  
  console.log(empty)