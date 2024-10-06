import UploadPhoto from "./ui/upload-photo";
import Gallery from "./ui/gallery";
import { Suspense } from "react";
import { Skeleton } from "antd";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Photo Upload App
      </h1>
      <UploadPhoto />
      <Suspense fallback={<Skeleton active />}>
        <Gallery />
      </Suspense>
    </>
  );
}
