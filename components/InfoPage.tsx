import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import MdxLayout from "@/components/mdx-layout";

interface InfoPageProps extends React.ComponentProps<"div"> {
  title: string;
}

export function InfoPage(props: InfoPageProps) {
  const { children, title, ...other } = props;
  return (
    <div
      {...other}
      className={
        "max-w-2xl mx-auto items-center justify-center flex flex-col gap-4 mb-12"
      }
    >
      <a href="/" className="ml-4 mb-4">
        <FontAwesomeIcon icon={faArrowLeft} className={"mr-2"} size="xl" />
        <span className="text-lg">Back</span>
      </a>
      <h1 className="text-4xl font-bold text-slate-950">{props.title}</h1>
      <MdxLayout>{children}</MdxLayout>
    </div>
  );
}
