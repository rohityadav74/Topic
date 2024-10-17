window.addEventListener('load', function() {
    // Set the input date to today's date and make it readonly
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
});

document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherName = document.getElementById('teacherName').value;
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const date = document.getElementById('date').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    if (teacherName && subject && topic && date === new Date().toISOString().split('T')[0] && rating && review) {
        const logList = document.getElementById('logList');

        // Create a new list item for each log entry
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Date:</strong> ${date} <br>
            <strong>Teacher:</strong> ${teacherName} <br>
            <strong>Subject:</strong> ${subject} <br>
            <strong>Topic:</strong> ${topic} <br>
            <strong>Rating:</strong> ${rating}/5 <br>
            <strong>Review:</strong> ${review}
        `;
        logList.appendChild(listItem);  // Append the new entry without clearing the previous entries

        // Clear the form fields
        document.getElementById('teacherName').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('topic').value = '';
        document.getElementById('rating').value = '';
        document.getElementById('review').value = '';
    } else {
        alert("Please fill out the form correctly and only update for today's date.");
    }
});
