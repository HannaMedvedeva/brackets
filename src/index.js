module.exports = function check(str, bracketsConfig) {
  let charArr = str.split('');
  let openBracketsConfigArr = getOpenBrackets(bracketsConfig);
  let closeBracketsConfigArr = getCloseBrackets(bracketsConfig);
  let openBrackets = [];
  for (let i = 0; i < charArr.length; i ++) {
    if (openBracketsConfigArr.includes(charArr[i]) 
    && ((openBrackets.length === 0) || openBrackets[openBrackets.length - 1] != charArr[i] || getOpposite(charArr[i], bracketsConfig) !== charArr[i] )) {
      openBrackets.push(charArr[i]);
    } else if (closeBracketsConfigArr.includes(charArr[i])) {
      if (openBrackets.length === 0) {
        return false;
      }
      let opposite = getOpposite(openBrackets[openBrackets.length - 1], bracketsConfig);
      if (opposite && opposite === charArr[i]) {
        openBrackets.pop();
      } else {
        return false;
      }
    }
  }
  return openBrackets.length === 0;

}

function getOpenBrackets(config) {
  let openBracketsConfigArr = [];
  config.forEach(element => {
    openBracketsConfigArr.push(element.slice(0, 1)[0]);
  });
  return openBracketsConfigArr;
}

function getCloseBrackets(config) {
  let closeBracketsConfigArr = [];
  config.forEach(element => {
    closeBracketsConfigArr.push(element.slice(1)[0]);
  });
  return closeBracketsConfigArr;
}

function getOpposite(bracket, config) {
  for (let i = 0; i < config.length; i ++) {
    if (config[i][0] === bracket) {
      return config[i][1];
    }
  }
  ; return null;
}