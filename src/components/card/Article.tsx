type ArticleProps = {
  alt: string;
  number: string;
  src: string;
  title: string;
  text: string;
}

export default function Article({ alt, number, src, title, text }: ArticleProps) {
  return (
    <article className="flex gap-6 group lg:cursor-pointer items-start h-full w-full">
      <img src={src} alt={alt} width={100} height={127} />
      <div>
        <span className="text-silver text-[32px] block font-bold leading-8 mb-3">{number}</span>
        <h5 className="text-base leading-6 text-dark-space-blue font-extrabold lg:group-hover:text-soft-red transition-all ease-in-out mb-[9px]">{title}</h5>
        <p className="text-gun-memtal">{text}</p>
      </div>
    </article>
  );
}