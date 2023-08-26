import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function Particle({theme})  {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
}, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);

  return (
    <div className="App">
     <Particles
            width="100%"
            height="100vh" 
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
            //   particles: {
            //     number:{
            //       value:109,
            //       density:{
            //         enable: true,
            //         value_area: 1200
            //       }
            //     },
            //     color:{
            //       value: '#636e72'
            //     },
            //     shape:{
            //       type: 'circle',
            //       stroke: {
            //         width: 0
            //       },
            //       polygon:{
            //         nb_sides: 6
            //       }
            //     },
            //     line_linked: {
            //       enable: false,
            //       distance: 150,
            //       opacity: 0.9,
            //       width: 1,
            //       shadow: {
            //         enable: true,
            //         color: "#e74c3c",
            //         blur: 5
            //       }
            //     },
            //     move:{
            //       enable: true,
            //       random: true,
            //       speed: .6,
            //       attract:{
            //         rotateX: 600,
            //         rotateY: 1200
            //       }
            //     },
            //     size: {
            //       value: 4,
            //       random: true,
            //       anim:{
            //         speed: 40,
            //         size_min: 0.1
            //       }
            //     },
            //     opacity: {
            //       value: 0.8,
            //       anim: {
            //         speed: 1,
            //         opacity_min: 0.1
            //       }
            //     }
            //   },
              particles: {
                  color: {
                      value: `${theme === 'light-theme' ? '#55efc4' : '#ffffff'}`,
                    //   value: `${theme === 'light-theme' ? '#3498db' : '#1abc9c'}`,
                  },
                  links: {
                      color: `${theme === 'light-theme' ? '#55efc4' : '#ffffff'}`,
                    //   color: `${theme === 'light-theme' ? '#3498db' : '#1abc9c'}`,
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                  },number: {
                    density: {
                        enable: true,
                        area: 1600,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
    </div>
  );
}
export default Particle;
