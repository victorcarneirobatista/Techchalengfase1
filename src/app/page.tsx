"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SaldoCard from "./components/SaldoCard";
import TransacaoForm from "./components/TransacaoForm";
import Extrato from "./components/Extrato";

type Transacao = {
  id: string;
  tipo: "Depósito" | "Transferência";
  valor: number;
  data: string;
};

export default function Home() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState<Transacao | null>(null);
  const [sidebarAberta, setSidebarAberta] = useState(false);

  return (
    <div className="min-h-screen font-inter bg-byteBackground">
      <Header />

      <div className="p-6 flex justify-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_320px] gap-6 w-full max-w-[1240px]">
          
          {/* Botão menu hambúrguer visível apenas no mobile */}
          <div className="md:hidden flex justify-end">
            <button onClick={() => setSidebarAberta(!sidebarAberta)} className="p-2">
              <Image
                src="/icons/ícone-menu.svg"
                alt="Abrir menu"
                width={28}
                height={28}
                priority
              />
            </button>
          </div>

          {/* Sidebar controlada por estado */}
          <Sidebar visivel={sidebarAberta} />

          <div className="grid grid-rows-[auto_auto_1fr] gap-6">
            <SaldoCard transacoes={transacoes} />
            <TransacaoForm
              transacoes={transacoes}
              setTransacoes={setTransacoes}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              transacaoSelecionada={transacaoSelecionada}
              setTransacaoSelecionada={setTransacaoSelecionada}
            />
          </div>

          <Extrato
            transacoes={transacoes}
            setTransacoes={setTransacoes}
            setModoEdicao={setModoEdicao}
            setTransacaoSelecionada={setTransacaoSelecionada}
          />
        </div>
      </div>
    </div>
  );
}
