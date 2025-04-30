// components/HeroBanner.tsx
import Image from "next/image";

export default function Banner({src}: {src: string}) {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Placeholder Image */}
      <Image
        src={src}
        alt="Banner"
        fill
        className="object-cover opacity-80"
        priority
      />
    </div>
  );
}
