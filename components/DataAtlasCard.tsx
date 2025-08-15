import { Card, CardBody, CardFooter, CardProps } from "@heroui/card";
import clsx from "clsx";
import { Image } from "@heroui/image";

interface DataAtlasCardProps extends CardProps {
  image: string;
  title: string;
  siteUrl: string;
}

export default function DataAtlasCard(props: DataAtlasCardProps) {
  const { image, title, siteUrl, className, ...cardProps } = props;
  return (
    <a href={siteUrl}>
      <Card
        {...cardProps}
        className={clsx(
          "w-72 h-80 p-2 items-center justify-center rounded-none",
          className,
        )}
      >
        <CardBody className={"w-64 h-64 items-center justify-center"}>
          <Image
            src={image}
            alt={`${{ title }} logo`}
            className="object-scale-down"
            radius={"none"}
            width={200}
            height={200}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <h2 className="text-lg font-bold text-slate-900">{props.title}</h2>
        </CardFooter>
      </Card>
    </a>
  );
}
