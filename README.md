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

Install
-------

```
npm install weather-icons --save
```

Usage
-----

### `draw(weatherType: WeatherType, selector: string)`

Appends an SVG element to an element in the HTML document mathcing the provided
CSS selector. The SVG is a pictorial representation of the WeatherType.

### Exposed classes

The generated SVG has default fill colours set for each component. However, 
these can be overridden by adding CSS 'fill' rules to the following CSS 
selectors:

| Selector       | Default `fill` | Component description |
|----------------|:--------------:|----------------------:|
| `.cloud`       |                | Any cloud             |
| `.cloud.light` | `lightgrey`    | Light clouds          |
| `.cloud.heavy` | `grey`         | Heavy clouds          |
| `.raindrop`    | `dodgerblue`   | Raindrops             |
| `.hail`        | `white`        | Hail stones           |
| `.snowflake`   | `white`        | Snowflakes            |
| `.lightning`   | `gold`         | Lightning bolt        |
| `.sun`         | `gold`         | Sun                   |
| `.icon-text`   | `grey`         | Text for Mist & Fog   |


License
-------

[MIT](./LICENSE)
