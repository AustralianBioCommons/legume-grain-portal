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
        className={clsx("w-72 h-72 p-2 rounded-none", className)}
      >
        <CardBody>
          <Image
            src={image}
            alt={`${{ title }} logo`}
            className="w-full h-full object-cover"
            radius={"none"}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <h2 className="text-lg font-bold text-slate-900">{props.title}</h2>
        </CardFooter>
      </Card>
    </a>
  );
}
