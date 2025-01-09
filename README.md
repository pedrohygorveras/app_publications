# Projeto: Automação de Publicações do DJE

## Visão Geral do Projeto

Este projeto tem como objetivo criar um sistema para automação, gerenciamento e processamento de publicações extraídas do Diário da Justiça Eletrônico (DJE) de São Paulo. Ele é dividido em **Backend (Python/Node.js)** e **Frontend (React)**, oferecendo uma interface intuitiva baseada em Kanban.

---

### Funcionalidades Implementadas

#### Backend
- [ ] Automação para Web Scraping no DJE:
  - [ ] Acessar o site do DJE e buscar publicações filtrando por **Caderno 3 - Judicial - 1ª Instância - Capital Parte 1**.
  - [ ] Extrair informações como:
    - [ ] Número do processo.
    - [ ] Data de disponibilização.
    - [ ] Autor(es), Advogado(s), e réu fixo: "Instituto Nacional do Seguro Social - INSS".
    - [ ] Conteúdo completo da publicação.
    - [ ] Valores (bruto/líquido, juros moratórios, honorários).
  - [ ] Salvar as informações no banco de dados com status inicial como "nova".
  - [ ] Caso algum dado esteja ausente, retornar vazio/nulo.

- [ ] Estrutura do Banco de Dados:
  - [ ] Organizar dados para fácil consulta e atualização de status.
  - [ ] Permitir atualização de status (nova, lida, processada).

- [ ] API para Gerenciamento de Dados:
  - [ ] Endpoints para:
    - [ ] Buscar publicações com filtros (número, data, status).
    - [ ] Atualizar status da publicação.
  - [ ] Implementar autenticação e segurança.
  - [ ] Garantir escalabilidade e bom desempenho.

#### Frontend
- [ ] Tela de Login:
  - [ ] Campos para e-mail e senha.
  - [ ] Mensagens de erro claras (e.g., credenciais inválidas, falha no servidor).
  - [ ] Redirecionamento para a tela principal (Kanban) após login bem-sucedido.

- [ ] Tela de Cadastro:
  - [ ] Campos para nome, e-mail, senha e confirmação de senha.
  - [ ] Validação de senha com critérios específicos.
  - [ ] Mensagens de erro claras para validações.

- [ ] Kanban para Gerenciamento de Publicações:
  - [ ] Colunas:
    - [ ] Publicações Novas.
    - [ ] Publicações Lidas.
    - [ ] Enviadas para ADV.
    - [ ] Concluídas.
  - [ ] Funcionalidade de arrastar e soltar (drag and drop) com restrições.
  - [ ] Scroll infinito e carregamento incremental.

- [ ] Modal de Detalhes:
  - [ ] Exibição de informações completas da publicação em modo leitura.

- [ ] Barra de Busca e Filtros:
  - [ ] Pesquisa por número do processo ou partes envolvidas.
  - [ ] Filtros por intervalo de datas.

- [ ] Navbar:
  - [ ] Exibir logo e botão de logout.

---

### Checklist de Entrega

- [ ] **Repositório no GitHub:**
  - [ ] Código completo e versionado.
  - [ ] Dockerfile funcional.

- [ ] **Deploy Completo:**
  - [ ] Frontend em produção.
  - [ ] Backend funcional e acessível publicamente.
  - [ ] Banco de dados configurado e funcional.

- [ ] **Documentação:**
  - [ ] Manual do Produto:
    - [ ] Instruções de uso para usuários finais.
  - [ ] Documentação Técnica:
    - [ ] Rotas da API (Swagger/OpenAPI).
    - [ ] Estrutura do banco de dados.
    - [ ] Fluxos de automação e scraping.
    - [ ] Dependências e configurações.

- [ ] **README Bem Estruturado:**
  - [ ] Visão geral do projeto.
  - [ ] Requisitos para execução local.
  - [ ] Instruções de instalação e execução.
  - [ ] Exemplos de requisições à API.
  - [ ] Explicação do fluxo de trabalho do Kanban.

## Requisitos Técnicos
- **Backend:** Python para scraping; Node.js para API.
- **Frontend:** React para interface do usuário.
- **Banco de Dados:** Estrutura escalável e eficiente.