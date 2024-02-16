// AUTO SLIDE

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "asset/slideMPP1.png";
images[1] = "asset/slideMPP2.png";
images[2] = "asset/slideMPP3.png";

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

function setTitle(element) {
  const text = element.innerText;

  document.title = `${text} | E-Groceries`;
}

// VALIDATION
  document.getElementById("button").addEventListener("click", function () {
    let name = document.forms['input-control']['name'].value;
    let email = document.forms['input-control']['email'].value;
    let interest = document.forms['input-control']['interest'].value;

    if(!name) {
      document.getElementById("name-error").innerText = "Name cannot be blank!";
    }
    else {
      document.getElementById("name-error").innerText = "";
    }
    if(!email) {
      document.getElementById("email-error").innerText = "Email cannot be blank!";
    } 
    else {
      document.getElementById("email-error").innerText = "";
    }
    if(!interest) {
      document.getElementById("interest-error").innerText = "Interest cannot be blank!";
    } 
    else {
      document.getElementById("interest-error").innerText = "";
    }
  }
);

