document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the resume button
    document.getElementById('resumeButton').addEventListener('click', openResume);

    // Function to open the resume in a new tab/window
    function openResume() {
        window.open('/Users/shireeshaperamasani/Desktop/html5up-dimension/Portfolio.pdf', '_blank');
    }
});
