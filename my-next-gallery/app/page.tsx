import UploadPhoto from "./ui/upload-photo";
import Gallery from "./ui/gallery";
import { fetchPhotos } from "./libs/data";

export default async function Home() {
  const photos = await fetchPhotos();
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Photo Upload App
      </h1>
      <UploadPhoto />
      <Gallery photos={photos} />
    </>
  );
}
