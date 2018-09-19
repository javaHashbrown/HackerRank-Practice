/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = [];
    let consonants = [];
    const vowelList = ['a','e','i','o','u'];
    for(let letter of s){
        if(vowelList.includes(letter.toLowerCase())){
            vowels.push(letter);
        }else{
            consonants.push(letter);
        }
    }
    console.log(vowels.join('\n'));
    console.log(consonants.join('\n'));
}