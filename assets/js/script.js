// Global JS for small interactions (nav toggle, year updates)

// Toggle mobile nav for each page's nav instance
function setupNavToggle(toggleId, navId){
  const btn = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const list = nav.querySelector('.nav-list');
    if(list){
      list.classList.toggle('open');
    }
  });
}

// Add current year to footer placeholders
function setYear(spanId){
  const el = document.getElementById(spanId);
  if(el) el.textContent = new Date().getFullYear();
}

// Initialize common behavior
document.addEventListener('DOMContentLoaded', ()=>{
  setupNavToggle('nav-toggle','nav');
  setupNavToggle('nav-toggle-2','nav-2');
  setupNavToggle('nav-toggle-3','nav-3');
  setYear('year');
  setYear('year-2');
  setYear('year-3');
  // Close mobile nav when a link is clicked (improves UX)
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      const list = link.closest('.nav-list');
      if(list && list.classList.contains('open')) list.classList.remove('open');
    });
  });
});
