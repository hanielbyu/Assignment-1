// Get the modal
var modal

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

function showModal(id) {
  modal = document.getElementById(`myModal${id}`);
  modal.style.display = "block";
}


function closeModal() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function clickButton() {                      // Add to cart button
    modal.style.display = "none";
    alert("Added to cart succesfully")
}