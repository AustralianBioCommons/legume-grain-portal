import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import MdxLayout from "@/components/mdx-layout";
import Link from "next/link";
import { Button } from "@heroui/button";

interface InfoPageProps extends React.ComponentProps<"div"> {}

export function InfoPage(props: InfoPageProps) {
  const { children, ...other } = props;
  return (
    <div
      {...other}
      className={
        "max-w-2xl mx-auto justify-center flex flex-col gap-4 mb-12 py-8 md:py-10"
      }
    >
      <Link href="/" className="ml-2 mb-4">
        <Button variant="flat">
          <FontAwesomeIcon icon={faArrowLeft} className={"mr-2"} size="xl" />
          <span className="text-lg">Back</span>
        </Button>
      </Link>
      <MdxLayout>{children}</MdxLayout>
    </div>
  );
}
