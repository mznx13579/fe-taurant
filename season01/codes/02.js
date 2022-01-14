function question01(words) {
  // TODO: 여기에 함수 내부 로직을 작성해주세요.
  const regExp = new RegExp('[&?;:]');
  for (let i = 0; i < words.length; i+=1) {
    const word = words[i];
    if(regExp.test(word)) return true;
    continue;
  }
  return false;
}

console.log(question01(['hello!', '1234567890', '']));
console.log(question01(['wally<wallys0213@gmail.com>', 'hihi&byebye<wow@wow.com>']));
console.log(question01([`What's your name?`, `console.log('1');`]));

function question02(words) {
  return words.map((word) => {
    return word.replace(/&/gi, '&amp;')
  })
}
console.log(question02(['123&456', 'hello&bye<test@test.com>']));
console.log(question02(['!@#$%^&*', '&quot;wow&quot;', '']));