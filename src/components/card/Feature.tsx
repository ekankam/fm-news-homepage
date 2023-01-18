type FeatureProps = {
  title: string;
  text: string;
}

export default function Feature({ title, text }: FeatureProps) {
  return (
    <div className="bg-dark-space-blue group cursor-pointer">
      <h4 className="text-off-white text-xl font-extrabold pb-2 lg:text-[15px] lg:group-hover:text-soft-orange transition-all ease-in-out">{title}</h4>
      <p className="text-silver lg:text-[13px]">{text}</p>
    </div>
  );
}