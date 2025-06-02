import SaldoCard from "./components/SaldoCard";
import Extrato from "./components/Extrato";
import Sidebar from "./components/Sidebar";
import TransacaoForm from "./components/TransacaoForm";


export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen font-inter bg-[#e8f0e8] p-4 text-sm">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-7 flex flex-col gap-6">
        <SaldoCard />
        <TransacaoForm />
      </div>

      <div className="col-span-3">
        <Extrato />
      </div>
    </div>
  );
}
