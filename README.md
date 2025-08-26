# Newsletter

## Tecnologias utilizadas

- **React com Vite** 
- **Tailwind CSS** (estilização)
- **React Router DOM** (navegação entre páginas)
- **Postman** (Teste de APIs)
- **Axios** (Realizar fetch do backend com o frontend)
- **CORS** (Cross-origin Resource Sharing)
- **Express** (facilita criar o servidor/backend)


## Estrutura do Front-end

**Newsettler.jsx** (Página de inscrição)
   - Formulário para cadastro de email.
   - Lista de benefícios/recursos da newsletter com ícones.
   - Botão de envio para prosseguir para a página de confirmação.
   - Animações para as página formulário


**Confirmation.jsx** (Página de confirmação)
   - Exibe mensagem de sucesso após inscrição.
   - Botão para voltar à homepage.
   - Ícone centralizado acima do texto para reforçar a confirmação.
   - Animações para as página comfirmação.

**Cancelar.jsx**
- Exibe mensagem de sucesso após remover email da NewsLetter.
- Exibe mensagem de erro caso der erro.
- Botões para cancelar a inscrição e voltar para NewsLetter.



## Estrutura Back-end

- Criação da pasta backend com express e cors.
- Criação do arquivo db.js (conexão do banco de dados para o backend).
- Criação do arquivo script.js 

## Estrutura Banco de dados (Mysql)

- Criação do banco de dados (com apenas uma tabela com duas colunas e duas linhas)

## Como rodar o projeto no frontend

- no terminal do VS code abre com o powershell.
- Depois digite **"cd .\frontend\"** e aperte enter.
- Logo digite **npm install** para instalar o arquivo node_modules e aperte enter.
- Depois digite  e aperte **npm run dev**.
- E abre o link que vai aparecer no terminal.

## Como rodar o projeto no backend

- no terminal do VS code abre com o powershell.
- Depois digite **"cd .\backend\"** e aperte enter.
- Logo digite **npm install** para instalar o arquivo node_modules e aperte enter
- Depois aperte **npm run dev** deve aparecer as mensagens no terminal do VS code: Servidor rodando na porta 3000;
  Conectado ao banco de dados com sucesso!"".

## Criação do banco de dados (Mysql)

- O arquivo mysql está salvo dentro da pasta NewsLetter (NewsLetter_DB.sql).
- O arquivo db.js do backend contém as informações de conexão com o banco de dados.


