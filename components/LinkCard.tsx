import { Card, CardBody, CardProps } from "@heroui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import Link from "next/link";

interface LinkCardProps extends CardProps {
  icon: IconProp;
  title: string;
  subTitle?: string;
  linkUrl: string;
}

export default function LinkCard(props: LinkCardProps) {
  const { icon, className, linkUrl, title, subTitle, ...cardProps } = props;
  return (
    <Link href={linkUrl} className="grow">
      <Card
        {...cardProps}
        className={clsx(
          "w-full grow md:grow-0 md:w-80 h-32 p-2 rounded-none bg-bcgreen border-1 border-green-300",
          className,
        )}
      >
        <CardBody className="flex flex-row align-middle items-center justify-center">
          <FontAwesomeIcon icon={icon} size={"2xl"} />
          <div className="grow ml-4">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            {subTitle && (
              <span className="text-sm text-gray-600">{subTitle}</span>
            )}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
