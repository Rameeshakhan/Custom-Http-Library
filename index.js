const http = new httpLibrary()

http.get("https://jsonplaceholder.typicode.com/posts", callback)

function callback(err, data) {
    if (err) {
        console.log("iff")
        console.log(err)
    } else {
        console.log("else")
        console.log(data)
    }
}

