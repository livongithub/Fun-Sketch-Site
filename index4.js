// defining my variables 

let numberOneVar = 0 
let numberTwoVar = 0 
let numberThreeVar = 0 
let numberVar = 0

let buttonOneBool = false 
let buttonTwoBool = false 
let buttonThreeBool = false 

// catching the HTML elements 

let changeBackground = document.getElementById("changeBackground")
let changeDiv = document.getElementById("changeDiv")
let changeText = document.getElementById("changeText")

let title = document.getElementById("title")

let bodyText = document.getElementById("bodyText")




// creating the actions when clicking 

changeBackground.addEventListener('click', ()=>{
    numberOneVar += 1 
    //    checking in the console to see if it works 
    console.log(numberOneVar)

        // applying it in my HTML 
        changeBackground.innerHTML = "change the backgrond    " + numberOneVar

          // toggling a boolean
          buttonOneBool =! buttonOneBool
          console.log(buttonOneBool)
  
          if(buttonOneBool == true) {
            document.body.style.backgroundColor = "rgb(255, 0, 127)"
          }
  
          else {
            document.body.style.backgroundColor = "rgb(204, 0, 204)"
          }

           numberVar= numberOneVar + numberThreeVar + numberTwoVar

           title.innerHTML = "grand total  " + numberVar 

})



changeDiv.addEventListener ("click", ()=>{
    numberTwoVar += 1 
    //    checking in the console to see if it works 
       console.log(numberTwoVar)
    
        // applying it in my HTML 
        changeDiv.innerHTML = "change the div    "+ numberTwoVar
    
        // toggling a boolean
        buttonTwoBool =! buttonTwoBool
        console.log(buttonTwoBool)

        if(buttonTwoBool == true) {
            changeDiv.style.backgroundColor = "rgb(102, 255, 178)"
            changeDiv.style.width = "300px"
            changeDiv.style.height = "300px"
            changeDiv.style.borderRadius = "50%"
        }

        else {
            changeDiv.style.backgroundColor = "rgb(255, 255, 102)"
            changeDiv.style.width = "200px"
            changeDiv.style.height = "200px"
            changeDiv.style.borderRadius = "10px"
        }

         numberVar= numberOneVar + numberThreeVar + numberTwoVar

         title.innerHTML = "grand total  " + numberVar 


})



changeText.addEventListener ("click", ()=>{
    numberThreeVar += 1 
    //    checking in the console to see if it works 
       console.log(numberThreeVar)
    
        // applying it in my HTML 
        changeText.innerHTML = "read the secret message    "+ numberThreeVar

          // toggling a boolean
          buttonThreeBool =! buttonThreeBool
          console.log(buttonThreeBool)
  
          if(buttonThreeBool == true) {
              changeText.append("    boo!")
              bodyText.append("   I scared you!")
          }
  
          else {
            changeText.append("")
            bodyText.append("")
          } 

           numberVar= numberOneVar + numberThreeVar + numberTwoVar

           title.innerHTML = "grand total  " + numberVar 

})


// adding up the variables 


