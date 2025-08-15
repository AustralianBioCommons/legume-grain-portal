import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import React from "react";
import CollaboratorCard from "@/components/CollaboratorCard";
import { addBasePath } from "next/dist/client/add-base-path";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@heroui/button";

export const metadata: Metadata = {
  title: "Collaborators",
  description: "Organisations involved in the project",
};

interface Collaborator {
  id: string;
  name: string;
  image: string;
}

const collaborators: Collaborator[] = [
  { name: "NCRIS", id: "ncris", image: addBasePath("/img/logos/ncris.jpg") },
  {
    name: "Bioplatforms Australia",
    id: "bioplatforms",
    image: addBasePath("/img/logos/bioplatforms.webp"),
  },
  {
    name: "La Trobe / LISAF",
    id: "latrobe",
    image: addBasePath("/img/logos/latrobe-lisaf.png"),
  },
  {
    name: "Adelaide University",
    id: "adelaide",
    image: addBasePath("/img/logos/adelaide-university.png"),
  },
  {
    name: "SARDI",
    id: "sardi",
    image: addBasePath("/img/logos/sardi.jpg"),
  },
  {
    name: "Australian Plant Phenomics Network",
    id: "appn",
    image: addBasePath("/img/logos/appn.png"),
  },
  {
    name: "AGRF",
    id: "agrf",
    image: addBasePath("/img/logos/agrf.jpg"),
  },
  {
    name: "Australian BioCommons",
    id: "biocommons",
    image: addBasePath("/img/logos/biocommons.png"),
  },
  {
    name: "Metabolomics Australia",
    id: "metabolomics",
    image: addBasePath("/img/logos/metabolomics.png"),
  },
  {
    name: "University of South Australia",
    id: "unisa",
    image: addBasePath("/img/logos/uni-sa.png"),
  },
  {
    name: "University of Western Australia",
    id: "uwa",
    image: addBasePath("/img/logos/uwa.png"),
  },
  {
    name: "University of Sydney",
    id: "sydney-uni",
    image: addBasePath("/img/logos/sydney-uni.png"),
  },
];

export default function Collaborators() {
  return (
    <div
      className={"mx-auto max-w-4xl flex flex-col justify-center gap-4 mb-12"}
    >
      <Link href="/" className="ml-2 mb-4">
        <Button variant="flat">
          <FontAwesomeIcon icon={faArrowLeft} className={"mr-2"} size="xl" />
          <span className="text-lg">Back</span>
        </Button>
      </Link>
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
