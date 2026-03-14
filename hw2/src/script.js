const track = document.getElementById('track');
const handle = document.getElementById('handle');
const valueDisplay = document.getElementById('current-value');
const submitBtn = document.getElementById('submit-btn');

let isDragging = false;
let currentValue = 0;


handle.addEventListener('dragstart', (e) => e.preventDefault());


handle.addEventListener('mousedown', (e) => {
  isDragging = true;
  handle.classList.remove('falling'); 
});


document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const trackRect = track.getBoundingClientRect();
  
  
  let yPos = trackRect.bottom - e.clientY;


  if (yPos < 0) yPos = 0;
  if (yPos > trackRect.height) yPos = trackRect.height;

  let percentage = yPos / trackRect.height;
  currentValue = Math.round(percentage * 100);

  
  handle.style.bottom = `${yPos - 25}px`; 
  valueDisplay.textContent = currentValue;
});


document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    
  
    handle.classList.add('falling');
    handle.style.bottom = '0px';
    
  
    currentValue = 0;
    valueDisplay.textContent = currentValue;
  }
});


submitBtn.addEventListener('click', () => {
  if (currentValue === 0) {
    alert("The fish escaped🤣 \n tip：Hold the slider and click the button！！");
  } else {
    alert(`Congrates! U caught the fish！`);
  }
});