function findWord (list, testWord){
    let returnWord = []
    for( let word of list){
        if (testWord.test(word)){
            returnWord.push(word)
        }
    }
    return returnWord
    
}
let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];
console.log(findWord(words, /lab/))