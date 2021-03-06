function question(value, maxDecimalLength) {
  // 소수점(.) 기준으로 문자열을 잘라 앞 부분은 자연수(naturalNumber), 뒷 부분(decimalNumber)은 소수 영역으로 고려합니다.
  // ex) value가 23.45인 경우 naturalNumber = '23', decimalNumber = '45'
  const [ naturalNumber, decimalNumber ] = value.split('.');

  // generateDecimalPart함수는 소수점 이하 영역 구성하는 로직입니다.
  // 예시1) 소수점 이하 영역이 '23'이고 최대 넷째 자리까지 표현하는 경우 소수점을 포함하여 '.2300'을 반환하는 로직입니다.
  // 예시2) 소수점 이하 영역이 '23'이고 최대 첫째 자리까지 표현하는 경우 소수점을 포함하여 '.2'를 반환하는 로직입니다.
  const generateDecimalPart = (decimal) => {
    // 만약 소수점 이하 영역이 없는 경우 decimalNumber이 undefined가 되어 문자열과 관련된 메소드를 사용할 수 없으므로 이 경우 빈 문자열로 우선 변환해줍니다.
    const reformatDecimal = decimal || '';
    
    // TODO: 소수점 이하 영역을 구성하는 나머지 부분을 완성해주세요.(필수)
    const substringDecimal = reformatDecimal.substring(0, maxDecimalLength);

    const { length } = substringDecimal;
    
    const arr = Array.from({length: maxDecimalLength-length}, () => '0');

    return length === maxDecimalLength ? substringDecimal : substringDecimal + arr.join('');
  }

  // maxDecimalLength가 0인 경우 소수점을 표시할 필요가 없으므로 소수 영역은 빈 문자열로 설정합니다.
  const decimal = !!maxDecimalLength ? generateDecimalPart(decimalNumber) : '';

  return decimal ? `${naturalNumber}.${decimal}` : naturalNumber;
}

// TODO: 추가 내용에 나와 있는대로 본인이 새롭게 만든 question 함수를 아래에 작성해주세요. (선택사항)
console.log(question('789', 3));
console.log(question('789', 0));
console.log(question('456.123', 1));
console.log(question('123.456', 1));
console.log(question('123.456', 3));
console.log(question('123.456', 5));
console.log(question('123.456', 0));
console.log(question('1234567890.12345', 0));
console.log(question('0', 0));
console.log(question('0', 4));