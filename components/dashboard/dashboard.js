import { renderTasks } from '../tasks/tasks.js';
import { renderProgress } from '../progress/progress.js';

export function renderDashboard(container, state, reRender){
  const cardsWrap = document.createElement('div');
  cardsWrap.className='cards';
  cardsWrap.innerHTML = `
    <div class="card">
      <h3>Seu Desempenho</h3>
      <p>Você tem <strong>${state.user.points}</strong> pontos</p>
    </div>
    <div class="card">
      <h3>Tarefas Completas</h3>
      <p><strong>${state.tasks.filter(t=>t.completed).length}</strong></p>
    </div>
    <div class="card">
      <h3>Recompensa</h3>
      <p>Ganhe estrelas ao completar metas</p>
    </div>
  `;
  container.appendChild(cardsWrap);

  // Tasks area
  const tasksCard = document.createElement('div');
  tasksCard.className='card';
  tasksCard.style.marginTop='16px';
  tasksCard.innerHTML = `<h3>Suas Tarefas</h3>`;
  container.appendChild(tasksCard);

  renderTasks(tasksCard, state, reRender);

  // Progress / goals
  const goalCard = document.createElement('div');
  goalCard.className='card';
  goalCard.style.marginTop='16px';
  goalCard.innerHTML = `<h3>Progresso</h3>`;
  container.appendChild(goalCard);
  renderProgress(goalCard, state);
}
