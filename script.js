// Schedule data with icons
const weeklySchedule = {
    Monday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:50", icon: "🛌" },
        { name: "Wash face", start: "13:50", end: "14:00", icon: "🚿" },
        { name: "Self study – Math", start: "14:00", end: "15:30", icon: "➗" },
        { name: "Break", start: "15:30", end: "15:45", icon: "☕" },
        { name: "Self study – IELTS", start: "15:45", end: "16:45", icon: "🧠" },
        { name: "Break", start: "16:45", end: "17:00", icon: "☕" },
        { name: "Boxing", start: "17:00", end: "19:00", icon: "🥊" },
        { name: "Rest", start: "19:00", end: "19:15", icon: "😌" },
        { name: "Self study – Chemistry", start: "19:15", end: "21:00", icon: "⚗️" },
        { name: "Dinner + rest", start: "21:00", end: "22:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "22:00", end: "23:00", icon: "📘" },
        { name: "Light self study – Music/Art", start: "23:00", end: "23:30", icon: "🎸" }
    ],
    Tuesday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:30", icon: "🛌" },
        { name: "Pack items", start: "13:30", end: "14:00", icon: "🎒" },
        { name: "School", start: "14:00", end: "16:30", icon: "🏫" },
        { name: "Break", start: "16:30", end: "16:45", icon: "☕" },
        { name: "Ab workout", start: "16:45", end: "17:05", icon: "💪" },
        { name: "Rest", start: "17:05", end: "17:30", icon: "😌" },
        { name: "Self study – Math", start: "17:30", end: "19:00", icon: "➗" },
        { name: "Dinner + rest", start: "19:00", end: "20:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "20:00", end: "21:30", icon: "📘" },
        { name: "Break", start: "21:30", end: "21:45", icon: "☕" },
        { name: "Self study – Physics", start: "21:45", end: "22:30", icon: "🔬" },
        { name: "Break", start: "22:30", end: "22:45", icon: "☕" },
        { name: "Self study – Informatics", start: "22:45", end: "23:30", icon: "💻" }
    ],
    Wednesday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:50", icon: "🛌" },
        { name: "Wash face", start: "13:50", end: "14:00", icon: "🚿" },
        { name: "Self study – IELTS", start: "14:00", end: "14:45", icon: "📘" },
        { name: "Break", start: "14:45", end: "15:00", icon: "☕" },
        { name: "Self study – IELTS", start: "15:00", end: "17:00", icon: "📘" },
        { name: "Boxing", start: "17:00", end: "19:00", icon: "🥊" },
        { name: "Break", start: "19:00", end: "19:15", icon: "😌" },
        { name: "Self study – Chemistry", start: "19:15", end: "21:00", icon: "⚗️" },
        { name: "Dinner", start: "21:00", end: "22:00", icon: "🍽️" },
        { name: "Self study – Math", start: "22:00", end: "23:00", icon: "➗" },
        { name: "Light self study", start: "23:00", end: "23:30", icon: "🎨" }
    ],
    Thursday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "Breakfast", start: "06:00", end: "07:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "07:00", end: "08:00", icon: "📘" },
        { name: "Break", start: "08:00", end: "08:15", icon: "☕" },
        { name: "Self study – Math", start: "08:15", end: "09:15", icon: "➗" },
        { name: "Break", start: "09:15", end: "09:30", icon: "☕" },
        { name: "Self study – Physics", start: "09:30", end: "10:30", icon: "🔬" },
        { name: "Billiards", start: "10:30", end: "11:00", icon: "🎯" },
        { name: "Rest", start: "11:00", end: "11:30", icon: "😌" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "13:00", icon: "😴" },
        { name: "School", start: "13:00", end: "14:30", icon: "🏫" },
        { name: "Break", start: "14:30", end: "15:00", icon: "☕" },
        { name: "Self study – Physics", start: "15:00", end: "16:30", icon: "🔬" },
        { name: "Break", start: "16:30", end: "16:45", icon: "☕" },
        { name: "Boxing", start: "16:45", end: "17:05", icon: "🥊" },
        { name: "Rest", start: "17:05", end: "17:30", icon: "😌" },
        { name: "Self study – Math", start: "17:30", end: "19:00", icon: "➗" },
        { name: "Self study – Informatics", start: "19:00", end: "20:00", icon: "💻" },
        { name: "Self study – IELTS", start: "20:00", end: "21:00", icon: "🧠" },
        { name: "Break", start: "21:00", end: "21:15", icon: "☕" },
        { name: "Self study – Math", start: "21:15", end: "22:15", icon: "📘" },
        { name: "Break", start: "22:15", end: "22:30", icon: "☕" },
        { name: "Light self study", start: "22:30", end: "23:00", icon: "🎸" }
    ],
    Friday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:50", icon: "🛌" },
        { name: "Wash face", start: "13:50", end: "14:00", icon: "🚿" },
        { name: "Self study – IELTS", start: "14:00", end: "14:45", icon: "📘" },
        { name: "Break", start: "14:45", end: "15:00", icon: "☕" },
        { name: "Self study – IELTS", start: "15:00", end: "17:00", icon: "📘" },
        { name: "Boxing", start: "17:00", end: "19:00", icon: "🥊" },
        { name: "Dinner", start: "19:00", end: "20:00", icon: "🍽️" },
        { name: "Self study – Math", start: "20:00", end: "21:00", icon: "➗" },
        { name: "Break", start: "21:00", end: "21:15", icon: "☕" },
        { name: "Self study – Chemistry", start: "21:15", end: "22:15", icon: "⚗️" },
        { name: "Break", start: "22:15", end: "22:30", icon: "☕" },
        { name: "Self study – Informatics", start: "22:30", end: "23:00", icon: "💻" },
        { name: "Light self study", start: "23:00", end: "23:30", icon: "🎨" }
    ],
    Saturday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:30", icon: "🛌" },
        { name: "Pack items", start: "13:30", end: "14:00", icon: "🎒" },
        { name: "School", start: "14:00", end: "15:30", icon: "🏫" },
        { name: "Self study – IELTS", start: "15:30", end: "17:00", icon: "📘" },
        { name: "Shadow boxing", start: "17:00", end: "17:15", icon: "🥊" },
        { name: "Break", start: "17:15", end: "17:30", icon: "☕" },
        { name: "Self study – Math", start: "17:30", end: "19:00", icon: "➗" },
        { name: "Self study – Physics", start: "19:00", end: "20:30", icon: "🔬" },
        { name: "Light dinner", start: "20:30", end: "21:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "21:00", end: "22:00", icon: "🧠" },
        { name: "Break", start: "22:00", end: "22:15", icon: "☕" },
        { name: "Self study – Informatics", start: "22:15", end: "23:15", icon: "💻" }
    ],
    Sunday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "Breakfast", start: "06:00", end: "07:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "07:00", end: "08:00", icon: "📘" },
        { name: "Break", start: "08:00", end: "08:15", icon: "☕" },
        { name: "Self study – Math", start: "08:15", end: "09:15", icon: "➗" },
        { name: "Break", start: "09:15", end: "09:30", icon: "☕" },
        { name: "Self study – Chemistry", start: "09:30", end: "10:30", icon: "⚗️" },
        { name: "Billiards", start: "10:30", end: "11:00", icon: "🎯" },
        { name: "Rest", start: "11:00", end: "11:30", icon: "😌" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Nap", start: "12:30", end: "14:30", icon: "🛌" },
        { name: "Light play", start: "14:30", end: "15:00", icon: "🕹️" },
        { name: "Reading", start: "15:00", end: "16:00", icon: "📖" },
        { name: "Break", start: "16:00", end: "16:15", icon: "☕" },
        { name: "Reading", start: "16:15", end: "17:00", icon: "📖" },
        { name: "Shadow boxing", start: "17:00", end: "18:00", icon: "🥊" },
        { name: "Rest and play", start: "18:00", end: "19:00", icon: "🎮" },
        { name: "Dinner", start: "19:00", end: "20:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "20:00", end: "21:00", icon: "📘" },
        { name: "Break", start: "21:00", end: "21:15", icon: "☕" },
        { name: "Self study – Informatics", start: "21:15", end: "22:15", icon: "💻" },
        { name: "Break", start: "22:15", end: "22:30", icon: "☕" },
        { name: "Light self study", start: "22:30", end: "23:00", icon: "🎸" }
    ]
};

