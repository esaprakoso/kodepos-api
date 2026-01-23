# API Postal Code

This is a simple API to get postal code information.

## Installation

1.  Clone this repository:
    ```bash
    git clone https://github.com/esaprakoso/kodepos-api
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  The API will be available at `http://localhost:3000`.

## API Endpoints

### Health Check

*   **`GET /health`**

    Returns a status of `200 OK` if the API is running.

### Postal Code API

*   **`GET /province`**

    Get a list of provinces.

    *   **Query Parameters:**
        *   `country` (required): The country to search for.

    *   **Example:**
        ```
        /province?country=id
        ```

*   **`GET /city`**

    Get a list of cities.

    *   **Query Parameters:**
        *   `country` (required): The country to search for.
        *   `province` (required): The province to search for.

    *   **Example:**
        ```
        /city?country=id&province=jawa%20barat
        ```

*   **`GET /district`**

    Get a list of districts.

    *   **Query Parameters:**
        *   `country` (required): The country to search for.
        *   `province` (required): The province to search for.
        *   `city` (required): The city to search for.

    *   **Example:**
        ```
        /district?country=id&province=jawa%20barat&city=bandung
        ```

*   **`GET /village`**

    Get a list of villages.

    *   **Query Parameters:**
        *   `country` (required): The country to search for.
        *   `province` (required): The province to search for.
        *   `city` (required): The city to search for.
        *   `district` (required): The district to search for.

    *   **Example:**
        ```
        /village?country=id&province=jawa%20barat&city=bandung&district=coblong
        ```

*   **`GET /postal-code`**

    Get a postal code.

    *   **Query Parameters:**
        *   `country` (required): The country to search for.
        *   `province` (required): The province to search for.
        *   `city` (required): The city to search for.
        *   `district` (required): The district to search for.
        *   `village` (required): The village to search for.

    *   **Example:**
        ```
        /postal-code?country=id&province=jawa%20barat&city=bandung&district=coblong&village=dago
        ```
