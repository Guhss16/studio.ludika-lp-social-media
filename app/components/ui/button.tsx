interface BotaoPadraoProps {
  text?: string;
  className?: string;
}

export default function BotaoPadrao({ text, className }: BotaoPadraoProps) {
  return (
    <div>
      <a
        href="https://wa.me/5511944821340?text=Ol%C3%A1%2C%20vim%20pelo%20Linktree%20da%20Ludika%21"
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} inline-block cursor-pointer bg-amareloPrincipal fonteTijolo uppercase outline outline-2 px-[20px] py-[10px] transition-transform duration-300 ease-out hover:scale-[1.05]`}
      >
        {text}
      </a>
    </div>
  );
}
