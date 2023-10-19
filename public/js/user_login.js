document.addEventListener('DOMContentLoaded', function() {
    // Attach an event listener to a button or form submit, which triggers the fetch request
    const submitButton = document.getElementById('loginSubmit');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission, if using a form

        fetch('http://localhost:5000/register', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data); // You can replace this with your handling logic
        })
        .catch(error => {
            // Handle errors
            console.error(error); // You can replace this with your error handling logic
        });
    });
});

