const dropDown = document.getElementById("drop-down");
const hamburger = document.getElementById("bars");
const cross = document.getElementById("cross");

function openDropDown() {
    dropDown.style.display = "flex";
    dropDown.style.flexDirection = "column";
    dropDown.style.justifyContent = "space-between";
    
    hamburger.style.display = "none";
    cross.style.display = "block";
}

function closeDropDown() {
    dropDown.style.display = "none";
    hamburger.style.display = "block";
    cross.style.display = "none";
}

