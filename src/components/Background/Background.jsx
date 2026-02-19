import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="background">
      {/* Floating Geometric Shapes */}
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Grid Lines */}
      <div className="grid-lines"></div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Code Rain Effect */}
      <div className="code-rain">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="code-column"
            style={{
              left: `${i * 7}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {'{}'} () =&gt; [] &lt;/&gt; /* */ ;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;

