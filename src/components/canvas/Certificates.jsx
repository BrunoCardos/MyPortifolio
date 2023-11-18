import { SectionWrapper } from "../../hoc"
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Modal from "react-modal";

import cert01 from '../../assets/certificates/cert01.jpg'
import cert02 from '../../assets/certificates/cert02.jpg'
import cert03 from '../../assets/certificates/cert03.jpg'
import cert04 from '../../assets/certificates/cert04.jpg'
import cert05 from '../../assets/certificates/cert05.jpg'
import cert06 from '../../assets/certificates/cert06.jpg'
import cert07 from '../../assets/certificates/cert07.jpg'
import cert08 from '../../assets/certificates/cert08.jpg'



const Certificates = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalSize, setModalSize] = useState({ width: "63%", height: "90%" });

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setModalSize({ width: "85%", height: "30%" });
            } else if (window.innerWidth < 1024) {
                setModalSize({ width: "90%", height: "42%" });
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 1,
        pauseOnHover: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>

            <Slider {...settings}>
                {/* Map over your images */}
                {[
                    cert01, cert02, cert03, cert04, cert05, cert06, cert07, cert08
                ].map((image, index) => (
                    <div className="box p-2" key={index} onClick={() => openModal(image)}>
                        <img src={image} alt="" />
                    </div>
                ))}
            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                    },
                    content: {
                        ...modalSize,
                        margin: "auto", // Center the modal horizontally
                        overflow: 'hidden'
                    },
                }}
            >
                {selectedImage && (
                    <img src={selectedImage} alt="" />
                )}
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    )

}

export default SectionWrapper(Certificates, "certificates")