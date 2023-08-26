import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Sep 2021 - Today'} 
                        title={'Front-end Developer'}
                        subTitle={'Dashclicks India Ltd.'}
                        link={'https://www.dashclicks.com/'}
                        text={`I had undertaken a multitude of significant projects. One noteworthy achievement is the development of a dynamic website builder utilizing the power of Grapes.js and React.js. I worked with a dedicated team of three talented individuals, and together, we meticulously crafted over 200,000 lines of code in just two months.
                        One of my crowning achievements during this period was the creation of a public npm package called "grapesjs-advance-components." This package empowers users to effortlessly construct their own websites using drag-and-drop functionality combined with a collection of advanced components. For added customization, users have the ability to tailor blocks and even introduce new ones, enabling them to craft stunning websites or even design sales promotion funnels.
                        Furthermore, I took the initiative to develop a dedicated payment widget for our company, seamlessly integrating it as a customizable block for users aiming to incorporate payment options into their websites.
                        My expertise also extends to Formio.js, where I have made meaningful modifications to the core formio.min.js file. By customizing and introducing novel features, I have elevated the capabilities of the form builder, enhancing its utility and versatility.
                        Additionally, my contributions to our company's private UI kit have been instrumental in enhancing our overall UI components. This collaborative effort has not only streamlined our internal processes but has also led to a more polished user experience.
                        I have also worked on a support chat application where i contributed on the chat editor part of the app handling messages,email,sms using sockets.Lastly, I've also embraced the capabilities of Draft.js, utilizing it to develop a robust fallback feature within our platform's editor. This forward-thinking approach ensures a seamless experience for users, even in situations where connectivity may be limited.
                        In summary, my diverse skill set, collaborative spirit, and dedication to innovation have been pivotal in driving impactful projects and advancing the technological landscape.               
                        `} 
                    />
                    <ResumeItem 
                        year={'Aug 2020 - Sep 2021'} 
                        title={'Project Engineer'}
                        link={"https://www.wipro.com/"}
                        subTitle={'Wipro Technologies India Ltd.'}
                        text={`Notable projects in my tenure with Wipro Technologies include the development of a Vantiv parser, an EMV parser, and a JIRA Worklog Application. Leveraging the power of Python and Flask, I have crafted these applications to efficiently process and manage complex data, enhancing workflow efficiency.
                        I was also deeply engaged in the realm of MX Payment Terminals, contributing to the evolution of this cutting-edge technology. My hands-on experience with MX Payment Terminals allows me to navigate the complexities of this field with confidence, while my expertise ensures that I deliver solutions that meet the highest standards of quality and performance.
                        In addition to my practical experience, I have undertaken comprehensive training in a variety of technologies. This includes in-depth training in Python, a versatile programming language known for its simplicity and versatility. I am also well-versed in C++, a powerful language with applications ranging from system programming to game development. Furthermore, I have received training in AWS (Amazon Web Services), a cloud computing platform that empowers organizations with scalable and flexible solutions.`} 
                    />
                    <ResumeItem 
                        year={'May 2018 & May 2019'} 
                        title={'Front End Designer Industrial Intern'}
                        subTitle={'Smart Software Solutions'}
                        link={"https://smartcontrols.in/"}
                        text={`I had undertaken comprehensive training in Data Structures and Algorithms, equipping me with a strong foundation in fundamental computational concepts. This training has honed my ability to approach complex problems with structured and efficient solutions.
                        My professional journey extends into the realm of web technologies and software programs designed specifically for industrial applications. By seamlessly merging technology with industry requirements, I have played a pivotal role in developing software solutions that drive operational efficiency and enhance industrial processes.
                        During my tenure as a Front-end intern, I actively contributed to the development of a Barcode Integration System. This experience allowed me to immerse myself in the intricacies of front-end development, where I applied my skills to create intuitive user interfaces and seamless user experiences. Through collaboration and innovation, I played a significant role in bridging the gap between technology and real-world industrial applications.`} 
                    />
                    <ResumeItem 
                        year={'June 2018'} 
                        title={'Industrial Intern'}
                        subTitle={'J.K Tyre India Pvt Ltd.'}
                        link={"https://www.jktyre.com/"}
                        text={`My early training laid the foundation for my Oracle proficiency, equipping me with essential skills to navigate this powerful database environment. I'm adept at utilizing Oracle's capabilities to streamline data management processes, ensuring efficient retrieval and storage of information.
                        Recognizing the significance of continuous learning, I successfully completed a comprehensive Oracle training program. This dedication to honing my expertise has resulted in a well-rounded understanding of Oracle's functionalities, enabling me to contribute effectively to data-driven initiatives. I possess a training completion certificate issued by the organization, underscoring my dedication to enhancing my skills. This achievement is a testament to my proactive approach to learning and growth.`} 
                    />
                    <ResumeItem 
                        year={'June 2017'} 
                        title={'Industrial Intern'}
                        subTitle={'E-Biz Technocrats'}
                        link={"https://ebiztechnocrats.com/"}
                        text={`During my journey, I have successfully completed two noteworthy projects that underscore my proficiency. The first project involved the creation of an Online Newspaper, demonstrating my mastery of HTML, CSS, AJAX, SQL, JavaScript, jQuery, and PHP. This comprehensive blend of technologies allowed me to craft a dynamic platform that effectively delivers news and engages users.
                        Additionally, I took on the challenge of designing and developing a Blog Management Project. This endeavor required a deep understanding of various technologies, including HTML, CSS, AJAX, SQL, JavaScript, jQuery, and PHP. The result is a seamless and user-friendly platform that empowers users to manage and share their content effectively.
                        In parallel with my practical endeavors, I have undergone dedicated training in web development. This training has equipped me with a solid foundation and a comprehensive understanding of the intricacies involved in building modern web applications.
                        In conclusion, my dual approach of practical project execution and targeted training has positioned me as a skilled web developer with a strong command of a diverse set of technologies. My portfolio reflects my commitment to delivering impactful solutions that meet the demands of today's dynamic digital landscape.`} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2016 - 2020'} 
                        title={'B.Tech in Computer Science'}
                        subTitle={'VIT University India'}
                        link={'https://vit.ac.in/'}
                        text={'I had completed my B.Tech degree with CGPA - 8.62.'} 
                    />
                    <ResumeItem 
                        year={'2013 - 2015'} 
                        title={'Senior High School'}
                        subTitle={'Pragati Vidya Peeth'}
                        link={'https://www.pragatividyapeeth.com/'}
                        text={'I had finished my High School with 71% in 12th CBSE.'} 
                    />
                    <ResumeItem 
                        year={'2009 - 2012'} 
                        title={'High School'}
                        subTitle={'St. Pauls School'}
                        link={'https://www.stpaulsgwalior.com/'}
                        text={'I had completed my 10th standard with  CGPA - 9.6.'} 
                    />
                     <ResumeItem 
                        year={'1999 - 2008'} 
                        title={'Primary School'}
                        subTitle={'Wendy School Junior College'}
                        link={'https://www.wendyeducation.org/'}
                        text={'I had consistently performed well in my academics.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
