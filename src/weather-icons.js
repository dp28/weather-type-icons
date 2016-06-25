import * as d3 from 'd3';

export function draw(selector, width = 200, height = 200) {
  const svg = d3
    .select(selector)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const centre = { x: width / 2, y: height / 2 };
  const colour = 'gold';

  function drawCircle({ x, y }, radius) {
    return svg
      .append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', radius)
  };

  const innerRadius = 20;
  const outerRadius = 30;

  drawCircle(centre, innerRadius)
    .attr('fill', colour);

  function buildSunburst() {
     const sunburstPoint = {
      x: centre.x + (outerRadius * Math.sin(0)),
      y: centre.y - (outerRadius * Math.cos(0)),
    }

    const halfSunburstPointWidth = 2;

    return svg.append('rect').attr({
      x: sunburstPoint.x - halfSunburstPointWidth,
      y: sunburstPoint.y - halfSunburstPointWidth,
      width: halfSunburstPointWidth * 2,
      height: outerRadius - innerRadius,
      fill: colour
    });
  };

  const numSunbursts = 12;
  Array(numSunbursts).fill().forEach((_, i) => (
    buildSunburst().attr('transform', `rotate(${i * 360 / numSunbursts}, ${centre.x}, ${centre.y})`)
  ));
}

draw('body');
