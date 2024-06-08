document.addEventListener('DOMContentLoaded', function () {
    const albumSlide = document.querySelector('.album-slide');
    for (let i = 1; i <= 7; i++) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.style.width = '200px'; // Thiết lập kích thước ảnh
        img.src = `img/img (${i}).jpg`;
        img.alt = `Image ${i}`;
        div.appendChild(img); // Thêm ảnh vào div
        albumSlide.appendChild(div); // Thêm div vào album slide
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.image-gallery');
    for (let i = 1; i <= 30; i++) {
        if ((i >= 1 && i <= 8) || (i === 28) || (i === 30)) {
            continue;
        }

        const img = document.createElement('img');
        img.src = `img/img (${i}).jpg`;
        img.alt = `Image ${i}`;
        img.classList.add('gallery-image');
        galleryContainer.appendChild(img);
    }
});

// Function to get the names of the days in a week
function getDayNames() {
    return ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
}

// Function to get the number of days in a month
function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

// Function to generate the calendar
function generateCalendar(month, year) {
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");
    const dayNamesElement = document.getElementById("day-names");
    const daysElement = document.getElementById("days");

    // Clear previous calendar
    monthElement.textContent = "";
    yearElement.textContent = "";
    dayNamesElement.innerHTML = "";
    daysElement.innerHTML = "";

    // Set month and year
    monthElement.textContent = "Tháng " + (month + 1);
    yearElement.textContent = year;

    // Generate day names
    const dayNames = getDayNames();
    dayNames.forEach(function (dayName) {
        const dayNameElement = document.createElement("div");
        dayNameElement.classList.add("day-name");
        dayNameElement.textContent = dayName;
        dayNamesElement.appendChild(dayNameElement);
    });

    // Generate days
    const totalDays = getDaysInMonth(month, year);
    for (let i = 1; i <= totalDays; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = i;
        // Highlight the number 9
        if (i === 9) {
            dayElement.classList.add("special");
        }
        daysElement.appendChild(dayElement);
    }
}

// Get current date
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Generate calendar for current month
generateCalendar(currentMonth, currentYear);

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
    });
});
