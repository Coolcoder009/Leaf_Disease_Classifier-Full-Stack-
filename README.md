# Leaf_Disease_Classifier-Full-Stack

Leaf Disease Classifier is a full-stack web application designed to classify leaf diseases using a trained machine learning model. The application includes a user-friendly frontend interface and a FastAPI backend for handling requests and model predictions.
<br><br><br>
![UI Path](https://github.com/Coolcoder009/Leaf_Disease_Classifier-Full-Stack-/blob/main/Screenshot%202024-04-18%20174742.jpg?raw=true) <br>

## This is the link for the trained model <br>
https://drive.google.com/file/d/1JQn0nysY74PV5mkrrOgRSAPYL8jRE4XS/view?usp=sharing
<br>

## Installation

1. Clone the repository 
```bash 
git clone <repository-url>
cd <repository-directory>
```

2. To install the required dependencies, run the following command:
```bash
pip install -r requirements.txt
```

3. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
```

## How It Works
### Frontend
The frontend of the application is built using HTML, CSS, and JavaScript. It provides a simple user interface where users can:

<ul>
<li>Upload an image of a leaf.</li>
<li>View the predicted disease classification.</li>
<li>See additional information about the predicted disease.</li>
</ul>

### Backend
The backend of the application is powered by FastAPI. It handles the following tasks:

<ul>
<li><strong>Model Loading:</strong> The trained model is loaded when the application starts.</li>
<li><strong>Image Processing:</strong> Uploaded images are preprocessed to ensure they are suitable for model input.</li>
<li><strong>Disease Classification:</strong> The preprocessed images are passed to the model for prediction, and the results are sent back to the frontend.</li>
</ul>

### Running the Application
To start the application, run:

```bash
uvicorn main:app --reload
```
This will start the FastAPI server, and the application will be accessible at http://localhost:8000.
### Example Usage
To use the Leaf Disease Classifier, follow these steps:

Upload an Image: Click on the "Upload Image" button and select an image of a leaf.
View the Prediction: The application will display the predicted disease classification and provide additional information about the disease.

### File Handling
The application allows users to upload leaf images directly through the interface. The uploaded file is temporarily saved, processed for classification, and then deleted after processing.

### Results
The results of the disease classification are displayed on the web interface, providing the user with information about the detected leaf disease.
