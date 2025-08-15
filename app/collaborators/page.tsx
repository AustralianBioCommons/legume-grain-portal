import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import React from "react";
import CollaboratorCard from "@/components/CollaboratorCard";

interface Collaborator {
  id: string;
  name: string;
  image: string;
}

const collaborators: Collaborator[] = [
  { name: "NCRIS", id: "ncris", image: "/img/logos/ncris.jpg" },
  {
    name: "Bioplatforms Australia",
    id: "bioplatforms",
    image: "/img/logos/bioplatforms.webp",
  },
  {
    name: "La Trobe / LISAF",
    id: "latrobe",
    image: "/img/logos/latrobe-lisaf.png",
  },
  {
    name: "Adelaide University",
    id: "adelaide",
    image: "/img/logos/adelaide-university.png",
  },
  {
    name: "SARDI",
    id: "sardi",
    image: "/img/logos/sardi.jpg",
  },
  {
    name: "Australian Plant Phenomics Network",
    id: "appn",
    image: "/img/logos/appn.png",
  },
  {
    name: "AGRF",
    id: "agrf",
    image: "/img/logos/agrf.jpg",
  },
  {
    name: "Australian BioCommons",
    id: "biocommons",
    image: "/img/logos/biocommons.png",
  },
  {
    name: "Metabolomics Australia",
    id: "metabolomics",
    image: "/img/logos/metabolomics.png",
  },
  {
    name: "University of South Australia",
    id: "unisa",
    image: "/img/logos/uni-sa.png",
  },
  {
    name: "University of Western Australia",
    id: "uwa",
    image: "/img/logos/uwa.png",
  },
  {
    name: "University of Sydney",
    id: "sydney-uni",
    image: "/img/logos/sydney-uni.png",
  },
];

export default function Collaborators() {
  return (
    <div
      className={
        "mx-auto flex flex-col items-center justify-center gap-4 mb-12"
      }
    >
      <a href="/" className="ml-4 mb-4">
        <FontAwesomeIcon icon={faArrowLeft} className={"mr-2"} size="xl" />
        <span className="text-lg">Back</span>
      </a>
      <h1 className="text-4xl font-bold mb-4 text-slate-950">Collaborators</h1>
      <div className="flex flex-row flex-wrap gap-4 mb-10 items-center justify-center">
        {collaborators
          .sort((c1, c2) => c1.name.localeCompare(c2.name))
          .map((collaborator) => {
            return (
              <CollaboratorCard
                key={collaborator.id}
                image={collaborator.image}
                title={collaborator.name}
              />
            );
          })}
      </div>
    </div>
  );
}
