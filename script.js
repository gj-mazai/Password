
function qwe(){
    let counter = 0;
    const password = "731515"
    const stroke = document.getElementsByClassName("input")[0].value;
      if(stroke === password && stroke.length === 6 ){
        document.getElementsByClassName("title")[0].innerHTML = "ДА";
      }else if (stroke !== password && stroke.length === 6 ) {
          for (let i = 0; i<stroke.length; i++){
            password[i] === stroke[i] && counter++;
          }
           document.getElementsByClassName("title")[0].innerHTML = `НЕТ))), но кол-во угаданных позиций равно = ${counter};`;
      } else {
        document.getElementsByClassName("title")[0].innerHTML = `Неа, введено не верное кол-во символов`;
      }
    }
    
    const btn = document.getElementsByClassName("btn")[0];
    btn.onclick = function(){
          qwe();
    }
