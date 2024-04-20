const input=document.getElementById('input')
const button=document.getElementById('search')
const country=document.getElementById('country')
const time=document.getElementById('time')
const city=document.getElementById('city')
const state=document.getElementById('state')
const cloud=document.getElementById('cloud')
const text=document.getElementById('text')
const temp=document.getElementById('temp')
const icon=document.getElementById('text-icon');

async function findWeather(city)
{
            const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=ce7051ff107c4605a7371506240404&q=${city}&aqi=yes`)

            const data= await response.json()
            return data
}

button.addEventListener('click',async (e)=>{
        const cityName=input.value
        const result=await findWeather(cityName)
        const {current,location}=result;
        console.log(current)
        // location
        country.textContent=location.country
        state.textContent=location.region
        city.textContent=location.name
        time.textContent=location.localtime

        // current
        cloud.textContent=current.cloud        
        text.innerHTML=`${current.condition.text} <img src=${current.condition.icon} alt='weather icon'>`
        temp.textContent=current.temp_c        
})