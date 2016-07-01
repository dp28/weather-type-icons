export const centre = {
  bottomLeft: { x: 20, y: 70 },
  width:      55
};

const leftRadius  = 18;
const rightRadius = 23;

export const rect = {
  x:      centre.bottomLeft.x,
  y:      centre.bottomLeft.y - leftRadius * 2,
  width:  centre.width,
  height: leftRadius * 2
};

export const circles = [
  {
    centre: {
      x: centre.bottomLeft.x,
      y: centre.bottomLeft.y - leftRadius
    },
    radius: leftRadius
  },
  {
    centre: {
      x: centre.bottomLeft.x + centre.width,
      y: centre.bottomLeft.y - rightRadius
    },
    radius: rightRadius
  },
  {
    centre: {
      x: centre.bottomLeft.x + centre.width / 2,
      y: centre.bottomLeft.y - 1.65 * rightRadius
    },
    radius: 1.1 * rightRadius
  }
]
