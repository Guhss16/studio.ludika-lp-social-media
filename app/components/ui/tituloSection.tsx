interface TituloSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TituloSection({
  className,
  children,
}: TituloSectionProps) {
  return (
    <h2
      className={`${className}  text-3xl marginPadrao
      md:text-4xl md:w-[75%] xl:w-[45%] lg:text-5xl`}
    >
      {children}
    </h2>
  );
}
