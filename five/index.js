// fetching the CSS 

let nounSpan = document.getElementsByClassName('noun')
let verbSpan = document.getElementById('verb')
let adjectiveSpan = document.getElementById('adjective')
let eventSpan = document.getElementById('event')

// setting arrays 

let nounArray = ['flower', 'drying rack', 'apple', 'rose', 'sunscreen', 'rat', 'dog', 'cat', 'ring']
console.log(nounArray[4])
let verbArray = ['walk', 'drive', 'run', 'write', 'listen', 'cook', 'figureskate']
console.log(verbArray[5])
let adjectiveArray = ['bald', 'agreable', 'mysterious', 'gentle', 'helpless', 'nervous', 'obnoxious', 'plump', 'plain', 'repulsive', 'tiny']
console.log(adjectiveArray[7])
let eventArray = ['they fell', 'they got their makeup done', 'they commited arson', 'the sun exploded', 'their car broke down', 'the moon crashed onto earth']
console.log(eventArray[1])

// setting counters 

let nounCounter = 0 
let verbCounter = 0 
let adjectiveCounter = 0 
let eventCounter = 0 


// creating the event 

nounSpan.addEventListener("click", ()=> {

    nounSpan.innerHTML = nounArray[nounCounter]
    nounCounter++ 

    if (nounCounter > nounArray.length -1){
        nounCounter = 0 
    }
})




verbSpan.addEventListener("click", ()=> {

    verbSpan.innerHTML = verbArray[verbCounter]
    verbCounter ++ 

    if (verbCounter > verbArray.length -1){
        verbCounter = 0 
    }
})


adjectiveSpan.addEventListener("click", ()=> {

    adjectiveSpan.innerHTML = adjectiveArray[adjectiveCounter]
    adjectiveCounter ++ 

    if (adjectiveCounter > adjectiveArray.length -1){
        adjectiveCounter = 0 
    }
})


eventSpan.addEventListener("click", ()=> {

    eventSpan.innerHTML = eventArray[eventCounter]
    eventCounter ++ 

    if (eventCounter > eventArray.length -1){
        eventCounter = 0 
    }
})

