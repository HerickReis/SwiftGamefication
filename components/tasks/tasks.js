export function renderTasks(container, state, reRender){
  const list = document.createElement('div');
  list.className = 'tasks-list';
  container.appendChild(list);

  state.tasks.forEach(task => {
    // garante o campo claimed em dados antigos
    if (typeof task.claimed === 'undefined') task.claimed = false;

    const taskEl = document.createElement('div');
    taskEl.className = 'task';

    // se já foi reivindicada, usamos data-locked no checkbox (não cinza)
    const lockedAttrs = task.claimed ? 'data-locked="true" aria-disabled="true" tabindex="-1"' : '';

    taskEl.innerHTML = `
      <div class="meta">
        <input type="checkbox"
               ${task.completed ? 'checked' : ''}
               data-id="${task.id}"
               ${lockedAttrs}>
        <div>
          <div style="font-weight:700">${task.title}</div>
          <div style="font-size:13px;color:var(--muted)">${task.points} pontos</div>
        </div>
      </div>
      <div>
        <button class="btn"
                data-action="claim"
                data-id="${task.id}"
                ${task.claimed ? 'disabled' : ''}>
          ${task.claimed ? 'Reivindicado' : 'Reivindicar'}
        </button>
      </div>
    `;
    list.appendChild(taskEl);
  });

  // Checkbox: marca como concluída (mas ignora se já foi reivindicada)
  list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = Number(e.target.dataset.id);
      const t = state.tasks.find(x => x.id === id);

      if (t.claimed) {
        // já reivindicada: mantém marcado e não altera estado
        e.target.checked = true;
        return;
      }

      t.completed = e.target.checked;
      reRender();
    });
  });

  // Botão "Reivindicar": soma pontos uma única vez e trava a task
  list.querySelectorAll('button[data-action="claim"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.dataset.id);
      const t = state.tasks.find(x => x.id === id);

      // trava o botão imediatamente para evitar double click
      btn.disabled = true;

      if (t.claimed) return; // idempotente

      // opcional: exigir que esteja concluída antes de reivindicar
      // if (!t.completed) { alert('Conclua a tarefa antes de reivindicar.'); btn.disabled = false; return; }

      t.completed = true;
      t.claimed = true;
      state.user.points += t.points;

      reRender();
    });
  });
}
