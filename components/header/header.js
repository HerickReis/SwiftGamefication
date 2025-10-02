export function renderHeader(container, state){
  const topbar = document.createElement('div');
  topbar.className='topbar';
  topbar.innerHTML = `
    <div>
      <h1 style="margin:0">Plataforma do colaborador</h1>
      <p style="margin:6px 0 0 0;color:var(--muted)">Suas tarefas concluídas esta semana</p>
    </div>
    <div>
      <button class="btn ghost" id="btnSignUp">Cadastrar</button>
      <button class="btn" id="btnLogin">Entrar</button>
    </div>
  `;
  container.appendChild(topbar);

  document.getElementById('btnSignUp').addEventListener('click', ()=> alert('Tela de cadastro — protótipo'));
  document.getElementById('btnLogin').addEventListener('click', ()=> alert('Tela de login — protótipo'));
}
