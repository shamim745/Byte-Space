import ClientLogo from "@/components/common/ClientLogo";
import { clients } from "@/db/clients";

const Clients = () => {
  return (
    <section className="bg-[#f5f5f6] px-4 py-10 sm:py-12 lg:flex lg:h-[202px] lg:items-center lg:px-6 lg:py-0">
      <div
        data-reveal
        className="container flex flex-wrap items-center justify-center 
      gap-x-8 gap-y-5 sm:gap-x-[72px]"
      >
        {clients.map((client) => (
          <ClientLogo key={client.id} client={client} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
