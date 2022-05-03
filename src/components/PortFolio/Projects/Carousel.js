import '../../../styles/carousel.scss';
import { useEffect, useState, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoChevronForwardOutline } from 'react-icons/io5';

function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        transform: `translate(-${current}00%)`
    });
    const imgSize = useRef(images.length);

    const moveSlide = (i) => {
        let nextIndex = current + i;

        if (nextIndex < 0) nextIndex = imgSize.current - 1;
        else if (nextIndex >= imgSize.current) nextIndex = 0;

        setCurrent(nextIndex);
    };

    useEffect(() => {
        setStyle({ transform: `translate(-${current}00%)` });
    }, [current]);

    return (
        <div className="carousel">
            <div className="imgslide">
                <div
                    className="button"
                    onClick={() => {
                        moveSlide(-1);
                    }}
                >
                    <IoIosArrowBack />
                </div>
                <div className="slide">
                    <div className="img" style={style}>
                        {images.map((img, i) => (
                            <img key={i} src={img.src} alt={img.name} />
                        ))}
                    </div>
                </div>
                <div
                    className="button"
                    onClick={() => {
                        moveSlide(1);
                    }}
                >
                    <IoChevronForwardOutline />
                </div>
            </div>
            <div className="position">
                {images.map((x, i) => (
                    <div key={i} className={i === current && 'current'} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
