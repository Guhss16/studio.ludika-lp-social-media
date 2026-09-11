
interface TextoSectionProps {
    className?: string;
    children?: React.ReactNode;
}

export default function TextoSection({ className, children }: TextoSectionProps){
    return(
        <p className={`${className} fonteNoto font-light text-lg md:text-xl`}>
            {children}
        </p>
    )
}