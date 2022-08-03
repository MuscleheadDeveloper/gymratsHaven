const settingsmenu = document.querySelector("#settings");
const darkBtn = document.getElementById("dark-mode");
function navigate() {
    settingsmenu.classList.toggle("settings-menu-visible");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }    
}
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-on");
    document.body.classList.remove("dark-theme");
} 
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
