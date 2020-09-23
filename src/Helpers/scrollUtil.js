export function scrollUtil () {
  window.addEventListener('wheel', (event) => {
    const direction = event.deltaY;
    if(direction === 100) {
      console.log('###: down');
      return 1;
    } else {
      console.log('###: up');
      return -1;
    }
  })
}