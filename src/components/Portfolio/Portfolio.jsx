import { Carousel } from "./Carousel.jsx";
import slides from "./carouselData.js"


function Portfolio(){
    return(<div>
        <Carousel data={slides} />
        </div>);
};


export default Portfolio;


    