import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-byteBlue text-white py-4">
      <div className="px-6 flex justify-between items-center max-w-[1240px] mx-auto">
        <div />
        <div className="flex items-center gap-2">
          <p className="text-sm">Victor Batista</p>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/icons/Avatar.svg"
              alt="Avatar da usuária"
              width={32}
              height={32}/>
          </div>
        </div>
      </div>
    </header>
  );
}