const motivationalQuotes = [
    "Stay focused and never give up!",
    "Every step you take is progress.",
    "Your hard work will pay off.",
    "Keep pushing, you're stronger than you think!",
    "Success is the sum of small efforts.",
    "Embrace the challenge, conquer your goals!",
    "You are capable of amazing things.",
    "Consistency is the key to success.",
    "Make today count!",
    "Your future is created by what you do today."
];

// DOM elements
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const greetingElement = document.getElementById('greeting');
const motivationalQuoteElement = document.getElementById('motivational-quote');
const taskContainer = document.getElementById('task-container');
const dayButtons = document.querySelectorAll('.day-btn');
const waterBackground = document.getElementById('water-background');

// Current day and selected day
let currentDay = getCurrentDay().day;
let selectedDay = currentDay;

// Create water drops
function createWaterDrops() {
    for (let i = 0; i < 15; i++) {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.width = `${20 + Math.random() * 50}px`;
        drop.style.height = drop.style.width;
        drop.style.animationDelay = `${Math.random() * 15}s`;
        waterBackground.appendChild(drop);
    }
}

// Function to get the current day and formatted date
function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return {
        day: days[today.getDay()],
        formatted: today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    };
}

// Function to get current time in HH:MM format
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to set time-based greeting
function setTimeBasedGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }
    
    greetingElement.textContent = greeting;
}

