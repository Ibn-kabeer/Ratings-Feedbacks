let selectedRating = null

//Function to select a rating

function selectRating(rating) {
    selectedRating = rating;
    //store the selected rating
    
    // Remove the selected state from the selected button
    const buttons = 
    document.querySelector(`.rating-btn${rating}`);
    buttons.classList.remove("bg-blue-500", "text-white", "ring", "ring-blue-300");
    buttons.classList.add("bg-gray-200", "text-black");

    // Add the selected state to the clicked button
    buttons[rating - 1].classList.add("bg-blue-500", "text-white", "ring", "ring-blue-300");

    // Enable the Submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = false;
    submitButton.classList.remove("bg-gray-300", "text-gray-600", "cursor-not-allowed");
    submitButton.classList.add("bg-blue-500", "text-white", "cursor-pointer");
}

    
//function to submit the rating
function submitRating() {
    if (selectedRating)
    {
        document.getElementById("whole").style.display = "none";
        //hide the whole section 

        document.getElementById("survey").style.display = "none";
        // show me Thank-you section

        document.getElementById("Thank-you").style.display = "block";
        // display the selected rating

        document.getElementById("selected-rating").textContent = selectedRating;
    } else{
          alert("Please select a rating before submitting!");
    }
    
       
        
    
    }
