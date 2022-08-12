module.exports = function check(str, bracketsConfig) {

let stack = []; /*назначаем стек*/
 
if (str.length % 2 != 0) return false; /*длина заданной строки, проверка четности*/

let checkeven = 1; /*начальное значение счетчика открытия-закрытия*/
let cheven;
let chClose;
  
for (var i = 0; i < str.length; i++) { /*обход каждого символа в str*/
  
  let close = false; /*начальное значение закрытия*/
  let open = false; /*начальное значение открытия*/
  let even = false; /*начальное значение события*/
      
  for (let j = 0; j < bracketsConfig.length; j++) { /*цикл сравнения со значениям подмассивов*/  
          
    if (bracketsConfig[j][0] == bracketsConfig[j][1] && str.charAt(i) == bracketsConfig[j][0] ) {
        even = true; /*если событие состоялось*/
        checkeven = (-1) * checkeven; /*счетчик открытия-закрытия*/
        cheven = str.charAt(i); 
        break;
      }
            
    if (str.charAt(i) == bracketsConfig[j][0]) {
        open = true;  /*проверка открытия*/
        break;
      }
    
    if (str.charAt(i) == bracketsConfig[j][1]) { /*проверка закрытия любым из двух символов*/
        close = true;
        chClose = bracketsConfig[j][0]; 
        break;
        }
  }
          
    if (even == true) {
        if (checkeven == -1) {
            stack.push(str.charAt(i));
        }
    
        if (checkeven == 1 && cheven == stack[stack.length - 1]) {
            stack.pop();
        }
      
    } else {

        if (open === true) {
           stack.push(str.charAt(i)); 
        }
      
        if (close === true && chClose == stack[stack.length - 1]) {
           stack.pop();
        }
   }
}
return stack.length === 0 ? true : false;
}
