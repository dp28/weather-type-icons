import {colours} from '../colours';

export function drawCircle({ x, y }, radius) {
  return svg => (
    svg
      .append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', radius)
  );
};

const textAttributes = {
  x: 20,
  y: 60,
  fill:          colours.darkGrey,
  'font-family': 'sans-serif',
  'font-weight': 'bold',
  'font-size':   26,
  class:         'icon-text'
}

export function drawText(text) {
  return svg => svg.append('text').text(text).attr(textAttributes);
}
