console.log("#...Tom Naizu...#")

// let tom_naizus = document.getElementsByClassName("box")
// console.log(tom_naizus)
// tom_naizus[2].style.backgroundColor = "green"

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "green"    

// document.getElementById("redbox").style.backgroundColor = "yellow"
// document.getElementsByTagName("div")
// document.querySelector(".box").style.backgroundColor = "red"

document.querySelectorAll('.box').forEach(e => {
    e.style.backgroundColor = "red";
});
console.log(document.querySelectorAll)

