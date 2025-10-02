export function renderSidebar(container, state){
  container.innerHTML = `
    <div class="brand">PLATAFORMA DE GAMIFICAÇÃO</div>
    <div class="user-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div class="user-name">HELLO<br/><strong>${state.user.name}</strong></div>
          <div class="level">Nível ${state.user.level} · ${state.user.points} pontos</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:24px;font-weight:700">${state.user.stars}</div>
          <div style="font-size:12px;color:var(--muted)">Você ganhou uma estrela</div>
        </div>
      </div>
      <div class="progress-small" aria-hidden="true"><i style="width:40%"></i></div>
    </div>

    <div class="card" style="margin-bottom:12px">
      <h3>Suas Tarefas Diarias</h3>
      <p class="footer">Falta 1 tarefa a ser concluída</p>
    </div>

    <div class="card">
      <h3>Metas Semanais</h3>
      <p class="footer">Vendas semanais · Cursos extras</p>
    </div>
  `;
}
