import React from 'react';
import Wave from 'react-wavify'

const WaveComponent = ({ fill, bg, bgColor, children }) => (
  <div
    style={{
      background: bg,
      backgroundColor: bgColor
    }}
  >
    <Wave fill={fill}
      paused={false}
      options={{
        height:40,
        amplitude: 20,
        speed: 0.15,
        points: 3
      }}
    >
      {children}
    </Wave>
  </div>
);

export default WaveComponent;
