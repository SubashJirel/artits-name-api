const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors') //npm install cors --save // for cors realated error

app.use(cors())

const artists = {
    theweeknd : {
        age:29,
        name: 'Abel Tesfaye',
        birthLocation: 'Canada'
    },

    jojo : {
        age:21,
        name: 'Giorno Giovanna',
        birthLocation: 'Italy'
    },

    goku : {
        age:35,
        name: 'Son Goku"',
        birthLocation: 'Outer Space'
    },
    '21 dylan' : {
        age:29,
        name: 'dylan"',
        birthLocation: 'dylan'

    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname+'/index.html')
})



//creating the api
app.get('/api/:artistName',(request,response)=> { // the colons ':' lets us know that its a queryparam & not filepath.
   // console.log(request.params.artistName) ---> This gives whatever name we put in queryparamet aka /:artistName' 
   const artistName = request.params.artistName.toLowerCase() //query parameter ma bhako name

   if(artists[artistName]) { //truthy huda run  // we use bracket notation because some property has spaces in the name
    response.json(artists[artistName]) //if the artists name in query param exist in the js obj . the info is displayed

   } 
   else {
    response.json(artists['21 dylan'])
   }
    //response.json(artists)
})

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`)
})

// procfile tells us how to run the serverjs // to create it do: echo "web: node server.js" > procfile

