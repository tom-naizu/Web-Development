// async function getData() {
//     // simulate getting data from a server
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove(455)
//         }, 3500);
//     })
// }

// settle means promise reslove or reject successfully
// reslove means promise has settle successfully 
// reject means promise has not settle successfully

async function getData() {
    // simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json()
    return data
}


async function main() {

    console.log("loading Modules")
    console.log("Data retrieve")
    console.log("Data Loaded")

    let data = await getData()

    console.log(data)
    console.log("Process Data")
    console.log("Task 2")
}
main()

// data.then(() => {
//     console.log(data)
//     console.log("Process Data")
//     console.log("Task 2")
// })