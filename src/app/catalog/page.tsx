import PhotoList from "@/components/List";
import React from "react";

const page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/photos?_limit=8`
  );
  const photo = await response.json();

  return (
    <div>
      <PhotoList api={photo} />
    </div>
  );
};

export default page;
