/*function addTwoNumbers(num1, num2) {
    return num1 + num2
};
const sum = addTwoNumbers(5, 10);
console.log(sum);

function multiplyTwoNumbers(num1, num2) {
    return num1 * num2
}
const product = multiplyTwoNumbers(5, 10);
console.log(product);
let food = "pizza, burger, pie;
console.log(food)
window.alert(food)
*/

document.getElementById("myH1").textContent = "Hello"
document.getElementById("myP").textContent = "I like Pizza"


function change(){
    document.getElementById("myH1").textContent = "Button Clicked!"
}

// Counter Button
function counter(){
 counter_number = document.getElementById("number");
 counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1
}
const darkModes = document.getElementById("switch");
const body = document.getElementById("dark")

// Dark Mode Button
function darkMode(){
    document.getElementById("dark").style.backgroundColor = "black";
    document.getElementById("dark").style.color = "white";
    darkModes.innerText = "Light Mode";
    darkModes.onclick = lightMode;
    
}
function lightMode(){
    document.getElementById("dark").style.backgroundColor = "white";
    document.getElementById("dark").style.color = "black";
    darkModes.innerText = "Dark Mode";
    darkModes.onclick = darkMode;
}

//get modal element
const modal = document.getElementById("myModal");

//get buttons 
const openModalButton = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const alertBtn = document.getElementById("alertBtn");

//Open Modal on button click
openModalButton.onclick = function Open() {
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
    alert("This is an alert")
}; 

//Event Handling
    document.getElementById("clickme").addEventListener('click', function() {
        image = document.createElement('img');
        image.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
        document.body.appendChild(image);
    });

    
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("myForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            if (name && email && message) {
                alert("Form submitted successfully!\nName: ${name}\nEmail ${email} \nMessage ${message}");
            } else {
                alert("Please fill out the required information") ;
            }
        }
    )

    }) 