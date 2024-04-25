// Call Elements
var form = document.getElementsByTagName("form")[0];

var nameInput = document.querySelector(".input-div input[type=text]");
var emailInput = document.querySelector(".input-div input[type=email]");
var textarea = document.querySelector(".input-div textarea");

var stars = document.querySelectorAll(".starts i");

var clear = document.querySelector(".buttons input[type=button]");

var errorName = document.getElementById("name-error");
var errorEmpty = document.getElementById("empty-error");



// On Click Submit Check If Every Field Not Empty
form.onsubmit = function(event) {
    // Check If Name Not Contain A Number
    var hasNumberTest = /\d/;   // Regular Expersion

    if (hasNumberTest.test(nameInput.value)) {
        errorName.innerHTML = "Name can't contains number!"; // Display Error Message
        event.preventDefault(); // Prevent Send Form
    }
    else {
        errorName.innerHTML = ""; // Remove Error Message
    }


    // Check If All Starts Are Not Choosen (Change To True If At Least One Star Choosen )
    allStarsEmpty = false;
    stars.forEach(function(star) {
        if (star.classList.contains("fa-solid")) {
            allStarsEmpty = true
        }
    })


    // Prevent Send Form If Feild Is Empty
    if (nameInput.value == "" || emailInput.value == "" || allStarsEmpty == false) {
        errorEmpty.innerHTML = "Fields can't be empty!"; // Display Error Message
        event.preventDefault(); // Prevent Send Form
    }    
};



// Stars Evaluation
stars.forEach(function(star) {
    star.addEventListener("click", function() {
        // If Star Unfilled > Fill It (fa-regular == unFill, fa-solid == Filled)
        if (star.classList.contains("fa-regular")) {
            star.classList.remove("fa-regular");
            star.classList.add("fa-solid");
        }

         // If Star Fill > Unfill It
        else if (star.classList.contains("fa-solid")) {
            star.classList.remove("fa-solid");
            star.classList.add("fa-regular")
        }
    })
})



// Clear Fields
clear.addEventListener("click", function() {
    // Reset Fields
    form.reset();
    
    // Reser Stars
    stars.forEach(function(star) {
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
    })
})
