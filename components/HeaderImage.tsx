import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { addBasePath } from "next/dist/client/add-base-path";

export default function HeaderImage() {
  return (
    <Card
      radius={"none"}
      className="w-full overflow-hidden flex flex-col items-center"
    >
      <Image
        src={addBasePath("/img/Header-Opt1.jpg")}
        alt="Header image"
        className="z-0 h-full w-full object-cover"
        radius={"none"}
        loading="eager"
        disableSkeleton
        removeWrapper
        width={2000}
        height={300}
      />
      <CardHeader className="absolute backdrop-blur-xs justify-center md:max-w-3xl top-1/2 -translate-y-1/2 z-10 bg-white/40 p-4 md:rounded-lg">
        <h2 className="text-center text-4xl font-extrabold text-green-950">
          The Legume Grain 'Omics Initiative
        </h2>
      </CardHeader>
    </Card>
  );
}
