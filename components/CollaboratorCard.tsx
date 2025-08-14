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
      className={clsx("h-72 max-w-72 p-2 rounded-none", className)}
    >
      <CardBody className="justify-center items-center">
        <Image
          src={image}
          alt={`${{ title }} logo`}
          className="h-full object-cover"
          radius={"none"}
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
