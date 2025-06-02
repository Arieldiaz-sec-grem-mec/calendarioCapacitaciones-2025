// Datos de los cursos
const cursos = {
    Hidraulica: {
        nombre: "Hidráulica II",
        dias: ["Lunes", "Jueves"],
        horario: "12:00 - 16:00 hs",
        inicio: "2025-06-09",
        fin: "2025-07-31",
        sedes: {
            "UTNBA": "CAMPUS UTNBA Morón 2300, Villa Soldati, CABA",
            "NITTIDA": "EMPRESA NITTIDA, José Barros Pazos 3711, CABA"
        },
        clases: [
            "2025-06-09:UTNBA", "2025-06-12:UTNBA", "2025-06-16:UTNBA", "2025-06-19:UTNBA",
            "2025-06-23:UTNBA", "2025-06-26:UTNBA", "2025-06-30:UTNBA", "2025-07-03:UTNBA",
            "2025-07-07:UTNBA", "2025-07-10:UTNBA", "2025-07-14:UTNBA", "2025-07-17:UTNBA",
            "2025-07-21:NITTIDA", "2025-07-24:NITTIDA", "2025-07-28:UTNBA", "2025-07-31:UTNBA"
        ],
        color: "#e74c3c"
    },
    Mecanica: {
        nombre: "Mecánica del Automotor I",
        dias: ["Martes", "Jueves"],
        horario: "12:00 - 16:00 hs",
        inicio: "2025-06-10",
        fin: "2025-08-05",
        sedes: {
            "UTNBA": "CAMPUS UTNBA Morón 2300, Villa Soldati, CABA",
            "ASHIRA": "EMPRESA ASHIRA, Av. Directorio 1733, CABA"
        },
        clases: [
            "2025-06-10:UTNBA", "2025-06-12:UTNBA", "2025-06-17:UTNBA", "2025-06-19:UTNBA",
            "2025-06-24:UTNBA", "2025-06-26:UTNBA", "2025-07-01:UTNBA", "2025-07-03:UTNBA",
            "2025-07-08:UTNBA", "2025-07-10:UTNBA", "2025-07-15:UTNBA", "2025-07-17:UTNBA",
            "2025-07-22:ASHIRA", "2025-07-24:ASHIRA", "2025-07-29:UTNBA", "2025-07-31:UTNBA"
        ],
        color: "#2ecc71"
    },
    Electricidad: {
        nombre: "Electricidad del Automotor I",
        dias: ["Martes", "Jueves"],
        horario: "12:00 - 16:00 hs",
        inicio: "2025-06-10",
        fin: "2025-08-05",
        sedes: {
            "UTNBA": "CAMPUS UTNBA Morón 2300, Villa Soldati, CABA",
            "URBASUR": "EMPRESA URBASUR, Calle Mirave 2844, CABA"
        },
        clases: [
            "2025-06-10:UTNBA", "2025-06-12:UTNBA", "2025-06-17:UTNBA", "2025-06-19:UTNBA",
            "2025-06-24:UTNBA", "2025-06-26:UTNBA", "2025-07-01:UTNBA", "2025-07-03:UTNBA",
            "2025-07-08:UTNBA", "2025-07-10:UTNBA", "2025-07-15:UTNBA", "2025-07-17:UTNBA",
            "2025-07-22:URBASUR", "2025-07-24:URBASUR", "2025-07-29:UTNBA", "2025-07-31:UTNBA"
        ],
        color: "#f39c12"
    }
};

// Variables globales
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedFilter = "all";

// Elementos del DOM
const calendarEl = document.getElementById('calendar');
const currentMonthEl = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const courseFilterEl = document.getElementById('course-filter');
const eventModalEl = document.getElementById('event-modal');
const modalTitleEl = document.getElementById('modal-event-title');
const eventDetailsEl = document.getElementById('event-details');
const closeModalBtn = document.getElementById('close-modal');

// Inicializar el calendario
document.addEventListener('DOMContentLoaded', function() {
    renderCalendar();
    initializeEventListeners();
});

