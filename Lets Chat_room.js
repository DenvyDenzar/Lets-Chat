var firebaseConfig = {
      apiKey: "AIzaSyDgiBZHOc-kKAhprQCv_6lJWMVQcid8hIU",
      authDomain: "nilohit-s-kwitter.firebaseapp.com",
      databaseURL: "https://nilohit-s-kwitter-default-rtdb.firebaseio.com",
      projectId: "nilohit-s-kwitter",
      storageBucket: "nilohit-s-kwitter.appspot.com",
      messagingSenderId: "1089533907334",
      appId: "1:1089533907334:web:22b125a63d51dba1d39c07"};
      
      firebase.initializeApp (firebaseConfig);

      user_name = localStorage.getItem("user_name_input");

      document.getElementById("user_name_input").innerHTML = "Welcome  "+user_name+"!";

      function RoomName(){
            room_name = document.getElementById("room_name_input").value ;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"Room's Name"
            });
            localStorage.setItem("room_name_input", room_name);
            window.location = "Lets Chat_page.html";
      }
       
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name: " +Room_names);
      Row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += Row ;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("Room_names", name);
      window.location = "Lets Chat_page.html"
}

function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name_input");
      localStorage.removeItem("Room_names");
}