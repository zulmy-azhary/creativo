import { IconType } from "react-icons";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { Reveal } from "../utils/reveal";

type SocialMediaType = {
  href?: string;
  icon: IconType;
};

const medias: SocialMediaType[] = [
  { icon: AiOutlineTwitter },
  { icon: RiLinkedinFill },
  { icon: RiFacebookFill },
];

export const SocialMedia: React.FC = () => {
  return (
    <div className="flex items-center gap-x-8">
      {medias.map((media, i) => (
        <Reveal key={i} delay={0.1 * (i + 1)}>
          <a
            href={media.href ?? "#"}
            className="block p-2 text-black transition-opacity bg-white rounded-lg hover:opacity-90"
          >
            <media.icon className="size-6" />
          </a>
        </Reveal>
      ))}
    </div>
  );
};
