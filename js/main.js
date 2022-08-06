//new one

document.querySelector('button').addEventListener('click',apirequest)

async function apirequest() {
    const artistName = document.querySelector('input').value
    //console.log(artistName)

   try{
    const res = await fetch(`https://artist-name-api.herokuapp.com/api/${artistName}`)
    const data = await res.json()

    console.log(data)
   document.querySelector('h2').innerText = data.name
   } catch(error) {
    console.log(error)
   }

}