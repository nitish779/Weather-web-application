//const { response } = require("express")

console.log("Server is running")
fetch("http: //localhost:3000/weather?address=london").then((response)=>
{
    response.json().then((data)=>
    {
        if(data.error)
        console.log(data.error)
        else
        console.log(data.forecast)
    })
})
const form = document.querySelector("form")
const search = document.querySelector("input")
const messageOne= document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

//messageOne.textContent="Loading"

form.addEventListener("submit",(e)=>
{
   e.preventDefault()
   const location =search.value
   messageOne.textContent="Loading"
   messageTwo.textContent=""
   fetch("http://localhost:3000/weather?address="+location).then((response)=>
   {
       response.json().then((data)=>
       {
           if(data.error)
          messageOne.textContent=data.error
           else
          {
            messageOne.textContent=data.forecast
            messageTwo.textContent=location
          } 
       })
   })

})