import LinkCard from "@/components/LinkCard";
import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons/faCircleQuestion";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import DataAtlasCard from "@/components/DataAtlasCard";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Links {
  icon: IconProp;
  title: string;
  subTitle?: string;
  linkUrl: string;
}

const links: Links[] = [
  {
    icon: faListCheck,
    title: "Aims",
    subTitle: "Aims of the project",
    linkUrl: "/aims",
  },
  {
    icon: faCircleQuestion,
    title: "Background/Context",
    subTitle: "Role of legumes in feed and agriculture",
    linkUrl: "/background",
  },
  {
    icon: faPeopleGroup,
    title: "Collaborators",
    subTitle: "Meet the team",
    linkUrl: "/collaborators",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className={"font-bold text-2xl text-slate-900"}>Quick links</h2>
      <div className={"flex flex-row flex-wrap gap-4"}>
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
      <h2 className={"mt-8 font-bold text-2xl text-slate-900"}>Data atlases</h2>
      <DataAtlasCard
        image={"/img/fababean-logo.jpeg"}
        title={"Faba Bean 'Omics Atlas"}
        siteUrl={"https://germinate.ppa.staging.biocommons.org.au/#/home"}
      />
    </section>
  );
}
