// make sure the pdf is readable when downloaded 
import './Resume.css'
import {useRef} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Resume(){
const pdfRef = useRef();
const downloadPDF = () =>{
        console.log(30)
       const input= pdfRef.current; 
       html2canvas(input).then((canvas)=>{
        const imgData =canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4', true );
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
        const imgX = (pdfWidth -imgWidth * ratio)/2;
        const imgY = 30;
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight*ratio);
        pdf.save('Lavelle-resume.pdf')
       })
}
    return(
    <div className='fadeIn'>
   
    <button type="button" className='btn btn-outline-secondary float-right'onClick={downloadPDF}>Download PDF</button>
    <div ref= {pdfRef}>
    <div className='heading'>
        
    <h1 className='text-center'>Lauren Lavelle</h1>
    <p className='text-center'>lauren.m.lavelle@wmich.edu | Grosse Pointe Woods, MI<span>LinkedIn: /lauren-lavelle | Github: /l-lavelle</span></p>
    </div>
    <div className="resume" >
        <div className='skills-aside'>
                <p>Techincal Languages
                <ul class="bullet-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                </ul>
                </p>
                <p>Techincal Skills
                <ul class="bullet-list">
                        <li>Agile Development</li>
                        <li>Rest API’s</li>
                        <li>Node.js</li>
                        <li> Git</li>
                        <li>Express.js</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Jest</li>
                        <li>Debugging</li>
                        <li>Webpack</li>
                        <li>Vite</li>
                </ul>
                </p>
        </div>
        <div className='hello'>
                <p>
                Full stack web developer with a background in the healthcare field and a passion for learning. Interested in using problem solving skills to create collaborative, accessible, and user-friendly applications. Looking to use and expand my skills to bring unique insights to the role. 
                </p>
                <h3 className='skills'>Techincal Skills</h3>
                <p className='skills'>
                Languages: HTML | CSS | JavaScript | SQL| Python
                Skills: Agile Development | Rest API’s | jQuery | Node.js | Git | Express.js | React | Debugging | MongoDB | Jest | Architectural Design Patterns (MVC, Client-Sever) | Webpack | Vite | Responsive Applications
                </p>
                <h3>Soft Skills</h3>
                <p>
                Analytical Thinking| Problem Solving | Interpersonal Communication | Time Management | Adaptable | Quick Learner   
                </p>
                <h3>Projects</h3>
                <p>
                Tech Blog | https://github.com/l-lavelle/Tech-blog | https://damp-springs-74919-db653b3db13a.herokuapp.com/ 
                <ul>
                        <li>Summary: A blog site where users can create blogs and comment on posts from other users </li>
                        <li>Contributions: MVC architectural design, authentication system, Rest API allowing CRUD operations </li>
                        <li>Tools: Handlebars.js, Express.js, MySQL2, Sequelize, Bulma, JavaScript, Bycrypt, Session Cookies  </li>
                </ul>       
                </p>
                <h3>Professional Experience</h3>
                <p>Pricing and Audit Analyst – Central Transport, Warren, MI 03/2023- present
                        <ul className='bullet-list'>
                        <li>Analyze an average of 300 Bill of Ladings daily to determine if correct class was established and updating according to customer contract if incorrect.</li>
                        <li>When freight is reweighed checking the difference between driver weight and customer assigned weight and dimensions of freight being shipped for accuracy. </li>
                        </ul>	
                </p>				        
                <p>Operational Support Specialist - ATI Physical Therapy, Roseville, MI	 09/2020—09/2022
                        <ul className='bullet-list'>
                        <li>Managed clinic referral dashboard successfully converting referrals to patients scheduled in 48-hour timeframe </li>
                        <li>Collaborated with team to provide quality patient care instructing and monitoring exercise performance and set up/delivery of therapeutic modalities </li>
                        <li>Effectively onboarded new patients by comprehensively reviewing paperwork and explaining insurance benefits in-depth </li>
                        </ul>	
                </p>	

                <h3>Education</h3>
                <p>
                Full Stack Web Development Boot Camp Certificate: Michigan State University
                <span>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</span> 
                
                <span>Master of Science – Athletic Training – Western Michigan University, Michigan GPA: 3.93</span>				           
                <span>Bachelor of Science – Athletic Training – Saginaw Valley State University, Michigan GPA: 3.78</span>
                </p>
                
                <h3>Certifications</h3>
                
                <p>Excel Skills for Data Analytics and Visualization – by Macquarie University on Coursera 1/2023 
                <span>Google Data Analytics Certificate – by Google on Coursera 10/2022</span>
                <span>Python for Everybody Specialization – by University of Michigan on Coursera 10/2022</span>
                </p>
        </div>
  </div>
  </div>
  </div>
  )
}

export default Resume;
