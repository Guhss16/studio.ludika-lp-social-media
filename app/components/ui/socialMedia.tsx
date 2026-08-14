import InstagramIcon from "@/public/assets/Instagram-Icon";
import WhatsappIcon from "@/public/assets/Whatsapp-Icon";
import SiteIcon from "@/public/assets/Site-Icon";

type SocialMediasProps = {
  circleColor?: string;
  iconColor?: string;
  size?: number; // controla o tamanho do círculo (ícone)
};

export default function SocialMedias({
  circleColor = "#FEF200",
  iconColor = "#EB2782",
  size = 60,
}: SocialMediasProps) {
  const linkClass =
    "hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center";

  return (
    <div className="grid grid-cols-3 gap-5 w-fit">
      <a
        href="https://studioludika.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <SiteIcon circleColor={circleColor} iconColor={iconColor} size={size} />
      </a>
      <a
        href="https://www.instagram.com/studio.ludika/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <InstagramIcon
          circleColor={circleColor}
          iconColor={iconColor}
          size={size}
        />
      </a>
      <a
        href="https://wa.me/5511968573459?text=Ol%C3%A1%2C%20vim%20pelo%20Linktree%20da%20Ludika%21"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <WhatsappIcon
          circleColor={circleColor}
          iconColor={iconColor}
          size={size}
        />
      </a>
    </div>
  );
}
