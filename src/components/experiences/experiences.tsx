import { useTranslation } from "react-i18next";
import { Experience } from "./components/experience";
import "./experiences.scss";

const experiences = [
  {
    id: "sync",
    enterprise: "Sync",
    period: "JAN/25 - {current}",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Wordpress", "Bootstrap", "MySQL"],
  },
  {
    id: "reapho",
    enterprise: "Reapho",
    period: "NOV/24 - JUN/25",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "NextJs",
      "NestJs",
      "PostgreSQL",
      "WebGazerJs",
      "Scrum",
    ],
  },
  {
    id: "devhat",
    enterprise: "DevHat",
    period: "OUT/23 - NOV/24",
    tags: ["HTML", "CSS", "JavaScript", "Git", "Scrum", "Kanban"],
  },
  {
    id: "army",
    period: "FEV/19 - JUN/25",
  },
];

export const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className="experiences">
      <div className="experiences__items">
        {experiences.map((experience) => {
          const period = experience.period.replace(
            "{current}",
            t("experiences.current")
          );
          const tags =
            experience.tags ??
            (t(`experiences.${experience.id}.tags`, {
              returnObjects: true,
            }) as string[]);
          const enterprise =
            experience.enterprise ??
            t(`experiences.${experience.id}.enterprise`);

          return (
            <Experience
              key={experience.id}
              name={t(`experiences.${experience.id}.role`)}
              enterprise={enterprise}
              period={period}
              description={t(`experiences.${experience.id}.description`)}
              tags={tags}
            />
          );
        })}
      </div>
    </div>
  );
};