function initializeEventListeners() {
    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });
    
    courseFilterEl.addEventListener('change', (e) => {
        selectedFilter = e.target.value;
        renderCalendar();
    });
    
    closeModalBtn.addEventListener('click', () => {
        eventModalEl.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === eventModalEl) {
            eventModalEl.style.display = 'none';
        }
    });

    // Agregar soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Deslizar a la derecha (mes anterior)
                prevMonthBtn.click();
            } else {
                // Deslizar a la izquierda (mes siguiente)
                nextMonthBtn.click();
            }
        }
    }
}

function renderCalendar() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    calendarEl.innerHTML = '';
    
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarEl.appendChild(dayHeader);
    });
    
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Días del mes anterior
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
        appendDay(prevMonthDays - i, currentMonth - 1, currentYear, false);
    }
    
    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
        appendDay(day, currentMonth, currentYear, true);
    }
    
    // Días del mes siguiente
    const lastDay = new Date(currentYear, currentMonth, daysInMonth).getDay();
    for (let day = 1; day <= (6 - lastDay); day++) {
        appendDay(day, currentMonth + 1, currentYear, false);
    }
}

function appendDay(day, month, year, isCurrentMonth) {
    let actualMonth = month;
    let actualYear = year;
    
    if (month < 0) {
        actualMonth = 11;
        actualYear--;
    } else if (month > 11) {
        actualMonth = 0;
        actualYear++;
    }
    
    const date = new Date(actualYear, actualMonth, day);
    const dateStr = formatDate(date);
    
    const dayEl = document.createElement('div');
    dayEl.className = 'calendar-day';
    
    if (!isCurrentMonth) {
        dayEl.classList.add('other-month');
    }
    
    const today = new Date();
    if (day === today.getDate() && actualMonth === today.getMonth() && actualYear === today.getFullYear()) {
        dayEl.classList.add('today');
    }
    
    const dayNumberEl = document.createElement('div');
    dayNumberEl.className = 'day-number';
    dayNumberEl.textContent = day;
    dayEl.appendChild(dayNumberEl);
    
    if (isCurrentMonth) {
        appendEvents(dayEl, dateStr);
    }
    
    calendarEl.appendChild(dayEl);
}

function appendEvents(dayEl, dateStr) {
    for (const courseKey in cursos) {
        if (selectedFilter === 'all' || selectedFilter === courseKey) {
            const course = cursos[courseKey];
            const classForDay = course.clases.find(clase => clase.startsWith(dateStr));
            
            if (classForDay) {
                const [, sedeKey] = classForDay.split(':');
                const sede = course.sedes[sedeKey] || sedeKey;
                
                const eventEl = createEventElement(course, dateStr, sede);
                dayEl.appendChild(eventEl);
            }
        }
    }
}

function createEventElement(course, dateStr, sede) {
    const eventEl = document.createElement('div');
    eventEl.className = `event ${course.nombre.split(' ')[0]}`;
    
    const eventTitleEl = document.createElement('div');
    eventTitleEl.className = 'event-title';
    eventTitleEl.textContent = course.nombre;
    
    const eventTimeEl = document.createElement('div');
    eventTimeEl.className = 'event-time';
    eventTimeEl.textContent = course.horario;
    
    eventEl.appendChild(eventTitleEl);
    eventEl.appendChild(eventTimeEl);
    
    eventEl.addEventListener('click', () => {
        showEventDetails(course, dateStr, sede);
    });
    
    return eventEl;
}

function showEventDetails(course, dateStr, sede) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    
    modalTitleEl.textContent = course.nombre;
    
    const detailsHTML = `
        <p><span class="detail-label">Fecha:</span> ${formattedDate}</p>
        <p><span class="detail-label">Horario:</span> ${course.horario}</p>
        <p><span class="detail-label">Sede:</span> ${sede}</p>
        <p><span class="detail-label">Días:</span> ${course.dias.join(' y ')}</p>
        <p><span class="detail-label">Período:</span> Del ${formatDisplayDate(course.inicio)} al ${formatDisplayDate(course.fin)}</p>
    `;
    
    eventDetailsEl.innerHTML = detailsHTML;
    eventModalEl.style.display = 'flex';
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}