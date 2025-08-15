import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

export default function HeaderImage() {
  return (
    <Card
      radius={"none"}
      className="w-full overflow-hidden flex flex-col items-center"
    >
      <Image
        src="/img/Header-Opt1.jpg"
        alt="Header image"
        className="z-0 h-full w-full object-cover"
        radius={"none"}
        loading="eager"
        disableSkeleton
        removeWrapper
        width={2000}
        height={300}
      />
      <CardHeader className="absolute z-10 top-1/2 -translate-y-1/2 left-2 right-2 bg-white/60 w-fit p-4 rounded-lg">
        <h2 className="text-4xl font-bold text-slate-900">
          The Legume Grain 'Omics Initiative
        </h2>
      </CardHeader>
    </Card>
  );
}
