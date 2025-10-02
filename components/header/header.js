export function renderHeader(container, state){
  const topbar = document.createElement('div');
  topbar.className='topbar';
  topbar.innerHTML = `
    <div>
      <h1 style="margin:0">BEM VINDO A PLATAFORMA DE GAMIFICAÇÃO</h1>
      <p style="margin:6px 0 0 0;color:var(--muted)">Suas tarefas concluídas esta semana</p>
    </div>
    <div>
      <button class="btn ghost" id="btnSignUp">SIGN UP</button>
      <button class="btn" id="btnLogin">LOG IN</button>
    </div>
  `;
  container.appendChild(topbar);

  document.getElementById('btnSignUp').addEventListener('click', ()=> alert('Tela de cadastro — protótipo'));
  document.getElementById('btnLogin').addEventListener('click', ()=> alert('Tela de login — protótipo'));
}
