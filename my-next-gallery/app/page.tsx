import UploadPhoto from "./ui/upload-photo";
import Gallery from "./ui/gallery";

export default async function Home() {
  const { photos } = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/photos`,
    {
      next: {
        tags: ["photos"],
      },
    },
  ).then((res) => res.json());
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
