import React from "react";
import ImageCard from "./image-card";

type Photo = {
  id: number;
  url: string;
  comments: string[];
};
interface GalleryProps {
  photos: Photo[];
}

export default function Gallery({ photos }: GalleryProps) {
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Photo Gallery</h2>
      {photos.length === 0 ? (
        <p className="text-gray-500">No photos available.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} {...photo} />
          ))}
        </div>
      )}
    </div>
  );
}
