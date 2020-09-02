import React from "react";
import {Carousel} from "react-bootstrap";
import sun from '../sunrise.jpg';
import sun2 from '../sunrise2.jpg';
import sun3 from '../sunrise3.jpg';



export const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{'height': '700px'}}>
                    <img className='d-block w-100 h-100' src={sun} alt="There is a wonderful sunrise..."/>
                    <Carousel.Caption>
                        <h1>Make your website more elegant</h1>
                        <p>attract more customers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '700px'}}>
                    <img className='d-block w-100 h-100' src={sun2} alt="There is a wonderful sunrise..."/>
                    <Carousel.Caption>
                        <h1>Use a flexible interface</h1>
                        <p>convenience above all</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '700px'}}>
                    <img className='d-block w-100 h-100' src={sun3} alt="There is a wonderful sunrise..."/>
                    <Carousel.Caption>
                        <h1>You have already wanted a new website for your business</h1>
                        <p>we can help you with it...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}