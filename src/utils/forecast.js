const { execFile } = require("child_process")
const request =require("request")

const forecast = (longitude,latitude,callback)=>{
    const url="https://api.darksky.net/forecast/dfdc70ecb758c9bc8fef46474bd2cb34/"+longitude+","+latitude
    request({url,json:true},(error, response)=>
    {
        if(error)
        callback("Connect to Internet!!",undefinded)
        else if(response.body.error)
        callback("Unable to find!!!")
        else
        callback(undefined,response.body.currently.temperature)
    }
    )

}
module.exports =forecast
