document.addEventListener("DOMContentLoaded", function() {
    let newUserButton = document.getElementById("new-user");
    newUserButton.addEventListener("click", function() {
      
      window.open("./new account/")
      
      document.body.appendChild(newAccountDivBG)
      
    });
  });
  