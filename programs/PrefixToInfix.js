var Stack = require('../ds/Stack');
const operators = ['^','*','/','+','-'];

const prefixToInfix = function(expression){
  let s1 = new Stack(), s2 = new Stack(), char = '', str= '';
  for(let item of expression){
    s1.push(item);
  }
  while(!s1.isEmpty()){
    char = s1.pop();
    if(operators.includes(char)){
      str = `(${s2.pop()}${char}${s2.pop()})`;
      s2.push(str);
    }
    else{
      s2.push(char);
    }
  }
  return s2.pop();
};

module.exports = prefixToInfix;
