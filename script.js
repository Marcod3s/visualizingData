let HumanName = document.querySelector('#name')
let gender = document.querySelector('#gender')
let country = document.querySelector('#country')
let age = document.querySelector('#age')
let picture = document.querySelector('#picture')
let humanPic = document.querySelector('#humanPic')
let button = document.querySelector('#generation')


function generateHuman(){

    let human = dataArray[Math.floor(Math.random() * dataArray.length)]
    HumanName.innerHTML = `Name: ${human.name.title} ${human.name.first} ${human.name.last}` 
    gender.innerHTML = `Gender: ${human.gender}`
    country.innerHTML = `Country: ${human.location.country}`
    age.innerHTML = `Age: ${human.dob.age}`
    humanPic.src = human.picture.large
}

button.onclick = function(){
    generateHuman()
}
