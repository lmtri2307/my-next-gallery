import React from "react";
import ImageCard from "./image-card";
import { Photo, PhotoService } from "@/app/libs/photo.service";

const fetchPhotos = async (): Promise<Photo[]> => {
  return await PhotoService.getAllPhotos();
};

export default async function Gallery() {
  const photos = await fetchPhotos();
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Photo Gallery</h2>
      {photos.length === 0 ? (
        <p className="text-gray-500">No photos available.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo: Photo) => (
            <ImageCard key={photo.id} {...photo} />
          ))}
        </div>
      )}
    </div>
  );
}
