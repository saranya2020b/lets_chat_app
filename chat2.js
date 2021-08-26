const firebaseConfig = {
    apiKey: "AIzaSyDqHrv6IzFzUY-3WFlSeIjqeuqKTzLtVlM",
    authDomain: "lets-chat-web-app-ab73a.firebaseapp.com",
    projectId: "lets-chat-web-app-ab73a",
    storageBucket: "lets-chat-web-app-ab73a.appspot.com",
    messagingSenderId: "424530008057",
    appId: "1:424530008057:web:aaaf5cda21860a59708f28",
    measurementId: "G-RFE3ZJDET4"
  };



user_name = localStorage.getItem("Username");


document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname",room_name);
  
      window.location = "chatting_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code

//End code
});});}
getData();