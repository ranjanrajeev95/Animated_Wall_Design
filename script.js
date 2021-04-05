document.body.addEventListener('click', () => {
  // yes
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    
    setTimeout(() => {
      el.style.animation = null;
    }, 0);
  })
})