export default function Sidebar() {
  return (
    <aside className="bg-[#1a1b1f] rounded-xl p-4 shadow-md h-fit flex flex-col gap-2">
      {["Início", "Transferências", "Investimentos", "Outros serviços"].map((item, i) => (
        <button
          key={item}
          className={`text-left py-2 px-4 rounded-md border-l-4 transition-all ${
            i === 0
              ? "border-byteGreen font-semibold text-byteGreen bg-[#26272b]"
              : "border-transparent text-gray-300 hover:bg-[#2a2a2a]"
          }`}>
          {item}
        </button>
      ))}
    </aside>
  );
}
