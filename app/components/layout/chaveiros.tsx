import Image from "next/image";
import ImagemChaveiros from "@/public/assets/ChaveirosLudika.webp";
import ChaveiroLudikaGrande from "@/public/assets/ChaveiroLudikaGrande.png";

interface ChaveirosProps {
  className?: string;
}

export default function Chaveiros({ className }: ChaveirosProps) {
  return (
    <Image
      src={ChaveiroLudikaGrande}
      alt="Chaveiros da Ludika"
      className={`${className || ""} `}
      priority
    />
  );
}
