let percentage = parseInt(prompt('What is the progress?'));

if(isNaN(percentage) || percentage < 0 || percentage > 100){
    alert('Please enter a valid percentage')
    location.reload(); }

let color;
if (percentage <= 20)
    color = 'darkred';
else if (percentage <= 50)
    color = 'orange';
else if (percentage <= 80)
    color = 'yellow';
else 
    color = 'green';

let progressBar = document.getElementById('bar');
progressBar.style.backgroundColor = color;
progressBar.style.height = `${percentage}%`;

let percent = document.getElementById('percent');

percent.innerText = `${percentage}%`;
percent.style.color = color;

const progressBarContainer = document.querySelector('.progress-bar-container');

progressBarContainer.addEventListener('mousemove', (event) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top; 
    percent.style.left = `${x}px`;
    percent.style.top = `${y - 20}px`;
});

progressBarContainer.addEventListener('mouseleave', () => {
    percent.style.display = 'none';
});

progressBarContainer.addEventListener('mouseenter', () => {
    percent.style.display = 'block';
});
