weather-icons
=============

A javascript library to convert 
[weather-types](https://github.com/dp28/weather-type) to SVG icons.

Example
-------

### Code
```javascript
import WeatherType from 'weather-type';
import {draw}      from 'weather-icons';

const weatherOption = WeatherType.fromString('storm');
weatherOption.map(weatherType => draw(weatherType, '#body');
  
```

### Output

![Storm icon](https://dp28.github.io/weather-icons/icons/storm.svg)

Further example outputs can be found [here](https://dp28.github.io/weather-icons/).

License
-------

[MIT](./LICENSE)
