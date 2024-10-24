const startBtn = document.getElementById('startBtn');
const minutesInput = document.getElementById('minutesInput');
const timerDisplay = document.getElementById('timerDisplay');
const alarmSound = document.getElementById('alarmSound'); // Audio elementi

let countdown;

startBtn.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value);
    
    if (isNaN(minutes) || minutes <= 0) {
        alert('Iltimos, to‘g‘ri raqam kiriting!');
        return;
    }
    
    clearInterval(countdown); 
    
    const now = Date.now();
    const then = now + minutes * 60000; 
    displayTimeLeft(minutes * 60);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if (secondsLeft < 0) {
            clearInterval(countdown);
            alarmSound.play(); 
            return;
        }
        
        displayTimeLeft(secondsLeft);
    }, 1000);
});

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}
