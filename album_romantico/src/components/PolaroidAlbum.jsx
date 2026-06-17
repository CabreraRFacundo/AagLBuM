import { useState } from "react";
import { photos } from "../data/photos";
import "./PolaroidAlbum.css";

export default function PolaroidAlbum() {
    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const [isLandscape, setIsLandscape] = useState(false);

    const next = () => {
        setIndex((prev) => (prev + 1) % photos.length);
        setIsLandscape(false);
    };

    const handleLoad = (e) => {
        const img = e.target;
        setIsLandscape(img.naturalWidth > img.naturalHeight);
    };
    if (!started) {
        return (
            <div className="intro-screen">
                <div className="letter">

                    <p>
                        Mi Agugu <br /><br />
                        Espero que a estas alturas ya sepas: <br />
                        Lo mucho que te amo<br />
                        Lo hermosa que sos<br />
                        Lo feliz que me haces<br /> 
                        Lo BIEN que me haces<br /><br />

                        Sos una excelente persona <br />
                        Sos una excelente novia <br />
                        De verdad me siento muy agradecido <br /> 
                        Por que estes a mi lado <br /> <br />

                        Gracias por amarme tanto <br />
                        Gracias por cada momento <br />
                        Gracias por estar siempre <br /><br />

                        Te amo mucho

                    </p>

                    <button onClick={() => setStarted(true)}>
                        🤍Te amo🤍
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="story-container">

            <div
                className="bg"
                style={{
                    backgroundImage: `url(${photos[index].image})`,
                }}
            />

            <div className="story-wrapper">
                <div
                    className={`story ${isLandscape ? "landscape" : "portrait"
                        }`}
                    onClick={next}
                >
                    <img
                        src={photos[index].image}
                        onLoad={handleLoad}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}