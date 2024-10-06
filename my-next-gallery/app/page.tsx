import Upload from "./ui/upload";
import Gallery from "./ui/gallery";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Photo Upload App
      </h1>
      <Upload />
      <Gallery />
    </>
  );
}
