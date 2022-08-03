const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

const artists = {
    theweeknd : {
        age:29,
        name: 'Abel Tesfaye',
        birthLocation: 'Canada'
    },

    jojo : {
        age:21,
        name: 'Giornia jouvan',
        birthLocation: 'Italy'
    },

    goku : {
        age:35,
        name: 'Son Goku"',
        birthLocation: 'Outer Space'
    },
    '21 dylan' : {
        age:'dylan',
        name: 'dylan"',
        birthLocation: 'dylan'

    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname+'/index.html')
})

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`)
})

//creating the api
app.get('/api/:artistName',(request,response)=> { // the colons ':' lets us know that its a queryparam & not filepath.
   // console.log(request.params.artistName)
   const artistName = request.params.artistName.toLowerCase()

   if(artists[artistName]) {   // we use bracket notation because some property has spaces in the name//truthy huda run
    response.json(artists[artistName]) //if the artists name in query param exist in the js obj . the info is displayed

   }
   else {
    response.json(artists['21 dylan'])
   }
    //response.json(artists)
})

