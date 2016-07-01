import WeatherType from 'weather-type';

import {draw} from '../dist/weather-icons';

const codes = [
  'thunderstorm',
  'heavy_hail',
  'heavy_snow',
  'heavy_sleet',
  'heavy_rain',
  'heavy_hail_showers',
  'heavy_snow_showers',
  'heavy_sleet_showers',
  'heavy_rain_showers',
  'light_hail',
  'light_snow',
  'light_sleet',
  'light_rain',
  'light_hail_showers',
  'light_snow_showers',
  'light_sleet_showers',
  'light_rain_showers',
  'Fog',
  'Mist',
  'heavy_clouds',
  'light_clouds',
  'broken_clouds',
  'clear'
]

const list = document.createElement('UL');
document.body.appendChild(list);

codes.forEach(code => {
  const listItem = document.createElement('LI');
  list.appendChild(listItem);
  const iconDiv = document.createElement('DIV');
  const textDiv = document.createElement('DIV');
  iconDiv.id = code;
  listItem.appendChild(iconDiv);
  listItem.appendChild(textDiv);
  textDiv.textContent = code;
  console.log(code, WeatherType.fromString(code).value);
  draw(`#${code}`, WeatherType.fromString(code).value);
});
