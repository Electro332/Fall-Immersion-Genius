function darkMode(){
    document.getElementById("dark").style.backgroundColor = "black";
    document.getElementById("dark").style.color = "white";
    darkModes.innerText = "Light tmode";
    darkModes.onclick = lightMode;
    
}

function lightMode(){
    document.getElementById("dark").style.backgroundColor = "white";
    document.getElementById("dark").style.color = "black";
    darkModes.innerText = "Dark Mode";
    darkModes.onclick = darkMode;
}
