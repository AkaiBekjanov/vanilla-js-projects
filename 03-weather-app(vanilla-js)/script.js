let searchValue = document.querySelector("#search-box")
let btnSubmit = document.querySelector('.btn-submit')
let city = document.querySelector('#City')
let temp = document.querySelector('#Temp')
let weather = document.querySelector('#Weather')
btnSubmit.addEventListener('click',request)
searchValue.addEventListener('keydown',requestByEnter)


function requestByEnter(e){
    if(e.key == 'Enter'){
        request()
    }
    return
}
async function request(){
 
    const myApi = "c48da8ea36d51dd0a68b92e5d2a67bce"
    const response =await  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&appid=${myApi}&units=metric`)
    const data = await response.json()
    console.log(data)
    city.textContent ='City: ' + data.name
    weather.textContent ='Weather: ' + data.weather[0].main
    temp.textContent = 'Temperature: ' + data.main.temp + '°'

    
    }  



