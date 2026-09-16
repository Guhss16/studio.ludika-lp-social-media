interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function ListItem({ children, className }: ListItemProps) {
  return (
    <li
      className={`cursor-pointer p-2 mt-1 mb-1 lg:mt-0 border-2 border-black shadow-lg bg-[#DCDDC3] hover:scale-103 transition-transform duration-300  ${className || ""}`}
    >
      {children}
    </li>
  );
}
