//get modal element
const modal = document.getElementById("myModal");

//get buttons 
const openModalButton = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const alertBtn = document.getElementById("alertBtn");

//Open Modal on button click
openModalButton.onclick = function() {
    modal.style.display = "block";
}

//close Modal on outside click 
window.onclick = function(event){
    if (event.target === modal) {
        modal.style.display = "none"
    }
};

//show alert on button click
alertBtn.onclick = function() {
    alert("Test")
};
