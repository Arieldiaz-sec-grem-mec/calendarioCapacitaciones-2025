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
            "ASHIRA": "EMPRESA ASHIRA, , Lafayette 1751, CABA"
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
    },
    Neumatica: {
        nombre: "Neumática II",
        dias: ["Martes", "Viernes"],
        horario: "12:00 - 16:00 hs",
        inicio: "2025-06-10",
        fin: "2025-08-08",
        sedes: {
            "UTNBA": "CAMPUS UTNBA Morón 2300, Villa Soldati, CABA",
            "CLIBA": "EMPRESA CLIBA, Av. Sarmiento 3800, Palermo, CABA"
        },
        clases: [
            "2025-06-10:UTNBA", "2025-06-13:UTNBA", "2025-06-17:UTNBA", "2025-06-20:UTNBA",
            "2025-06-24:UTNBA", "2025-06-27:UTNBA", "2025-07-01:UTNBA", "2025-07-04:UTNBA",
            "2025-07-08:UTNBA", "2025-07-11:UTNBA", "2025-07-15:UTNBA", "2025-07-18:UTNBA",
            "2025-07-22:CLIBA", "2025-07-25:CLIBA", "2025-07-29:UTNBA", "2025-08-01:UTNBA",
            "2025-08-05:UTNBA", "2025-08-08:UTNBA"
        ],
        color: "#9b59b6"
    },
    Inyeccion: {
        nombre: "Inyección Electrónica I",
        dias: ["Miércoles", "Viernes"],
        horario: "12:00 - 16:00 hs",
        inicio: "2025-06-11",
        fin: "2025-08-08",
        sedes: {
            "UTNBA": "CAMPUS UTNBA Morón 2300, Villa Soldati, CABA",
            "CLIBA": "EMPRESA CLIBA, Av. Sarmiento 3800, Palermo, CABA"
        },
        clases: [
            "2025-06-11:UTNBA", "2025-06-13:UTNBA", "2025-06-18:UTNBA", "2025-06-20:UTNBA",
            "2025-06-25:UTNBA", "2025-06-27:UTNBA", "2025-07-02:UTNBA", "2025-07-04:UTNBA",
            "2025-07-09:UTNBA", "2025-07-11:UTNBA", "2025-07-16:UTNBA", "2025-07-18:UTNBA",
            "2025-07-23:CLIBA", "2025-07-25:CLIBA", "2025-07-30:UTNBA", "2025-08-01:UTNBA",
            "2025-08-06:UTNBA", "2025-08-08:UTNBA"
        ],
        color: "#1abc9c"
    }
};

const MIN_DATE = new Date(2025, 5, 1); // Junio 2025
const MAX_DATE = new Date(2025, 7, 31); // Agosto 2025

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
    // Establecer fecha inicial en Junio 2025
    currentMonth = 5; // Junio (0-based)
    currentYear = 2025;
    renderCalendar();
    initializeEventListeners();
});

function initializeEventListeners() {
    prevMonthBtn.addEventListener('click', () => {
        const newDate = new Date(currentYear, currentMonth - 1, 1);
        if (newDate >= MIN_DATE) {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        }
    });
    
    nextMonthBtn.addEventListener('click', () => {
        const newDate = new Date(currentYear, currentMonth + 1, 1);
        if (newDate <= MAX_DATE) {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        }
    });
    
    courseFilterEl.addEventListener('change', (e) => {
        selectedFilter = e.target.value;
        renderCalendar();
    });
    
    closeModalBtn.addEventListener('click', () => {
        eventModalEl.style.display = 'none';
    });
}

function renderCalendar() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Deshabilitar botones según límites de fecha
    const prevDate = new Date(currentYear, currentMonth - 1, 1);
    const nextDate = new Date(currentYear, currentMonth + 1, 1);
    prevMonthBtn.disabled = prevDate < MIN_DATE;
    nextMonthBtn.disabled = nextDate > MAX_DATE;
    
    calendarEl.innerHTML = '';
    
    // Agregar encabezados de días
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarEl.appendChild(dayHeader);
    });
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0);
    
    // Días del mes anterior
    for (let i = firstDay.getDay() - 1; i >= 0; i--) {
        appendDay(prevMonthLastDay.getDate() - i, currentMonth - 1, currentYear, false);
    }
    
    // Días del mes actual
    for (let day = 1; day <= lastDay.getDate(); day++) {
        appendDay(day, currentMonth, currentYear, true);
    }
    
    // Días del mes siguiente
    const remainingDays = 42 - calendarEl.children.length;
    for (let day = 1; day <= remainingDays; day++) {
        appendDay(day, currentMonth + 1, currentYear, false);
    }
}

function appendDay(day, month, year, isCurrentMonth) {
    const dayDiv = document.createElement('div');
    dayDiv.className = `calendar-day${isCurrentMonth ? '' : ' other-month'}`;
    
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayDiv.appendChild(dayNumber);
    
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // Agregar eventos del día
    Object.entries(cursos).forEach(([courseType, courseData]) => {
        if (selectedFilter === 'all' || selectedFilter === courseType) {
            courseData.clases.forEach(clase => {
                const [classDate, sede] = clase.split(':');
                if (classDate === date) {
                    const eventDiv = createEventElement(courseType, courseData, sede);
                    dayDiv.appendChild(eventDiv);
                }
            });
        }
    });
    
    calendarEl.appendChild(dayDiv);
}

function createEventElement(courseType, courseData, sede) {
    const eventDiv = document.createElement('div');
    eventDiv.className = `event ${courseType}`;
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'event-title';
    titleDiv.textContent = courseData.nombre;
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'event-time';
    timeDiv.textContent = courseData.horario;
    
    eventDiv.appendChild(titleDiv);
    eventDiv.appendChild(timeDiv);
    
    eventDiv.addEventListener('click', () => showEventDetails(courseData, sede));
    
    return eventDiv;
}

function showEventDetails(courseData, sede) {
    modalTitleEl.textContent = courseData.nombre;
    
    const details = `
        <p><span class="detail-label">Horario:</span> ${courseData.horario}</p>
        <p><span class="detail-label">Sede:</span> ${courseData.sedes[sede]}</p>
        <p><span class="detail-label">Días:</span> ${courseData.dias.join(' y ')}</p>
        <p><span class="detail-label">Duración:</span> ${courseData.inicio} al ${courseData.fin}</p>
    `;
    
    eventDetailsEl.innerHTML = details;
    eventModalEl.style.display = 'flex';
}
