const axios= require('axios');

const getclima= async (lati, longi) =>
{
  let retorno= await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=a5a95a6ea152b2153de85a01320e0b36`);

  return retorno.data.main.temp;
}

module.exports=
{
  getclima
}
