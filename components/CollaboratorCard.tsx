import { Card, CardBody, CardFooter, CardProps } from "@heroui/card";
import clsx from "clsx";
import { Image } from "@heroui/image";

interface CollaboratorCardProps extends CardProps {
  image: string;
  title: string;
  siteUrl?: string;
}

export default function CollaboratorCard(props: CollaboratorCardProps) {
  const { image, title, siteUrl, className, ...cardProps } = props;
  return (
    <Card
      {...cardProps}
      className={clsx("h-80 w-72 p-2 rounded-none overflow-clip", className)}
    >
      <CardBody className="w-64 h-64 justify-center items-center">
        <Image
          src={image}
          alt={`${{ title }} logo`}
          className="object-scale-down"
          height={200}
          width={200}
          radius={"none"}
          removeWrapper
        />
      </CardBody>
      <CardFooter className="justify-center">
        <h2 className="text-lg text-center font-semibold text-slate-900">
          {props.title}
        </h2>
      </CardFooter>
    </Card>
  );
}
