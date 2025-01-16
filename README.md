# JusCash - Gerenciamento de Publicações do DJE

Sistema para scraping, gerenciamento e visualização de publicações do Diário da Justiça Eletrônico de São Paulo.

## 🌐 Links do Projeto

- **Aplicação Front-end**: [Acesse a aplicação aqui](https://frontend.pedrohygorveras.ip-ddns.com/docs/)
- **Documentação da API**: [Swagger](https://backend.pedrohygorveras.ip-ddns.com/docs/)

Explore todos os endpoints da API de forma interativa.

---

## 📂 Estrutura do Projeto

O projeto está dividido em três componentes principais:

1. **Crawler** (`/crawler`): Scraping do DJE utilizando Python.
2. **Backend** (`/backend`): API RESTful desenvolvida em Node.js.
3. **Frontend** (`/frontend`): Interface de usuário baseada em React.js.

---

## 🚀 Tecnologias Utilizadas

- **Crawler**: Python, Selenium, BeautifulSoup.
- **Backend**: Node.js, Prisma ORM, PostgreSQL.
- **Frontend**: React.js, Vite, TailwindCSS.
- **Infraestrutura**: Docker e Docker Compose.

---

## 🛠️ Configuração e Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/).

---

### 1. Clone o repositório

```bash
git clone https://github.com/pedrohygorveras/app_publications.git
cd app_publications
```

---

### 2. Configure os arquivos .env

O projeto utiliza variáveis de ambiente para configurar suas dependências. Abaixo estão as configurações necessárias:

#### Arquivo .env para o Backend (/backend/.env):

```env
DATABASE_URL="postgresql://admin:admin123@db_postgres:5432/db_publications?schema=public"
APP_VERSION=1.0.0
APP_NAME=JusCash
APP_PORT=3021
APP_HOST=0.0.0.0

# Segurança
SECRET=3cba8f43e8c94877a213f8d45c2f1b2e
SECRET_CRYPT=9fdf84a232df4b2d9f8e13a6d12c7d3e
REFRESH_TOKEN_SECRET=5ae9c78126e54fbab73a1b94c6eae987

# Configuração de Token
TOKEN_LIFE=15m
REFRESH_TOKEN_LIFE=7d
```

#### Arquivo .env para o Frontend (/frontend/project/.env):

```env
docker-compose up --build
```

---

### 3. Execute o projeto com Docker Compose

Na raiz do projeto, execute o seguinte comando para iniciar todos os serviços:

```bash
docker-compose up --build
```

Este comando irá:

- Construir e iniciar os containers do **Crawler**, **Backend** e **Frontend**.
- Configurar o banco de dados automaticamente.

---

### 4. Acesse o sistema

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend** (Swagger): [http://localhost:3021/docs](http://localhost:3021/docs)

---

### 5. Como rodar o Crawler

1. **Entre no diretório do Crawler**:

   ```bash
   cd crawler
   ```

2. **Crie e ative um ambiente virtual**:

   Para Linux/Mac:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

   Para Windows:

   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Instale as dependências**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Edite os filtros (opcional)**:

   Os filtros para a busca podem ser configurados no arquivo `config/settings.py`:

   ```python
   URL = "https://dje.tjsp.jus.br"
   LOG_FILE = "./logs/scraper.log"
   OUTPUT_FILE = "./data/output.csv"
   FILTERS = {
       "dtInicio": "19/11/2024",
       "dtFim": "19/11/2024",
       "cadernos": "20",
       "pesquisaLivre": ["RPV", "pagamento pelo INSS"]
   }
   ```

   - **`dtInicio` e `dtFim`**: Período de busca.
   - **`cadernos`**: Identificação do caderno de busca (ex.: "20").
   - **`pesquisaLivre`**: Termos de busca no conteúdo das publicações.

5. **Execute o script principal**:

   ```bash
   python main.py
   ```
