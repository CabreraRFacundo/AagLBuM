import "./PolaroidAlbum.css";
import { photos } from "../data/photos";


export default function PolaroidAlbum() {
    return (
        <div className="album">
            <h1>Te amo mucho Agugu</h1>

            <div className="polaroid-grid">
                {photos.map((photo, index) => (
                    <div className="polaroid" key={index}>
                        <img
                            src={photo.image}
                            alt={`Foto ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}