import { useState, useEffect } from 'react';
import  slide1  from '../../assets/img/slide1.png';
import  slide2  from '../../assets/img/slide2.png';
import './SliderHome.css';

const SliderHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slide1, slide2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div>
            <section className="slider-home">
                <div className="container">
                    <div className="slider">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className={`slide ${index === currentSlide ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                    <div className="slider-buttons">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-button ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SliderHome;
