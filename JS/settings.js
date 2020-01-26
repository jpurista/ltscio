var db = firebase.firestore();
var oop = "";

firebase.auth().onAuthStateChanged(function(user) {
 	if (user) {
 		oop = firebase.auth().currentUser.uid;
  	} else {
  		console.log("not working");
  }
});


$("#resetEmail").submit( function(e) {
	e.preventDefault();
	var newemail = document.getElementById("newemail_inp").value;
	var newemail2 = document.getElementById("newemail2_inp").value;
	
	if(newemail === "" || newemail2 === ""){
		alert("make sure both email fields are filled in");
	} else if(newemail === newemail2){
		var user = firebase.auth().currentUser;

		user.updateEmail(newemail).then(function() {
		  	// Update successful.
		}).catch(function(error) {
			console.log(error);
		});
		document.getElementById("newemail_inp").value = "";
		document.getElementById("newemail2_inp").value = "";
	}
});

$("#resetPassword").submit( function(e) {
	e.preventDefault();
	var newpass = document.getElementById("newpass_inp").value;
	var newpass2 = document.getElementById("newpass2_inp").value;
	var user = firebase.auth().currentUser;
	
	if(newpass === "" || newpass2 === ""){
		alert("make sure both email fields are filled in");
	} else if(newpass === newpass2){
		user.updatePassword(newpass).then(function() {
		  	// Update successful.
		}).catch(function(error) {
			console.log(error);
		});
		document.getElementById("newemail_inp").value = "";
		document.getElementById("newemail2_inp").value = "";
	}		
});