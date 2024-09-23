import Image from "next/image";
import Link from "next/link";

const PhotoList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-3 px-4 md:grid-cols-4 sm:grid-cols-3">
      {api.map((photo) => (
        <div key={photo.id} className="shadow">
          <Link
            href={`/detail/${photo.id}`}
            className="transition-all cursor-pointer hover:text-hue-accent text-hue-primary"
          >
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title || "photo image"}
              width={350}
              height={350}
              className="object-cover w-full max-h-64"
            />
            <h3 className="p-4 font-bold md:text-xl text-md">{photo.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
