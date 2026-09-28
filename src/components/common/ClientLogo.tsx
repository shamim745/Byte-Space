import Image from "next/image";
import type { ClientLogoProps } from "@/types/home";

const ClientLogo = ({ client }: ClientLogoProps) => {
  return (
    <Image
      src={client.logo}
      alt={client.name}
      width={167}
      height={41}
      unoptimized
      className="h-8 w-auto sm:h-10 lg:h-auto"
    />
  );
};

export default ClientLogo;