// Function to check if current time is within task time range
function isTimeInRange(start, end, current) {
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);
    const [currentHours, currentMinutes] = current.split(':').map(Number);

    const startTime = startHours * 60 + startMinutes;
    const endTime = endHours * 60 + endMinutes;
    const currentTime = currentHours * 60 + currentMinutes;

    return currentTime >= startTime && currentTime <= endTime;
}

// Function to get a random motivational quote
function getRandomQuote() {
    const index = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[index];
}

// Function to update the UI with current time and date
function updateDateTime() {
    const { formatted } = getCurrentDay();
    const currentTime = getCurrentTime();
    
    currentDateElement.textContent = formatted;
    currentTimeElement.textContent = currentTime;
    setTimeBasedGreeting();
}

// Function to update active tasks without recreating all elements
function updateActiveTasks() {
    const currentTime = getCurrentTime();
    const taskCards = document.querySelectorAll('.task-card');
    const tasks = weeklySchedule[selectedDay] || [];
    
    taskCards.forEach((card, index) => {
        if (tasks[index]) {
            const task = tasks[index];
            if (isTimeInRange(task.start, task.end, currentTime)) {
                if (!card.classList.contains('active')) {
                    card.classList.add('active');
                }
            } else {
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                }
            }
        }
    });
}

// Function to display tasks for the selected day
function displayTasks() {
    const tasks = weeklySchedule[selectedDay] || [];
    
    // Clear the container
    taskContainer.innerHTML = '';
    
    if (tasks.length === 0) {
        taskContainer.innerHTML = '<div class="no-tasks">No tasks scheduled for today. Enjoy your free time!</div>';
        return;
    }

    const currentTime = getCurrentTime();
    
    tasks.forEach((task, index) => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        // Highlight if current time is within task's time range
        if (isTimeInRange(task.start, task.end, currentTime)) {
            taskCard.classList.add('active');
        }
        
        taskCard.innerHTML = `
            <div class="task-icon">${task.icon}</div>
            <div class="task-content">
                <h3>${task.name}</h3>
                <div class="task-time">${task.start} – ${task.end}</div>
            </div>
        `;
        
        // Add animation delay based on index
        taskCard.style.animationDelay = `${index * 0.1}s`;
        
        taskContainer.appendChild(taskCard);
    });
}

// Function to handle day selection
function handleDaySelection(day) {
    // Update selected day
    selectedDay = day;
    
    // Update active button
    dayButtons.forEach(btn => {
        if (btn.dataset.day === day) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Display tasks for selected day
    displayTasks();
}

// Initialize the app
function init() {
    // Create water drops
    createWaterDrops();
    
    // Set up day buttons
    dayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleDaySelection(btn.dataset.day);
        });
    });
    
    // Set current day as active
    const currentDayBtn = document.querySelector(`.day-btn[data-day="${currentDay}"]`);
    if (currentDayBtn) {
        currentDayBtn.classList.add('active');
    }
    
    // Initial display
    updateDateTime();
    motivationalQuoteElement.textContent = getRandomQuote();
    displayTasks();
    
    // Update time every minute
    setInterval(updateDateTime, 60000);
    
    // Update active tasks every minute without recreating elements
    setInterval(updateActiveTasks, 60000);
    
    // Update quote every 30 seconds (for demo purposes)
    setInterval(() => {
        motivationalQuoteElement.textContent = getRandomQuote();
    }, 30000);
}



// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);