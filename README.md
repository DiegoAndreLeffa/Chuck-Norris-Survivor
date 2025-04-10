# 🧟‍♂️ Chuck Norris Survivor

Um app divertido que gera um sobrevivente aleatório do apocalipse zumbi, sugere uma atividade para ele fazer, uma dica do mestre Chuck Norris e ainda monta um inventário com equipamentos úteis (ou nem tanto).

---

## 📸 Demonstração

> Clique no botão e receba um sobrevivente com:

- 🧑 Nome, idade e país
- 🎯 Atividade aleatória para fazer no apocalipse
- 🥋 Dica de sobrevivência do Chuck Norris
- 🎒 Um inventário aleatório com 3-4 itens

---

## 🔧 Tecnologias Utilizadas

### 🔙 Backend

- **Node.js**
- **Express**
- **Axios**
- **APIs externas**:
  - [Random User API](https://randomuser.me/) → Gera perfil do sobrevivente
  - [Bored API](https://bored-api.appbrewery.com/random) → Sugere uma atividade aleatória
  - [Chuck Norris API](https://api.chucknorris.io/) → Fornece uma piada de Chuck Norris
  - [D&D 5e Equipment API](https://www.dnd5eapi.co/api/equipment) → Fornece lista de equipamentos de RPG usados como inventário

### 🔝 Frontend

- **React (Vite)**
- **Axios**
- **Styled-components**

---

## 📡 Como as APIs funcionam

### 🧑‍🦱 Random User API

`https://randomuser.me/api/`  
**Retorna:**

- Nome, idade, país, imagem de perfil

### 🧠 Bored API

`https://www.boredapi.com/api/activity/`  
**Retorna:**

- Uma sugestão de atividade (ex: "Aprenda a usar um machado")

### 🥋 Chuck Norris API

`https://api.chucknorris.io/jokes/random`  
**Retorna:**

- Uma piada aleatória sobre Chuck Norris

### 🎒 D&D Equipment API

`https://www.dnd5eapi.co/api/equipment`  
**Retorna:**

- Lista de itens como mochilas, armas, ferramentas, kits
- O app sorteia 3 a 4 itens para formar o inventário do sobrevivente

---

## 🛠 Backend - Como funciona

### 📁 Arquivo: `survivorService.js`

- Faz requisições para as 4 APIs externas
- Em caso de falha de uma API, usa mensagens alternativas
- Monta um JSON final:

```json
{
  "nome": "Jane Doe",
  "idade": 27,
  "pais": "Brazil",
  "imagem": "https://randomuser.me/api/portraits/women/45.jpg",
  "atividade": "Learn how to fight with a stick",
  "dica": "Chuck Norris fez um zumbi fugir só com o olhar.",
  "inventario": [
    "Backpack",
    "Torch",
    "Shortsword",
    "Rations"
  ]
}
```

### 📁 Arquivo: `server.js`

- Cria um servidor Express
- Rota `GET /api/survivor` que retorna os dados do sobrevivente

---

## 🎨 Frontend - Como funciona

### 📁 Arquivo: `App.jsx`

- Exibe um botão “Gerar Sobrevivente”
- Mostra:
  - Nome, idade, país
  - Atividade
  - Dica do Chuck Norris
  - 🎒 Inventário em forma de lista (até com emojis)

- Enquanto os dados carregam, mostra o botão com “Gerando...”
- Quando terminar, exibe tudo de forma organizada e estilizada com styled-components

---

## 🚀 Como rodar o projeto

### Backend

```bash
cd backend
npm install
node server.js
```

O backend roda em: `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse: `http://localhost:5173`

---

## 💡 Ideias futuras

- Adicionar ícones ou imagens reais no inventário
- Exibir raridade dos itens (com cores ou estrelas)
- Sons e animações zumbis
- Gerador de grupo de sobreviventes
- Salvamento de sobreviventes para exibir no "museu de lendas"

---

## 😄 Feito por
>
> Um sobrevivente... e o Chuck Norris.  
> Mas principalmente por você. 🔥
