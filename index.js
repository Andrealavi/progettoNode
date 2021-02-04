const fetch = require("node-fetch")

const url = "https://jsonplaceholder.typicode.com/posts"

const request = (url, callback) => {
    return fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(err => console.log("Unable to connect\n", err))
}

const printId4 = (data) => {
    return data.forEach(e => {
        if (e.userId === 4) console.log(e.id)
    });
}

const printIdOdd = (data) => {
    return data.forEach(e => {
        if (e.id % 2 !== 0) console.log(e.id)
    })
}

const printWordsEven = (data) => {
    return data.forEach(e => {
        if (e.title.split(" ").length % 2 === 0) console.log(e.id)
    })
}

const bodyLetters = (body) => {
    return body.split("")
}

const lettersMultiple = (data) => {
    return data.forEach(e => {
        let body = bodyLetters(e.body)
        let bodyLettersFixed = []
        for (let i = 0; i<body.length; i++){
            if (body[i] !== " " && body[i] !== "\n") bodyLettersFixed.push(body[i])
        }

        if (bodyLettersFixed.length % 3 === 0) console.log(e.id)
    })
}

const bodyStartWithS = (data) => {
    console.log(data.reduce((bodyString, e) => {
            if (e.body.startsWith("s")) return bodyString + e.body
            return bodyString
        }, "")
    )
}


//request(url, printId4)
//request(url, printIdOdd)
//request(url, printWordsEven)
//request(url, lettersMultiple)
//request(url, bodyStartWithS)
