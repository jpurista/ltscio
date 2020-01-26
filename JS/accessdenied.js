firebase.auth().onAuthStateChanged(function(user) { 
	if(user){
		console.log("logged_in")
		console.log(firebase.auth().currentUser.uid)
	} else {
		window.open("index.html", "_self");
	}
});