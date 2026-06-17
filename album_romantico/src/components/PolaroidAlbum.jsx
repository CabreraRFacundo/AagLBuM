import { useState } from "react";
import "./PolaroidAlbum.css";
import { photos } from "../data/photos";


export default function PolaroidAlbum() {
    const [orientations, setOrientations] = useState({});

    const handleImageLoad = (index, e) => {
        const img = e.target;

        const isLandscape = img.naturalWidth > img.naturalHeight;

        setOrientations((prev) => ({
            ...prev,
            [index]: isLandscape ? "landscape" : "portrait",
        }));
    };

    return (
        <div className="polaroid-grid">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`polaroid ${
                        orientations[index] || ""
                    }`}
                >
                    <img
                        src={photo.image}
                        alt=""
                        onLoad={(e) => handleImageLoad(index, e)}
                    />
                </div>
            ))}
        </div>
    );
}