import SocialMedias from "../ui/socialMedia";
import LogoPreto from "@/public/assets/Logo_Preto";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavItemsFooter: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Site da Ludika", href: "https://studioludika.com.br" },
];

export default function Footer() {
  return (
    <footer className="pt-[40px] bg-[#383D38] mt-[50px] border-t-2">
      {" "}
      <div className="flex flex-col justify-center items-center gap-[30px]">
        {/*Logo*/}
        <a
          className="cursor-pointer bg-[#DCDDC3] py-2 px-4 rounded-full shadow-[0px_25px_16px_-3px_rgba(0,_0,_0,_0.45)]"
          href="/"
        >
          <LogoPreto className="w-[150px]" height="auto" />
        </a>

        {/*Navegação*/}
        <nav className="animate-nav flex flex-wrap justify-center gap-x-[50px] gap-y-[24px] items-center font-gotham max-w-[320px] md:max-w-none mx-auto">
          {" "}
          {defaultNavItemsFooter.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white uppercase fonteTijolo font-normal  text-[16px] transition-colors duration-200 group underline tracking-[2px]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#e72579] transition-all duration-300 group-hover:w-full" />{" "}
            </a>
          ))}
        </nav>

        <SocialMedias />

        {/*Politica de Privacidade */}
        <a
          href=""
          className="fonteTijolo font-normal text-white uppercase text-[16px] transition-colors duration-200 group underline tracking-[2px]"
        >
          Politica de Privacidade
        </a>

        {/*Direitos autorais*/}
        <div className="w-full bg-[#EE2682]">
          <div className=" text-center py-[15px] text-[#141414] font-gotham text-[14px] font-semibold">
            <span>© 2026 LUDIKA®. Todos os direitos reservados.</span>
          </div>
          <div className="h-[10px] w-full bg-[#FEF200]" />
        </div>
      </div>
    </footer>
  );
}
