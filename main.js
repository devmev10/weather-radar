



const tem = document.querySelector('h1')
const winds = document.querySelector('h2')
document.querySelector('button').addEventListener('click', function(){
    const cityName = document.querySelector('input').value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=34a8abd512ce80b68ce6bf809045a765`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            tem.innerText = `Temperature: ${data.main.temp} Degree Celcius`
            winds.innerText = `Wind Speed: ${data.wind.speed} m/sec`
        })

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gMGtuhMQv4ZfzS8GrMUDmR2oT7gWNokB&s=${cityName}`)
    .then(res => res.json())
    .then(data => document.body.style.backgroundImage = url(`${data.data.images.original.url}`))
}
    


)
