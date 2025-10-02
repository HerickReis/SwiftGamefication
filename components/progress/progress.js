export function renderProgress(container, state){
  const completed = state.tasks.filter(t=>t.completed).length;
  const total = state.tasks.length;
  const pct = Math.round((completed/total)*100);
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div style="margin-bottom:10px">${completed} de ${total} tarefas concluídas</div>
    <div style="height:18px;background:#eee;border-radius:999px;overflow:hidden">
      <div style="height:18px;width:${pct}%;background:linear-gradient(90deg,var(--light-accent),var(--accent))"></div>
    </div>
    <div style="margin-top:8px;color:var(--muted)">${pct}% concluído</div>
  `;
  container.appendChild(wrap);
}
