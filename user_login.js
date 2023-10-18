document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm'); // Replace with your form's actual ID

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Send a POST request to the server
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.status);
            if (!response.ok) {
                
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((result) => {
            // Handle the response from the server
            console.log(result);
        })
        .catch((error) => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
    });
});
