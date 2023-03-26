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
      room_name = localStorage.getItem("room_name_input");

function SendMessage(){
      you_message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name : user_name, 
            message : you_message,
            like : 0
      });

      document.getElementById("message").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tick = "<h4>" +name+ "<img class = 'user_tick' src = 'tick.png'> </h4>";
         message_with_tick = "<h4 class = 'message_h4'>" +message+ "</h4>";
         like_button = "<button class = 'btn btn-success' id = " +firebase_message_id+ "value = " +like+ "onclick = 'updatelike(this.id)'>";
         span_with_tick = "<span class = 'glyphicon glyphicon-thumbs-up'> Like :  " +like+ "</span> </button> <hr>";
         row = name_with_tick + message_with_tick + like_button + span_with_tick;

         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();
