## 📘 Visão Geral

**insta‑like** é um projeto de backend em Node.js que simula um serviço para curtir (“like”) posts em estilo Instagram. Foi construído durante uma imersão da escola Alura. Embora o repositório contenha apenas o back‑end, presumimos integração com front‑end ou serviço de upload/exportação.

---

## 📂 Estrutura do Projeto

```plaintext
/
├─ .vscode/                  # Configurações do editor (ex: launch.json)
├─ src/                      # Código-fonte principal
├─ uploads/                  # Assets enviados (imagens, etc.)
├─ server.js                 # Ponto de entrada do servidor
├─ package.json             # Dependências e scripts
├─ package-lock.json        # Versão fixa de dependências
├─ services.sh              # Script de setup/execução de serviços auxiliares (ex: banco)
└─ .gitignore               # Arquivos/pastas ignorados no Git
```

---

## 🚀 Instalação e Execução

### 1. Pré-requisitos

* **Node.js** instalado (recomendado LTS).
* Possível requisito de banco de dados local — confira o `services.sh`.

### 2. Instalação

```bash
npm install
```

### 3. Configuração (se houver)

* Execute `sh services.sh` para iniciar serviços como banco de dados.

### 4. Início do Servidor

```bash
node server.js
```

Ou, se disponível:

```bash
npm run dev
```

O `server.js` inicializa o servidor HTTP na porta padrão (geralmente 3000 ou definida via variável de ambiente).

---

## 🧩 Principais Módulos

### **server.js**

* Importa frameworks como Express/Fastify.
* Configura middlewares (CORS, JSON).
* Monta roteadores para endpoints REST (ex: `/posts`, `/likes`).
* Inicia servidor conectado a recurso de dados (DB, arquivos).

### **src/**

Contém lógica de negócio:

* **controllers/** — tratadores de requisições (CRUD, likes).
* **services/** — lógica isolada: integração com DB, upload, validações.
* **models/** — definição de entidades (Post, Like), via ORM ou representação em JS.
* **routes/** — mapeamento de URLs e handlers.

### **uploads/**

Pasta pública para armazenar imagens ou arquivos enviados pelo usuário.

### **services.sh**

Script shell para orquestração: iniciar banco, serviços dependentes ou definir variáveis ambientais.

---

## 🔌 Endpoints (Exemplo)

* `GET /posts` — lista posts.
* `POST /posts` — cria post com conteúdo/imagem.
* `GET /posts/:id` — post específico.
* `POST /posts/:id/like` — adiciona like ao post.
* `GET /posts/:id/likes` — obtém número de likes ou lista de usuários.

---

## 🛠️ Dependências

* `express` ou `fastify` — servidor HTTP.
* `multer` — uploads de arquivo.
* `nodemon` — desenvolvimento.
* `dotenv` — variáveis de ambiente.
* Banco: `mongoose` (MongoDB) ou `pg` (PostgreSQL), dependendo do DB.

---


