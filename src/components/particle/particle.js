import Particles from 'react-particles-js';
import React from 'react';
 
class Particle extends React.Component{
  
    render(){
        return (
            <Particles 
                params={{
                    particles: {
                        number: {
                          value: 9,
                          density: {
                            enable: true,
                            value_area: 1183.7775129623642
                          }
                        },
                        color: {
                          value:  "#434343" 
                        },
                        shape: {
                          type:  "polygon" ,
                          stroke: {
                            width: 0,
                            color:  "#000"
                          },
                          polygon: {
                            sides: 6
                          },
                        },
                        opacity: {
                            value: 0.3,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 1,
                              opacity_min: 0.1,
                              sync: false
                            }
                          },
                          size: {
                            value: 76,
                            random: false,
                            anim: {
                              enable: true,
                              speed: 10,
                              size_min: 40,
                              sync: false
                            }
                          },
                           move : {
                             enable : true,
                             speed : 8,
                             direction :  "none" ,
                             random : false,
                             straight : false,
                             out_mode :  "out" ,
                             bounce : false,
                             attract : {
                               enable : false,
                               rotateX : 600,
                               rotateY : 1200
                            }
                          }
                    }
                }} />
        );
    };
 
}

export default Particle;
