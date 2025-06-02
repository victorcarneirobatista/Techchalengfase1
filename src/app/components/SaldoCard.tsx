"use client";
import Image from "next/image";
import { useState } from "react";

type Transacao = {
  id: string;
  tipo: "Depósito" | "Transferência";
  valor: number;
  data: string;
};

interface SaldoCardProps {
  transacoes: Transacao[];
}

export default function SaldoCard({ transacoes }: SaldoCardProps) {
  const [mostrarSaldo, setMostrarSaldo] = useState(true);

  const handleToggle = () => {
    setMostrarSaldo((prev) => !prev);
  };

  const dataAtual = new Date();
  const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dataAtual);

  const saldoTotal = transacoes.reduce((acc, transacao) => {
    return transacao.tipo === "Transferência"
      ? acc - transacao.valor
      : acc + transacao.valor;
  }, 0);

  const saldoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(saldoTotal);

  return (
    <div className="bg-byteCard text-white rounded-2xl p-6 shadow-lg flex flex-col gap-4 w-full border border-byteBorder">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">Olá, Victor! :)</p>
          <p className="text-sm text-gray-400 capitalize">{dataFormatada}</p>
        </div>

        <div className="flex flex-col items-end text-right">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
            <span className="font-semibold text-white">Saldo</span>
            <button onClick={handleToggle} aria-label="Mostrar ou ocultar saldo">
              <Image
                src="/icons/eye.svg"
                alt="Ícone de olho"
                width={20}
                height={20}/>
            </button>
          </div>

          <p className="text-sm text-gray-400">Conta Corrente</p>
          <p className="text-3xl font-bold mt-1 tracking-tight">
            {mostrarSaldo ? saldoFormatado : "••••••••"}
          </p>
        </div>
      </div>
    </div>
  );
}
