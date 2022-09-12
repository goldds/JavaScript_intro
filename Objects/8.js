function copyObj (obj, let newKeys =[]){
    if (newKeys.isEmpty === true){
        newKeys = (Object.keys(obj))
    }
    else{
        continue
    }
    
   
    keys.forEach (key =>{
    newObj[key] = obj[key]
})}


let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }