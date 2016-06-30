export const top = 0;
export const left = 0;
export const width = 100;
export const height = 100;

export const centre = { x: width / 2, y: height / 2 };

const cloudConstants = {
  centreRect: {
    bottomLeft: { x: 20, y: 70 },
    width:      55
  },
  leftRadius:  18,
  rightRadius: 23
}

export const cloud = {
  circles: [
    {
      centre: {
        x: cloudConstants.centreRect.bottomLeft.x,
        y: cloudConstants.centreRect.bottomLeft.y - cloudConstants.leftRadius
      },
      radius: cloudConstants.leftRadius
    },
    {
      centre: {
        x: cloudConstants.centreRect.bottomLeft.x + cloudConstants.centreRect.width,
        y: cloudConstants.centreRect.bottomLeft.y - cloudConstants.rightRadius
      },
      radius: cloudConstants.rightRadius
    },
    {
      centre: {
        x: cloudConstants.centreRect.bottomLeft.x + cloudConstants.centreRect.width / 2,
        y: cloudConstants.centreRect.bottomLeft.y - 1.65 * cloudConstants.rightRadius
      },
      radius: 1.1 * cloudConstants.rightRadius
    }
  ],
  rect: {
    x:      cloudConstants.centreRect.bottomLeft.x,
    y:      cloudConstants.centreRect.bottomLeft.y - cloudConstants.leftRadius * 2,
    width:  cloudConstants.centreRect.width,
    height: cloudConstants.leftRadius * 2
  }
};

export const sun = {
  small: {
    radius:   15,
    centre:   { x: centre.x + 22, y: centre.y - 25 },
    sunburst: { width: 2, number: 12, radius: 22 }
  }
};

const raindropRadius = 7;

export const snowflake = {
  radius: raindropRadius * 1.2
}

export const raindrop = {
  radius: raindropRadius,
  firstCentre: {
    x: cloudConstants.centreRect.bottomLeft.x + cloudConstants.centreRect.width * 0.75,
    y: cloudConstants.centreRect.bottomLeft.y
  },
  secondCentre: {
    x: cloudConstants.centreRect.bottomLeft.x + cloudConstants.centreRect.width * 0.25,
    y: cloudConstants.centreRect.bottomLeft.y + raindropRadius
  },
};

const lightningWidth = cloudConstants.centreRect.width / 2;

export const lightning = {
  width: lightningWidth,
  centreLeft: {
    x: cloudConstants.centreRect.bottomLeft.x + cloudConstants.centreRect.width / 4,
    y: cloudConstants.centreRect.bottomLeft.y + lightningWidth / 8
  }
}
