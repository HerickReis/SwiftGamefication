export function renderTasks(container, state, reRender){
  const list = document.createElement('div');
  list.className='tasks-list';
  container.appendChild(list);

  state.tasks.forEach(task=>{
    const taskEl = document.createElement('div');
    taskEl.className='task';
    taskEl.innerHTML = `
      <div class="meta">
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
        <div>
          <div style="font-weight:700">${task.title}</div>
          <div style="font-size:13px;color:var(--muted)">${task.points} pontos</div>
        </div>
      </div>
      <div>
        <button class="btn" data-action="claim" data-id="${task.id}">${task.completed ? 'Reivindicado' : 'Marcar'}</button>
      </div>
    `;
    list.appendChild(taskEl);
  });

  // events
  list.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
    cb.addEventListener('change', (e)=>{
      const id = Number(e.target.dataset.id);
      const t = state.tasks.find(x=>x.id===id);
      t.completed = e.target.checked;
      reRender();
    });
  });

  list.querySelectorAll('button[data-action="claim"]').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      const id = Number(e.target.dataset.id);
      const t = state.tasks.find(x=>x.id===id);
      t.completed = true;
      // add points to user
      state.user.points += t.points;
      reRender();
      alert('Parabéns! Você ganhou ' + t.points + ' pontos.');
    });
  });
}
