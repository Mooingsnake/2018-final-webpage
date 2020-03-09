function check()
{var password = document.getElementById("Pw1").value;
           var repsword = document.getElementById("Pw2").value;

           if(password != repsword) {
                  alert("两次密码不同，请重新输入");
                    if (event.preventDefault) {
                         event.preventDefault();
                     } else {
                         event.returnValue = false;
                     }
                  } else {
                     return true;
                  }
}
