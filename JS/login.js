var auth = firebase.auth();
var db = firebase.firestore();

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
//turns input type:password from html back to text when the button is clicked
function showPassword() {
	var x = document.getElementById("password_inp");
	var img = document.getElementById("check1");
  	if (x.type === "password") {
    	x.type = "text";
		img.src = "images/open_eye.png";
  	} else {
		x.type = "password";
		img.src = "images/closed_eye.png";
  	}
}

//has a second button so the user can view their password input independently
function showPassword2() {
  var x = document.getElementById("password2_inp");
	var img = document.getElementById("check2");
  	if (x.type === "password") {
    	x.type = "text";
		img.src = "images/open_eye.png";
  	} else {
		x.type = "password";
		img.src = "images/closed_eye.png";
  	}
}

//another button so the user can view their password when they login vs signup
function showPassword3() {
  var x = document.getElementById("logpassword_inp");
	var img = document.getElementById("check3");
  	if (x.type === "password") {
    	x.type = "text";
		img.src = "images/open_eye.png";
  	} else {
		x.type = "password";
		img.src = "images/closed_eye.png";
  	}
}

//populates values in age dropdown
for(var i=9; i<=12; i++) {
	var select = document.getElementById("grade_drop");
	var option = document.createElement("OPTION");
	select.options.add(option);
	option.text = i;
	option.value = i;
}


$("#sign_up").submit( function(e) {
	e.preventDefault();	
	
	var name = document.getElementById("name_inp").value;
	var grade = document.getElementById("grade_drop").value;
	var studentId = document.getElementById("schoolId_inp").value;
	var email = document.getElementById("email_inp").value;
	var phone = document.getElementById("phone_inp").value;
	var password = document.getElementById("password_inp").value;
	var repassword = document.getElementById("password2_inp").value;

	var type = document.getElementById("type").value = "teacher";

	if (password !== repassword) {
		alert("Passwords do not match");
	} 
	else if (password.length < 6) {
		alert("Password is too short and/or weak");
	} else {
		if(grade == 9 || grade == 10 || grade == 11 || grade == 12){
			email = email+"@ltisdschools.net";
			auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
			alert(error.message);
			});
			saveToDatabase(name, email, phone, grade, studentId);
		} else {		
			email = email+"@ltisdschools.org";
			auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
			alert(error.message);
			});
			saveToDatabaseTeacher(name, email, phone, grade);
		}
	}


	document.getElementById("name_inp").value = "";
	document.getElementById("phone_inp").value = "";
	document.getElementById("email_inp").value = "";
	document.getElementById("schoolId_inp").value = "";
	document.getElementById("password_inp").value = "";
	document.getElementById("password2_inp").value = "";
	
	});
	 
$("#log_in").submit( function(e) {
	e.preventDefault();	
	var email = document.getElementById("logemail_inp").value;
	var password = document.getElementById("logpassword_inp").value;
	//signs a user in if they had already created a password with their email
	auth.signInWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorCode, errorMessage);
  		// ...
	});
	
	document.getElementById("logemail_inp").value = "";
	document.getElementById("logpassword_inp").value = "";
});

firebase.auth().onAuthStateChanged(function(user) { 
	if(user){
		console.log(user);
		window.open("index.html", "_self");
	} else{
		console.log("not logged in");
	}
});


function teacherEmail() {
	document.getElementById("basic-addon2").textContent = "@ltisdschools.org";
	document.getElementById("grade").style.display = "none";
	document.getElementById("schoolID").style.display = "none";
	document.getElementById("grade_drop").value = "Teacher";
	document.getElementById("schoolID").style.required	= false;
}

function studentEmail() {
	document.getElementById("basic-addon2").textContent = "@ltisdschools.net";
	document.getElementById("grade").style.display = "block";
	document.getElementById("schoolID").style.display = "block";
	document.getElementById("schoolID").style.required= true;
}

function saveToDatabase(name, email, phone, grade, studentId) {
    db.collection("students").add({
		name: name,
		email: email,
		phone: phone,
		grade: grade,
		ID: studentId
    });
}

function saveToDatabaseTeacher(name, email, phone, grade) {
    db.collection("teachers").add({
		name: name,
		email: email,
		phone: phone,
		grade: teacher
    });
}

function resetEmail() {
	var auth = firebase.auth();
	var emailAddress = document.getElementById("email_inp2").value;


	auth.sendPasswordResetEmail(emailAddress).then(function() {

	}).catch(function(error) {
	  // An error happened.
	});

	document.getElementById("email_inp2").value = "";
	alert("a password reset link has been sent to your email");
}
