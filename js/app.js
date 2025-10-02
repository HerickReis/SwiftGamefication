import { renderHeader } from '../components/header/header.js';
import { renderSidebar } from '../components/sidebar/sidebar.js';
import { renderDashboard } from '../components/dashboard/dashboard.js';
import { state } from './state.js';

const app = document.getElementById('app');

function mount(){
  app.innerHTML = '';
  const sidebarWrap = document.createElement('div');
  sidebarWrap.className='sidebar';
  app.appendChild(sidebarWrap);

  const main = document.createElement('div');
  main.className='main';
  app.appendChild(main);

  renderSidebar(sidebarWrap, state);
  renderHeader(main, state);
  renderDashboard(main, state, reRender);
}

function reRender(){
  // simple rerender strategy
  mount();
}

mount();

// Expose for debug
window.__state = state;
