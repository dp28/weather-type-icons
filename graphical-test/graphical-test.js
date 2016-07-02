import WeatherType from 'weather-type';

import {draw} from '../dist/weather-icons';

const codes = [
  'Clear',
  'Light rain showers',
  'Light rain',
  'Heavy rain showers',
  'Heavy rain',
  'Mist',
  'Broken clouds',
  'Light sleet showers',
  'Light sleet',
  'Heavy sleet showers',
  'Heavy sleet',
  'Fog',
  'Light clouds',
  'Light snow showers',
  'Light snow',
  'Heavy snow showers',
  'Heavy snow',
  'Thunderstorm',
  'Heavy clouds',
  'Light hail showers',
  'Light hail',
  'Heavy hail showers',
  'Heavy hail'
]

const list = document.createElement('UL');
document.body.appendChild(list);

codes.forEach(text => {
  WeatherType.fromString(text).map(weatherType => {

    const listItem = document.createElement('LI');
    list.appendChild(listItem);

    const iconDiv = document.createElement('DIV');
    const textElement = document.createElement('P');
    listItem.appendChild(iconDiv);
    listItem.appendChild(textElement);

    iconDiv.id = weatherType.toCode();
    textElement.textContent = text;

    draw(weatherType, `#${iconDiv.id}`);
  });
});
