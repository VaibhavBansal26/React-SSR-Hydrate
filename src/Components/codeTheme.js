import React, { useEffect, useRef } from 'react'
import './styles.css'

const CodeTheme = () => {
    const tstRef= useRef(false)
    useEffect(() => {
        const codeLines = [
            'class VaibhavBansal {',
            '  constructor() {',
            '    this.name = "Vaibhav Bansal";',
            '    this.dayOfBirthTimestamp = 602745592;',
            '    this.email = "vaibhav.bansal945@gmail.com";',
            '  }',
            '',
            '  workExperience() {',
            '    return [',
            '      { "Sep 2021-now": "Front-end Developer at Dashclicks India" },',
            '      { "Aug 2020-Sep 2021": "Project Engineer at Wipro Technologies India." },',
            '',
            '    ];',
            '  }',
            '  education() {',
            '    return [',
            '      { "2016-2020": "VIT - B.Tech, Computer Science" },',
            '',
            '    ];',
            '  }',
            '  skills() {',
            '    return [',
            '       "HTML/CSS/JS", "React", "Node.js", "AWS", "Next.js", "Python",',
            '       ,"Github","PHP", "Tailwind CSS", "Styled Components", "Grapesjs"',
            '   ];',
            '  }',
            '}'
          ];
          
          const codeContainer = document.getElementById('code-container');
          const codeContainer2 = document.getElementById('code-container2');
          let lineIndex = 0;

          function fadeOut() {
            let opacity = 1;
            const fadeInterval = setInterval(() => {
              if (opacity > 0) {
                opacity -= 0.05; // Adjust the opacity decrement rate
                codeContainer.style.opacity = opacity;
                codeContainer2.style.opacity = opacity;
              } else {
                clearInterval(fadeInterval);
                codeContainer.style.display = 'none'; // Hide the code container
                codeContainer2.style.display = 'none';
              }
            }, 1000); // Adjust the fade speed (in milliseconds)
          }

            function typeLine(container) {
            const line = codeLines[lineIndex];
            const div = document.createElement('div');
            const formattedLine = line?.replace(/\s/g, '&nbsp;');
            div.innerHTML = formattedLine;
            div.classList.add('typewriter', 'code-line'); // Add common classes

            if (line.includes('return')) {
                div.classList.add('keyword');
            } else if (line.includes('workExperience()') || line.includes('education()') || line.includes('skills()')) {
                div.classList.add('function', 'opacity-50');
            } else if (line.includes('this.')) {
                if (line.includes('=')) {
                div.classList.add('property');
                } else {
                div.classList.add('keyword');
                }
            } else if (line.includes('"') && !line.includes('return [')) {
                div.classList.add('string');
            } else if (line.includes('{') || line.includes('}')) {
                div.classList.add('bracket');
            } 

            container?.appendChild(div);

            lineIndex++;

            if (lineIndex < codeLines.length) {
                setTimeout(() => typeLine(container), 1000); // Adjust the typing speed (in milliseconds)
            }else {
                fadeOut()
              }
            }

          if (!tstRef.current) {  
            typeLine(codeContainer);
            tstRef.current = true
          }
         
          
    },[])
  return (
    <div>
        <div id="code-container" className='code-block'></div>
        {/* <div id="code-container2" className='code-block2'></div> */}
       {/* <p className="code-block typewriter">
        <div><br/>
        <span className="function">class</span> <span className="class-name">Vaibhav Bansal</span> &#123;<br />
        <br/>
        &nbsp;&nbsp;<span className="function">constructor</span>() &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.<span className="property">name</span> = <span className="string">'Vaibhav Bansal'</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.<span className="property">dayOfBirthTimestamp</span> = <span className="number">602745592</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.<span className="property">email</span> = <span className="string">'vaibhav.bansal945@gmail.com'</span><br />
        &nbsp;&nbsp;&#125;<br />
        </div>
        <div><br/>
        &nbsp;&nbsp;<span className="function">workExperience</span>() &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="string">'Sep 2021-now'</span> : <span className="string">'Front-end Developer at Dashclicks India'</span> &#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="string">'Aug 2020- Sep 2021'</span> : <span className="string">'Project Engineer at Wipro Technologies India.'</span> &#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="string">'May 2018'</span> : <span className="string">'Industrial Intern at Smart Controls India.'</span> &#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="string">'Jun 2018'</span>: <span className="string">'Industrial Intern at JK Tyre India'</span> &#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="string">'May 2017'</span> : <span className="string">'Industrial Intern at E-biz Technocrats India'</span> &#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;]<br />
        &nbsp;&nbsp;&#125;<br />
        </div>
        <div><br/>
        &nbsp;&nbsp;<span className="function">education</span>() &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="string">'2016-2020'</span>: <span className="string">'Vellore Institute of Technology - Bachelor of Technology, Computer Science'</span> &#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;]<br />
        &nbsp;&nbsp;&#125;<br />
        </div>
        <div><br/>
        &nbsp;&nbsp;<span className="function">skills</span>() &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> [ <span className="string">'HTML/CSS/JS'</span>, <span className="string">'React'</span>, <span className="string">'Node.js'</span>, ]<br />
        &nbsp;&nbsp;&#125;<br />
        &#125;<br />
        </div>
        </p> */}
        </div>
  )
}

export default CodeTheme

  