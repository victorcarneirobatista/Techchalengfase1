# Tech Chaleng Fase 1

Projeto de dashboard financeiro responsivo, desenvolvido com **Next.js 15.3.3**, **Tailwind CSS 3.4.1** e **Webpack**.

Acesse o projeto

[techchalengfase1.vercel.app](https://techchalengfase1.vercel.app)

---

## Funcionalidades

- Adição, edição e remoção de transações
- Cálculo automático de saldo
- Interface responsiva com menu hambúrguer
- Estrutura moderna com App Router do Next.js

---

## Tecnologias

- **Next.js** 15.3.3 (App Router)
- **Tailwind CSS** 3.4.1
- **Webpack** como empacotador
- `useState`, `props`, `useEffect`, e outros hooks do React
- Deploy via **Vercel**

---

## Personalização

### Alterar nome do usuário
No componente `SaldoCard.tsx`, você pode trocar a saudação:

```tsx
<p className="text-xl font-semibold">Olá, Victor! :)</p>
