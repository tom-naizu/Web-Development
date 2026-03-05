let button = document.getElementById("btn");

// list of all Mouse Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
    
button.addEventListener("contextmenu", ()=>{
    alert("Clicked The Button...")
})

button.addEventListener("click", () =>{
    document.querySelector(".box").innerHTML = "Yahhh!!! <b>Now Button is clicked well...!!!</b>"
})

button.addEventListener("dblclick", () =>{
    document.querySelector(".box").innerHTML = "Yahhh!!! <b>Now Button is clicked Doubled...!!!</b>"
})

