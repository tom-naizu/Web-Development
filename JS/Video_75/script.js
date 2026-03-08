console.log("Tom Naizu is Hacker")
console.log("Harry is Hecker")

setTimeout(() => {
    console.log("Inside the Settimeout")
}, 0)

setTimeout(() => {
    console.log("Inside the Settimeout 2 ")
}, 0)

console.log("The End the statement")

const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Tom Naizu");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)