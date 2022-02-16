function addUser() {
      user=document.getElementById("textInput_1").value;
      localStorage.setItem("Username",user);
      window.location="room.html";
}