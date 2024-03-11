export const animateHeroText = () => {
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);

  const spansSlow = document.querySelectorAll<HTMLElement>('.spanSlow');
  const spansFast = document.querySelectorAll<HTMLElement>('.spanFast');

  let width = window.innerWidth;

  function handleMouseMove(e:MouseEvent) {
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    })
  }
  
  function handleWindowResize() {
    width = window.innerWidth;
  }
}