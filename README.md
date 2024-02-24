# Translation API (English to French)

This RESTful API endpoint translates English text to French using the POST method.

## Features

- Translate English text to French
- Accept JSON data in the request body
- Return translated text in JSON format
- Error handling for missing or invalid request body
- Deployable to any server or platform

## Requirements

- Node.js
- npm or yarn

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/piyush-pk/translation-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd translation-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Send a POST request to `http://localhost:3000/translate` with JSON data containing the English text to translate:

    ```json
    {
        "text": "Hello, how are you?"
    }
    ```

3. Receive the translated text in the response:

    ```json
    {
        "translation": "Bonjour, comment ça va?"
    }
    ```

## API Endpoint

- **Endpoint**: `/translate`
- **Method**: POST

## Error Handling

- If the request body is missing or invalid, the API responds with a 400 status code and an error message.
- If there is an error during translation, the API responds with a 500 status code and an error message.

## Deployment

You can deploy this API to any server or platform of your choice.

## Technologies Used

- Node.js
- Express.js
- Google Translate API
- Validator
