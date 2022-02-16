var firebaseConfig = {
  apiKey: "AIzaSyB3eoC6TRtyqrdKfCm93zXzY3X-R_ZbXnI",
  authDomain: "fritter-9c923.firebaseapp.com",
  databaseURL: "https://fritter-9c923-default-rtdb.firebaseio.com",
  projectId: "fritter-9c923",
  storageBucket: "fritter-9c923.appspot.com",
  messagingSenderId: "280880139258",
  appId: "1:280880139258:web:f5d58772d21015f596f243"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  window.alert(room_name + "  - Room Added ");
  localStorage.setItem("room_name", room_name);
  document.getElementById("room_name").value = "";
  window.location = "page.html";

}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "page.html";
}

function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}