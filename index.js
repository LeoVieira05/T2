require('dotenv').config()
const axios = require('axios')

const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    PROTOCOL,
    URL_BASE1,
    URL_BASE2} = process.env

// https://api.openweathermap.org/data/2.5/forecast?q=Itu&units=metric&appid=metric&appid=chave&lang=pt_br&cnt=10

const url1 = `${PROTOCOL}://${URL_BASE1}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`

const minhaPromise1 = axios.get(url1)
minhaPromise1.then((res) => {
    return res.data
})
.then((res) => {
    // console.log(res.city['coord'])
    return res.city['coord']
})
.then( async (res) => {
    const url2 = `${PROTOCOL}://${URL_BASE2}?lat=${res['lat']}&lon=${res['lon']}&appid=${APPID}`
    const data = (await axios.get(url2)).data
    console.log(data['weather'][0]['description'])
    console.log(data['main']['feels_like'])
})



