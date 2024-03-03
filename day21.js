// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Code to execute after the page loads
    // Example: Fetch course data from an API and display it
    fetchCourses();
});

function fetchCourses() {
    // Simulate fetching course data (replace with actual API calls)
    const courses = [
        { id: 1, title: 'Introduction to Web Development' },
        { id: 2, title: 'JavaScript Fundamentals' },
        // Add more courses...
    ];

    // Display courses on the page
    const courseList = document.querySelector('#course-list');
    courses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = course.title;
        courseList.appendChild(listItem);
    });
}
