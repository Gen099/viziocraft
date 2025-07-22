import React, { useRef, useEffect, useState } from 'react';

// Only load p5 on client side and when not on mobile
let p5: any = null;
if (typeof window !== 'undefined') {
  // Enhanced mobile detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   ('ontouchstart' in window) ||
                   (navigator.maxTouchPoints > 0) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) {
    import('p5').then((p5Module) => {
      p5 = p5Module.default;
    }).catch(() => {
      console.log('P5.js failed to load');
    });
  }
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: [number, number, number];
}

const P5Background: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [p5Instance, setP5Instance] = useState<any>(null);

  useEffect(() => {
    // Enhanced mobile detection
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     ('ontouchstart' in window) ||
                     (navigator.maxTouchPoints > 0) ||
                     window.innerWidth <= 768 ||
                     window.innerHeight <= 768;
      setIsMobile(mobile);
      return mobile;
    };

    // Don't load on mobile or if p5 failed to load
    if (checkMobile() || !p5) {
      return;
    }

    const particles: Particle[] = [];
    const numParticles = window.innerWidth > 1200 ? 60 : 40; // Reduce particles on smaller screens

    const sketch = (p: any) => {
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style('position', 'fixed');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '-1');
        canvas.style('pointer-events', 'none');

        // Initialize particles with better distribution
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.3, 0.3), // Slower movement
            vy: p.random(-0.3, 0.3),
            size: p.random(0.5, 2),  // Smaller particles
            opacity: p.random(0.2, 0.5), // Lower opacity
            color: [
              p.random(0, 100),   // Darker blues
              p.random(150, 220), // Cyan range
              p.random(180, 255)  // Blue range
            ]
          });
        }
      };

      p.draw = () => {
        p.background(0, 8); // Slightly faster fade for performance

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = p.width;
          if (particle.x > p.width) particle.x = 0;
          if (particle.y < 0) particle.y = p.height;
          if (particle.y > p.height) particle.y = 0;

          // Draw particle
          p.fill(particle.color[0], particle.color[1], particle.color[2], particle.opacity * 255);
          p.noStroke();
          p.ellipse(particle.x, particle.y, particle.size);

          // Draw connections to nearby particles (optimized)
          for (let j = i + 1; j < particles.length; j++) {
            const otherParticle = particles[j];
            const distance = p.dist(particle.x, particle.y, otherParticle.x, otherParticle.y);
            if (distance < 80) { // Reduced connection distance
              const alpha = p.map(distance, 0, 80, 0.2, 0);
              p.stroke(100, 200, 255, alpha * 255);
              p.strokeWeight(0.3);
              p.line(particle.x, particle.y, otherParticle.x, otherParticle.y);
            }
          }
        });

        // Subtle mouse interaction (desktop only)
        if (p.mouseX > 0 && p.mouseY > 0 && !isMobile) {
          particles.forEach(particle => {
            const distance = p.dist(p.mouseX, p.mouseY, particle.x, particle.y);
            if (distance < 100) {
              const force = p.map(distance, 0, 100, 0.01, 0);
              const angle = p.atan2(particle.y - p.mouseY, particle.x - p.mouseX);
              particle.vx += p.cos(angle) * force;
              particle.vy += p.sin(angle) * force;
              
              // Limit velocity
              particle.vx = p.constrain(particle.vx, -1, 1);
              particle.vy = p.constrain(particle.vy, -1, 1);
            }
          });
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    if (sketchRef.current && p5) {
      try {
        const instance = new p5(sketch, sketchRef.current);
        setP5Instance(instance);
      } catch (error) {
        console.log('P5.js instance creation failed');
      }
    }

    // Window resize handler
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        if (p5Instance) {
          p5Instance.remove();
          setP5Instance(null);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, [p5Instance]);

  // Mobile fallback background
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          background: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
          pointerEvents: 'none'
        }}
      >
        {/* Simple animated particles for mobile */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 4}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return <div ref={sketchRef} className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }} />;
};

export default P5Background;
