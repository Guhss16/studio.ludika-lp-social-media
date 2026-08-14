import Image from "next/image";
import ImagemChaveiros from "@/public/assets/ChaveirosLudika.webp";

export default function Chaveiros() {
  return (
    <div>
      <Image
        src={ImagemChaveiros}
        alt="Chaveiros da Ludika"
        className="absolute left-1/2 -translate-x-1/2"
        priority
      />
    </div>
  );
}
