let myProtoObj = {
    foo: 1,
    bar: 2,
  };
  let myObj = Object.create(myProtoObj)
let protoKeys = Object.keys(myProtoObj)
protoKeys.forEach(key =>{
    myObj[key] = myProtoObj[key]
})

console.log(myObj)