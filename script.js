document.getElementById('file-upload').addEventListener('click', async function() {
    const inputElement = document.getElementById('file-input');
    if (inputElement.files.length === 0) {
        alert('Please select an image file first.');
        return;
    }

    const file = inputElement.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // Assuming you have an upload and predict endpoint
    try {
        const response = await fetch('http://localhost:8000/predict/', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Server responded with a status of ${response.status}`);
        }

        const result = await response.json();

        // Display the prediction result in the prediction container
        document.getElementById('prediction-output').textContent = `${result.class}`;

    } catch (error) {
        console.error("Failed to send data to the backend:", error);
        alert("Failed to send data to the backend. Please check the console for more details.");
    }
});

// This function is to simulate clicking the hidden file input when the custom button is clicked
document.getElementById('customButton').addEventListener('click', function() {
    document.getElementById('file-input').click(); // Adjust the ID if necessary
});





