let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths (list){
 
    return list.reduce((filtered, letter) => {
            let length = letter.length;
            if (length % 2 === 1) {
                filtered.push(length);
            }
            return filtered;
  }, []);
}


    console.log(oddLengths(arr));