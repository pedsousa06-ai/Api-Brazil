const BASE = 'https://api-brazil-5imc.onrender.com'

function showPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'))
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'))
  document.getElementById('panel-' + name).classList.add('active')
  event.target.classList.add('active')
}

function setDot(id, status) {
  const dot = document.getElementById('dot-' + id)
  dot.className = 'status-dot ' + status
}

function loading(id) {
  document.getElementById('result-' + id).innerHTML =
    '<span class="loading"><span class="spinner"></span>Carregando...</span>'
  setDot(id, '')
}

async function fetchEstados() {
  loading('estados')
  try {
    const res = await fetch(BASE + '/estados')
    const data = await res.json()
    if (!data) {
      setDot('estados', 'err')
      document.getElementById('result-estados').innerHTML = '<span class="empty">Nenhum estado encontrado.</span>'
      return
    }
    setDot('estados', 'ok')
    document.getElementById('qty-estados').innerHTML = `<span class="qty">${data.quantidade} estados</span>`
    document.getElementById('result-estados').innerHTML =
      `<div class="estados-grid">${data.uf.map(uf =>
        `<span class="uf-badge" onclick="irParaEstado('${uf}')">${uf}</span>`
      ).join('')}</div>`
  } catch (e) {
    setDot('estados', 'err')
    document.getElementById('result-estados').innerHTML =
      '<span class="empty">❌ Erro ao conectar com o servidor.</span>'
  }
}

function irParaEstado(uf) {
  document.getElementById('input-estado').value = uf
  document.querySelectorAll('.nav-btn')[1].click()
  fetchEstado()
}

async function fetchEstado() {
  const uf = document.getElementById('input-estado').value.trim().toUpperCase()
  if (!uf) return
  loading('estado')
  try {
    const res = await fetch(BASE + '/estado/' + uf)
    const data = await res.json()
    if (!data) {
      setDot('estado', 'err')
      document.getElementById('result-estado').innerHTML = '<span class="empty">Estado não encontrado.</span>'
      return
    }
    setDot('estado', 'ok')
    document.getElementById('result-estado').innerHTML = `
      <div class="info-card">
        <div class="info-item"><label>Sigla</label><span class="highlight">${data.uf}</span></div>
        <div class="info-item"><label>Nome</label><span>${data.descricao}</span></div>
        <div class="info-item"><label>Capital</label><span>${data.capital}</span></div>
        <div class="info-item"><label>Região</label><span>${data.regiao}</span></div>
      </div>`
  } catch (e) {
    setDot('estado', 'err')
    document.getElementById('result-estado').innerHTML =
      '<span class="empty">❌ Erro ao conectar com o servidor.</span>'
  }
}

async function fetchCapital() {
  const uf = document.getElementById('input-capital').value.trim().toUpperCase()
  if (!uf) return
  loading('capital')
  try {
    const res = await fetch(BASE + '/capital/' + uf)
    const data = await res.json()
    if (!data) {
      setDot('capital', 'err')
      document.getElementById('result-capital').innerHTML = '<span class="empty">Estado não encontrado.</span>'
      return
    }
    setDot('capital', 'ok')
    document.getElementById('result-capital').innerHTML = `
      <div class="info-card">
        <div class="info-item"><label>Sigla</label><span class="highlight">${data.uf}</span></div>
        <div class="info-item"><label>Estado</label><span>${data.descricao}</span></div>
        <div class="info-item"><label>Capital</label><span>${data.capital}</span></div>
      </div>`
  } catch (e) {
    setDot('capital', 'err')
    document.getElementById('result-capital').innerHTML =
      '<span class="empty">❌ Erro ao conectar com o servidor.</span>'
  }
}

async function fetchRegiao() {
  const regiao = document.getElementById('input-regiao').value
  if (!regiao) return
  loading('regiao')
  try {
    const res = await fetch(BASE + '/regiao/' + encodeURIComponent(regiao))
    const data = await res.json()
    if (!data) {
      setDot('regiao', 'err')
      document.getElementById('result-regiao').innerHTML = '<span class="empty">Nenhum estado encontrado.</span>'
      return
    }
    setDot('regiao', 'ok')
    document.getElementById('qty-regiao').innerHTML = `<span class="qty">${data.estados.length} estados</span>`
    document.getElementById('result-regiao').innerHTML = `
      <div class="regiao-grid">
        ${data.estados.map(e => `
          <div class="regiao-item">
            <div class="uf">${e.uf}</div>
            <div class="nome">${e.descricao}</div>
          </div>`).join('')}
      </div>`
  } catch (e) {
    setDot('regiao', 'err')
    document.getElementById('result-regiao').innerHTML =
      '<span class="empty">❌ Erro ao conectar com o servidor.</span>'
  }
}

async function fetchCapitais() {
  loading('capitais')
  try {
    const res = await fetch(BASE + '/capitais')
    const data = await res.json()
    if (!data) {
      setDot('capitais', 'err')
      document.getElementById('result-capitais').innerHTML = '<span class="empty">Nenhuma capital encontrada.</span>'
      return
    }
    setDot('capitais', 'ok')
    document.getElementById('result-capitais').innerHTML = `
      <div class="capitais-list">
        ${data.capitais.map(c => `
          <div class="capital-item">
            <div class="capital-uf">${c.uf}</div>
            <div class="capital-info">
              <strong>${c.capital}</strong>
              <small>${c.descricao}</small>
            </div>
            <div class="capital-anos">${c.capital_pais_ano_inicio} → ${c.capital_pais_ano_termino || 'atual'}</div>
          </div>`).join('')}
      </div>`
  } catch (e) {
    setDot('capitais', 'err')
    document.getElementById('result-capitais').innerHTML =
      '<span class="empty">❌ Erro ao conectar com o servidor.</span>'
  }
}

async function fetchCidades() {
  const uf = document.getElementById('input-cidades').value.trim().toUpperCase()
  if (!uf) return
  loading('cidades')
  try {
    const res = await fetch(BASE + '/cidades/' + uf)
    const data = await res.json()
    if (!data) {
      setDot('cidades', 'err')
      document.getElementById('result-cidades').innerHTML = '<span class="empty">Estado não encontrado.</span>'
      return
    }
    setDot('cidades', 'ok')
    document.getElementById('qty-cidades').innerHTML = `<span class="qty">${data.quantidade_cidades} cidades</span>`
    document.getElementById('result-cidades').innerHTML = `
      <div class="info-card" style="margin-bottom:1rem">
        <div class="info-item"><label>Estado</label><span>${data.descricao}</span></div>
        <div class="info-item"><label>Sigla</label><span class="highlight">${data.uf}</span></div>
      </div>
      <div class="cidades-list">
        ${data.cidades.map(c => `<div class="cidade-item">${c}</div>`).join('')}
      </div>`
  } catch (e) {
    setDot('cidades', 'err')
    document.getElementById('result-cidades').innerHTML =
      '<span class="empty">❌ Erro ao conectar com o servidor.</span>'
  }
}

// Enter key support
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('input-estado').addEventListener('keydown', e => e.key === 'Enter' && fetchEstado())
  document.getElementById('input-capital').addEventListener('keydown', e => e.key === 'Enter' && fetchCapital())
  document.getElementById('input-cidades').addEventListener('keydown', e => e.key === 'Enter' && fetchCidades())
})
