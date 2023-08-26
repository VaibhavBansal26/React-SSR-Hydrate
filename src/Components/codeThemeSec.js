import React, { useEffect, useRef } from 'react'
import './styles.css'

const CodeThemeSec = () => {
    const tstRef= useRef(false)
    useEffect(() => {
        const codeLines = [
            'class PersonalLife {',
            '  constructor() {',
            '    this.hobbies = ["Reading", "Adventure Sports", "Traveling","Lawn Tennis"];',
            '    this.website = "https://www.vaibhavbansal.in";',
            '  }',
            '  Address() {',
            '    return [',
            '      { "City/State": "Gwalior/Madhya Pradesh" },',
            '      { "Country": "India." },',
            '    ];',
            '  }',
            '  Aboutme() {',
            '    return (',
            '      I am an India based Software developer and Data Science enthusiast.',
            '      Currently working as Front-end Developer @ Dashclicks India Ltd.',
            '    );',
            '  }',
            '}',
          ];
          
          const codeContainer = document.getElementById('code-container2');
          let lineIndex = 0;
          // function fadeOut() {
          //   let opacity = 1;
          //   const fadeInterval = setInterval(() => {
          //     if (opacity > 0) {
          //       opacity -= 0.05; // Adjust the opacity decrement rate
          //       codeContainer.style.opacity = opacity;
          //     } else {
          //       clearInterval(fadeInterval);
          //       codeContainer.style.display = 'none'; // Hide the code container
          //     }
          //   }, 1000); // Adjust the fade speed (in milliseconds)
          // }

            function typeLine() {
            const line = codeLines[lineIndex];
            const div = document.createElement('div');
            const formattedLine = line?.replace(/\s/g, '&nbsp;');
            div.innerHTML = formattedLine;
            div.classList.add('typewriter', 'code-line'); // Add common classes

            if (line?.includes('return')) {
                div.classList.add('keyword');
            } else if (line?.includes('Address()') || line?.includes('Aboutme()')) {
                div.classList.add('function', 'opacity-50');
            } else if (line?.includes('this.')) {
                if (line?.includes('=')) {
                div.classList.add('property');
                } else {
                div.classList.add('keyword');
                }
            } else if (line?.includes('"') && !line?.includes('return [')) {
                div.classList.add('string');
            } else if (line?.includes('{') || line?.includes('}')) {
                div.classList.add('bracket');
            }

            codeContainer?.appendChild(div);

            lineIndex++;

            if (lineIndex < codeLines.length) {
                setTimeout(() => typeLine(codeContainer), 1000); // Adjust the typing speed (in milliseconds)
            } else {
              // fadeOut()
            }
            }

          if (!tstRef.current) {  
            typeLine();
            tstRef.current = true
          }
         
          
    },[])
  return (
    <div>
        <div id="code-container2" className='code-block2'></div>
        </div>
  )
}

export default CodeThemeSec;

  