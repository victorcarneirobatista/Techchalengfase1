"use client";

import Image from "next/image";

type Transacao = {
  id: string;
  tipo: "Depósito" | "Transferência";
  valor: number;
  data: string;
};

interface ExtratoProps {
  transacoes: Transacao[];
  setTransacoes: React.Dispatch<React.SetStateAction<Transacao[]>>;
  setModoEdicao: (v: boolean) => void;
  setTransacaoSelecionada: (t: Transacao) => void;
}

export default function Extrato({
  transacoes,
  setTransacoes,
  setModoEdicao,
  setTransacaoSelecionada,
}: ExtratoProps) {
  const handleDelete = (id: string) => {
    const confirmar = confirm("Deseja realmente excluir esta transação?");
    if (confirmar) {
      setTransacoes((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleEdit = (transacao: Transacao) => {
    setTransacaoSelecionada(transacao);
    setModoEdicao(true);
  };

  return (
    <div className="bg-byteCard text-white rounded-2xl p-4 shadow space-y-4 w-full max-w-sm">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center border-b border-byteBorder pb-3">
        <h2 className="text-lg font-bold">Extrato</h2>
        <div className="flex gap-2">
          <button
            className="w-10 h-10 bg-byteBlue rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
            title="Editar geral (desabilitado)"
            disabled
          >
            <Image src="/icons/caneta.svg" alt="Editar" width={20} height={20} />
          </button>
          <button
            className="w-10 h-10 bg-byteBlue rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
            title="Excluir geral (desabilitado)"
            disabled
          >
            <Image src="/icons/lixeira.svg" alt="Excluir" width={20} height={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {transacoes.length === 0 ? (
          <p className="text-sm text-byteTextMuted">
            Nenhuma transação registrada.
          </p>
        ) : (
          transacoes.map((transacao) => (
            <div
              key={transacao.id}
              className="bg-byteDark border border-byteBorder rounded-lg p-3 shadow-sm">
              <p className="text-byteGreen text-sm font-bold capitalize">
                {new Date(transacao.data).toLocaleString("pt-BR", {
                  month: "long",
                })}
              </p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{transacao.tipo}</span>
                <span>
                  {new Date(transacao.data).toLocaleDateString("pt-BR")}
                </span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p
                  className={`text-lg font-semibold ${
                    transacao.tipo === "Transferência"
                      ? "text-byteRed"
                      : "text-white"
                  }`}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(
                    transacao.valor *
                      (transacao.tipo === "Transferência" ? -1 : 1)
                  )}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(transacao)}
                    title="Editar transação"
                    className="w-8 h-8 bg-byteBlue rounded-full flex items-center justify-center hover:bg-[#00677e] transition">
                    <Image
                      src="/icons/caneta.svg"
                      alt="Editar"
                      width={16}
                      height={16}/>
                  </button>

                  <button
                    onClick={() => handleDelete(transacao.id)}
                    title="Excluir transação"
                    className="w-8 h-8 bg-byteBlue rounded-full flex items-center justify-center hover:bg-byteRed transition">
                    <Image
                      src="/icons/lixeira.svg"
                      alt="Excluir"
                      width={16}
                      height={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
