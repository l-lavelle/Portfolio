import "./Carousel.css"
import{useState} from "react";

// 
// smaller pics for smaller screens
// update data when done
//
export const Carousel = ({data}) => {
    const [project, setProject]=useState(0)

    const nextProject= ()=>{
        setProject(project === data.length-1 ? 0: project+1)
    }    

    const prevProject=()=>{
        setProject(project === 0? data.length-1 : project-1)
    }
    return(
    <div className="fadeIn">
        <h1 className="text-center mt-3">Portfolio Projects</h1>
        <div className="portfolio">
            <div className="carousel">
                <i className="bi bi-arrow-left-circle-fill arrow arrow-left" onClick={prevProject}></i>
                {data.map((item,index)=>{
                return (
                    <>
                    <img src={item.pic.src} key={index} className={project===index ? "slide" : "slide-hidden"}/>
                    </>
                )
                })}
                <i className="bi bi-arrow-right-circle-fill arrow arrow-right" onClick={nextProject}></i>
            <span className="indicators">
                {data.map((_,index)=>{
                    return <button key={index} onClick={()=>setProject(index)} className={project === index ? "indicator" : "indicator-inactive"}></button>
                })}
            </span>
            </div>
            <div className="project-info">
            {data.map((item,index)=>{
                return (
                    <>
                    <h3 key={index} className = {project===index ? "project-text" : "project-text-hidden"}>{`${item.name}`}</h3>
                    </>
                )
                })}
            <h4>Summary</h4>
            {data.map((item,index)=>{
                return (
                    <>
                    <p key={index} className = {project===index ? "project-text" : "project-text-hidden"}>{`${item.summary}`}</p>
                    </>
                )
                })}
            <h4>Contributions</h4>
            {data.map((item,index)=>{
                return (
                    <>
                    <p key={index} className = {project===index ? "project-text" : "project-text-hidden"}>{`${item.contributions}`}</p>
                    </>
                )
                })}
            <h4>Techonologies & Tools</h4>
            {data.map((item,index)=>{
                return (
                    <>
                    <p key={index} className = {project===index ? "project-text" : "project-text-hidden"}>{`${item.Tools}`}</p>
                    </>
                )
                })}
            {data.map((item,index)=>{
                return (
                    <>
                    <a  href={item.github}>
                        <img className={project===index ? "slide gitlink" : "project-text-hidden"} src="/images/github.png" />
                    </a>
                    <a  href={item.link}>
                    <img className={project===index ? "slide web-link" : "project-text-hidden"} src="/images/link.png" />
                    </a>
                    </>
                )
                })}
            </div>
        </div>
    </div>
    )
}
