import Image from "next/image";

export const Loading = () => {
  return (
    <div className="size-full h-screen flex flex-col justify-center items-center">
      <Image
        alt="logo"
        width={120}
        height={120}
        src="/logo.svg"
        className="animate-pulse duration-700"
      />
    </div>
  );
};
