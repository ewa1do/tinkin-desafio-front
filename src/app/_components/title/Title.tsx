interface Props {
    text: string;
}

export function Title({ text }: Props) {
    return <h2 className="text-[32px] font-semibold">{text}</h2>;
}
