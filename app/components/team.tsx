import Image from "next/image";

type Props = {
  name: string;
  proffesion: string[];
  description: string;
  image: string;
};

export default function TeamMemeber(props: Props) {
  const { name, proffesion, image } = props;

  return (
    <div className="relative w-[250px] h-[300px] rounded-xl overflow-hidden">
      <Image
        src={`/images/${image}`}
        alt={`${name}-image`}
        fill
        className="object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/95 to-transparent p-3 flex flex-col justify-end">
        <h3 className="text-white font-semibold text-lg">{name}</h3>

        <div className="flex flex-wrap gap-1 mt-1">
          {proffesion.map((p, idx) => (
            <span
              key={idx}
              className="text-xs text-white/80 bg-gray-800 px-2 py-0.5 rounded"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
