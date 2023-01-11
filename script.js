function qwe(){
    if(document.getElementsByClassName("input")[0].value === "782356"){
      document.getElementsByClassName("title")[0].innerHTML = "ДА";
    }else {
         document.getElementsByClassName("title")[0].innerHTML = "НЕТ)))";
    }
  }
  
  const btn = document.getElementsByClassName("btn")[0];
  btn.onclick = function(){
        qwe();
  }

  
