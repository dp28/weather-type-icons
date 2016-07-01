export function drawCircle({ x, y }, radius) {
  return svg => (
    svg
      .append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', radius)
  );
};
