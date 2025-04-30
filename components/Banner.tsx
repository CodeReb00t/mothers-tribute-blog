// components/HeroBanner.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Placeholder Image */}
      <Image
        src="/next.svg" // <-- your placeholder image
        alt="Banner"
        fill
        className="object-fit"
        priority
      />
    </div>
  );
}
