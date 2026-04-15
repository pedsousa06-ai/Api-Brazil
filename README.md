<div align="center">

# 🇧🇷 Brasil API

**API REST completa para consulta de dados do Brasil — estados, capitais, cidades e regiões**

![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-Framework-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Version](https://img.shields.io/badge/Version-1.0.0-2962FF?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-ff9800?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Online-00c853?style=for-the-badge)

<br/>

🚀 **API em Online:**
👉 https://api-brazil-5imc.onrender.com/

---

## 📖 Sobre o Projeto

A **Brasil API** é uma API REST desenvolvida com foco em organização, performance e boas práticas.

Ela fornece dados completos sobre o Brasil:

* Estados 🇧🇷
* Capitais 🏙️
* Cidades 📍
* Regiões 🌎

Além disso, o projeto possui um **front-end integrado**, permitindo visualizar os dados de forma simples e prática.

---

## 🌐 Acesse Online

Você pode testar direto no navegador:

```
https://api-brazil-5imc.onrender.com/
```

Exemplo:

```
https://api-brazil-5imc.onrender.com/estado/SP
```

---

## ✨ Funcionalidades

* ✅ Listagem de todos os estados brasileiros
* ✅ Consulta completa de um estado
* ✅ Retorno da capital por sigla
* ✅ Filtro por região
* ✅ Capitais históricas do Brasil
* ✅ Lista de cidades por estado
* ✅ Interface web integrada

---

## 📡 Rotas da API

| Método | Endpoint          | Descrição                 |
| ------ | ----------------- | ------------------------- |
| GET    | `/estados`        | Lista todos os estados    |
| GET    | `/estado/:uf`     | Dados completos do estado |
| GET    | `/capital/:uf`    | Capital do estado         |
| GET    | `/regiao/:regiao` | Estados por região        |
| GET    | `/capitais`       | Capitais históricas       |
| GET    | `/cidades/:uf`    | Cidades do estado         |

### 🔎 Exemplos

```
GET /estado/SP
GET /capital/RJ
GET /regiao/Sudeste
GET /cidades/MG
```

---

## 🛠️ Tecnologias

### Back-end

* Node.js
* Express
* CORS

### Front-end

* HTML5
* CSS3
* JavaScript (Fetch API)

---

## 🚀 Como rodar localmente

```bash
git clone https://github.com/seu-usuario/API-Brazil.git
cd API-Brazil/Server
npm install
node app.js
```

Servidor:

```
http://localhost:2000
```

---

## 📁 Estrutura do Projeto

```
API-Brazil/
│
├── Server/
├── public/
├── docs/
```

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Sousa**
🎓 SENAI

---

## 📄 Licença

Este projeto está sob a licença MIT.

