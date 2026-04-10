/*************************************************************************************************************************************************************
 * Api usando As atividades da missoes bem legais
 * Autor: Pedro
 * Data inicio: 18/03/2026
 ************************************************************************************************************************************************************/

const express = require("express")
const cors    = require("cors")
const path    = require("path")
const app     = express()
 
const { 
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
} = require("./modulo/fuction")
 
// ========== MIDDLEWARES ==========
app.use(cors())
app.use(express.static(path.join(__dirname, "../public")))
 
// ========== ROTAS DE PÁGINAS ==========
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
 
app.get("/docs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/docs.html"))
})
 
// ========== ROTAS DA API ==========
app.get("/estados", function(req, res) {
    res.json(getListaDeEstados())
})
 
app.get("/estado/:uf", function(req, res) {
    res.json(getDadosEstados(req.params.uf))
})
 
app.get("/capital/:uf", function(req, res) {
    res.json(getCapitalEstado(req.params.uf))
})
 
app.get("/regiao/:regiao", function(req, res) {
    res.json(getEstadosRegiao(req.params.regiao))
})
 
app.get("/capitais", function(req, res) {
    res.json(getCapitalPais())
})
 
app.get("/cidades/:uf", function(req, res) {
    res.json(getCidades(req.params.uf))
})
 
// ========== SERVIDOR ==========
const PORT = process.env.PORT || 2000
app.listen(PORT, function() {
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log(`→ App:  http://localhost:${PORT}`)
    console.log(`→ Docs: http://localhost:${PORT}/docs`)
})