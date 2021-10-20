
const firebaseConfig = {
      apiKey: "AIzaSyDmfo5dEuizg4dqin45pGVS-0AiRGZoUaM",
        authDomain: "c94-62f1c.firebaseapp.com",
        databaseURL: "https://c94-62f1c-default-rtdb.firebaseio.com",
        projectId: "c94-62f1c",
        storageBucket: "c94-62f1c.appspot.com",
        messagingSenderId: "750272314351",
        appId: "1:750272314351:web:2b18312ad48e3843acd41a"
      };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+ Room_names + "onclick='redirectToRoomName(this.i)' ># " + Room_names + "<div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room name", name)
      window.location = "kwitter_page.html";
}