function qwe(){
  let counter = 0;
  const password = "213546";
  const stroke = document.getElementsByClassName("input")[0].value;
    if(stroke === password){
      document.getElementsByClassName("title")[0].innerHTML = "ДА";
    }else {
        for (let i = 0; i<stroke.length; i++){
          password[i] === stroke[i] && counter++;
        }
         document.getElementsByClassName("title")[0].innerHTML = `НЕТ))), но кол-во угаданных позиций равно = ${counter}`;
    }
  }
  
  const btn = document.getElementsByClassName("btn")[0];
  btn.onclick = function(){
        qwe();
  }

  
