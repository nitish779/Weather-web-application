const request= require("request")
const geocode = (address,callback)=>
{
    url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoibml0aXNoZ295YWw3NzkiLCJhIjoiY2tmYXZseXVtMHJ2ZzJwcHgxaXZoYXMxbSJ9.JwB6yVA7MGKu2ccP4b7vhg"
    request({url,json :true},(error,response)=>
    {
        if(error)
        callback("Check Internet Connection!!",undefined)
         else if(response.body.features.length == 0)
         callback("Enter Valid Location",undefined)
        else
        callback(undefined,{
            longitude :response.body.features[0].center[1],
            latitude : response.body.features[1].center[0],
            location:   response.body.features[1].place_name
        })
    })
}
module.exports = geocode