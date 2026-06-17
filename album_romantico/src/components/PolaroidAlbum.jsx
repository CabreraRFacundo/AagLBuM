import { useState } from "react";
import "./PolaroidAlbum.css";
import { photos } from "../data/photos";


export default function PolaroidAlbum() {
    const [orientation, setOrientation] = useState({});

    const handleLoad = (index, e) => {
        const img = e.target;

        const isLandscape = img.naturalWidth > img.naturalHeight;

        setOrientation((prev) => ({
            ...prev,
            [index]: isLandscape ? "landscape" : "portrait",
        }));
    };

    return (
        <div className="polaroid-grid">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`polaroid ${orientation[index] || ""}`}
                >
                    <img
                        src={photo.image}
                        onLoad={(e) => handleLoad(index, e)}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
}