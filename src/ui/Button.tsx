type ButtonProps = {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button type="button" className="font-bold tracking-[4.375px] cursor-pointer bg-soft-red flex items-center justify-center uppercase text-off-white text-sm px-9 py-3 hover:bg-dark-space-blue transition-all">{text}</button>
  );
}