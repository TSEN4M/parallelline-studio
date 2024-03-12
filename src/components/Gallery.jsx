import Card from "./Card.jsx"

import bike from '../assets/bike.jpg'
import person1 from '../assets/person1.jpg'
import road from '../assets/road.jpg'
import mountain from '../assets/mountain.jpg'
import person2 from '../assets/person2.jpg'
import snowpass from '../assets/snowpass.jpg'


function Gallery(){
    return(
        <>
            <div className="gallery">
                <Card image={person1}/>
                <Card image={person1} title="Luffy" cardText="embracing the love of a nature"/>
                <Card image={bike} title="Riders" cardText="on the top of himalayas"/>
                <Card image={road} title="Roads" cardText="travel the road not taken"/>
                <Card image={person2} title="Capture" cardText="for reliving the moments again"/>
                <Card image={mountain} title="Mountain" cardText="as majestic as it looked from afar"/>
                <Card image={snowpass} title="Travel" cardText="taking the challanges and moving ahead"/>
                <Card image={person1}/>
                <Card image={person2}/>
                <Card image={bike} title="Riders" cardText="on the top of himalayas"/>
                <Card image={road} title="Roads" cardText="travel the road not taken"/>
                <Card image={person2} title="Capture" cardText="for reliving the moments again"/>
                <Card image={mountain} title="Mountain" cardText="as majestic as it looked from afar"/>
                <Card image={snowpass} title="Travel" cardText="taking the challanges and moving ahead"/>
            </div>
        </>
    )
}
export default Gallery