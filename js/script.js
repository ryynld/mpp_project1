// AUTO SLIDE

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "asset/banner1.jpg";
images[1] = "asset/banner2.jpg";
images[2] = "asset/banner3.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


// VALIDATION
function validateForm() {
    const name = document.forms["contact-right"]["name"].value;
    const email = document.forms["contact-right"]["email"].value;
    const interest = document.forms["contact-right"]["interest"].value;
  
    const isEmail = email.match(/[\w.]+@\w+.\w{2,3}(.\w{2,})?/);
  
    if (!name) {
      const errName = document.getElementById("name-error");
  
      errName.style.display = "block";
      errName.style.visibility = "visible";
    }
  
    if ((email && !isEmail) || !email) {
      const errEmail = document.getElementById("email-error");
  
      errEmail.style.display = "block";
      errEmail.style.visibility = "visible";
    }
  
    if (interest === "none") {
      const errInterest = document.getElementById("interest-error");
  
      errInterest.style.display = "block";
      errInterest.style.visibility = "visible";
    }
  
    if (name && email && isEmail && interest !== "none") {
      alert(`Data anda telah sukses terkirim, ${name}`);
  
      return false;
    }
  
    return false;
  }
  
  function fillInput(fieldName) {
    const inputValue = document.getElementById(fieldName).value;
    const errorText = document.getElementById(`${fieldName}-error`);
  
    if (inputValue && errorText.style.visibility === "visible") {
      errorText.style.display = "none";
      errorText.style.visibility = "hidden";
    }
  }
  
  function selectInterest() {
    const interestValue = document.getElementById("interest").value;
    const errorText = document.getElementById("interest-error");
  
    if (interestValue !== "none" && errorText.style.visibility === "visible") {
      errorText.style.display = "none";
      errorText.style.visibility = "hidden";
    }

};