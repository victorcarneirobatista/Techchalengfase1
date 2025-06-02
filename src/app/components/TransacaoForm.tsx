"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Transacao = {
  id: string;
  tipo: "Depósito" | "Transferência";
  valor: number;
  data: string;
};

interface TransacaoFormProps {
  transacoes: Transacao[];
  setTransacoes: React.Dispatch<React.SetStateAction<Transacao[]>>;
  modoEdicao: boolean;
  setModoEdicao: (v: boolean) => void;
  transacaoSelecionada: Transacao | null;
  setTransacaoSelecionada: (t: Transacao | null) => void;
}

export default function TransacaoForm({
  transacoes,
  setTransacoes,
  modoEdicao,
  setModoEdicao,
  transacaoSelecionada,
  setTransacaoSelecionada,
}: TransacaoFormProps) {
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState(() =>
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    if (modoEdicao && transacaoSelecionada) {
      setTipo(transacaoSelecionada.tipo);
      setValor(
        transacaoSelecionada.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
      setData(transacaoSelecionada.data);
    }
  }, [modoEdicao, transacaoSelecionada]);

  const limparFormulario = () => {
    setTipo("");
    setValor("");
    setData(new Date().toISOString().split("T")[0]);
    setModoEdicao(false);
    setTransacaoSelecionada(null);
  };

  const handleSubmit = () => {
    if (!tipo || !valor || !data) {
      alert("Preencha todos os campos.");
      return;
    }

    const valorNumerico = parseFloat(
      valor.replace(/[R$\s.]/g, "").replace(",", ".")
    );

    if (modoEdicao && transacaoSelecionada) {
            const transacoesAtualizadas = transacoes.map((t) =>
  t.id === transacaoSelecionada.id
    ? { ...t, tipo: tipo as "Depósito" | "Transferência", valor: valorNumerico, data }
    : t
    );


      setTransacoes(transacoesAtualizadas);
    } else {
            const novaTransacao: Transacao = {
        id: uuidv4(),
        tipo: tipo as "Depósito" | "Transferência",
        valor: valorNumerico,
        data,
      };

      setTransacoes((prev) => [...prev, novaTransacao]);
    }

    limparFormulario();
  };

  return (
    <div className="relative bg-byteCard text-white rounded-2xl p-6 shadow-md flex flex-col gap-4 w-full overflow-hidden border border-byteBorder">
      
      <h2 className="text-lg font-semibold text-white">
        {modoEdicao ? "Editar transação" : "Nova transação"}
      </h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400 font-medium" htmlFor="tipo">
          Tipo
        </label>
        <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="p-3 rounded-lg border border-byteBlue text-sm focus:outline-none focus:ring-2 focus:ring-byteBlue bg-[#1f1f1f] text-white placeholder-gray-400">
            <option value="" disabled hidden>
              Selecione o tipo de transação
            </option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400 font-medium" htmlFor="valor">
          Valor
        </label>
        <input
          id="valor"
          type="text"
          inputMode="numeric"
          placeholder="R$ 0,00"
          value={valor}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "");
            const formatted = (Number(raw) / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });
            setValor(formatted);
          }}
          className="p-3 rounded-lg border border-byteBlue bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-byteBlue"/>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400 font-medium" htmlFor="data">
          Data da transação
        </label>
        <input
          id="data"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="p-3 rounded-lg border border-byteBlue bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-byteBlue"/>
      </div>

      <button
          onClick={handleSubmit}
          className="bg-[#0E1116] text-white rounded-lg py-2 font-semibold hover:bg-[#004A5D] transition-colors">
          {modoEdicao ? "Salvar edição" : "Concluir transação"}
      </button>
    </div>
  );
}
