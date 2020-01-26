var auth = firebase.auth();

auth.onAuthStateChanged(function(user) { 
	if(user){
		console.log(user);
		document.getElementById("login").style.display = "none";
		document.getElementById("logout").style.display = "block";
		document.getElementById("navbarDropdown").style.display = "block";
		document.getElementById("settings").style.display = "block";
	} else {
		console.log("not logged in");
	}
});

function logOut() {
//signs the user out when they click the logout button
	auth.signOut().then(function() {
			console.log("Sign-out successful.");
			window.open("index.html", "_self");
		});
}