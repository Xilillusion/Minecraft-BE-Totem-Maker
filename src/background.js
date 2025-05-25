// Movable background image according to mouse position
(function() {
  const bg = document.querySelector('.bg-totem');
  function moveBg(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 100;
    const y = (e.clientY / window.innerHeight - 0.5) * 100;
    bg.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-30deg)`;
  }
  function resetBg() {
    bg.style.transform = 'translate(-50%, -50%) rotate(-30deg)';
  }
  window.addEventListener('mousemove', moveBg);
  window.addEventListener('mouseleave', resetBg);
})();