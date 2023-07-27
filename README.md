# Technical_test_Reecall

This project is an API developed in TypeScript for interacting with contacts, tickets, companies and transactions in a HubSpot account. The API exposes various endpoints to perform the various operations.
## Implemented features
Here's a list of the features I have implemented in this project:

1. Contact management :
   - Contact list retrieval
   - Retrieve a specific contact by ID
   - Create a new contact
   - Update an existing contact
   - Delete a contact

2. Company management :
   - Company list retrieval
   - Retrieve a specific company by its ID
   - Create a new company
   - Update an existing company
   - Delete a company

3. Ticket management :
   - Ticket list retrieval
   - Retrieve a specific ticket by its ID
   - Create a new ticket
   - Update an existing ticket
   - Delete a ticket

4. Transaction management :
   - Transaction list retrieval
   - Retrieve a specific transaction by its ID
   - Create a new transaction
   - Update an existing transaction
   - Delete a transaction
## Architecture of the Project
The project is divided into several parts.
- `src/contacts`: Contains all contact functionalities.
- `src/companies` : Contains all functionalities for companies.
- `src/tickets` : Contains all functionalities for tickets.
- `src/transactions` : Contains all transaction functionalities.
- `tsconfig.json`: This is the essential configuration file for TypeScript projects.
- `package.json`: File used to define project metadata and dependencies, as well as to describe associated runtime scripts.
- `package-lock.json:` Automatically generated file which records the exact versions of installed dependencies to ensure reproducible installations.
- `node_modules`: Directory where external dependencies downloaded from the Node.js package manager (NPM) are stored for use in the project.
## Installation and operation

1. Clone the repository from GitHub :

    git clone git@github.com:Patricklevyy/Technical_test_Reecall.git

2. Make sure you have Node.js and NPM installed on your system

3. Install the project's dependencies by running the following command:

    - npm install axios
    - npm init -y
    - npm install typescript ts-node express axios @types/express @types/axios
    - npm install express
    - npm install
    - npm install dotenv --save-dev


4. Configure your HubSpot API key in the .env file

5. Launch the API with the following command:

    npx ts-node src/index.ts

6. The API can be accessed at: http://localhost:3000 .
