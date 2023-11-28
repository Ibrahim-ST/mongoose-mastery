# [Mongoose Mastery with TypeScript and Express API Documentation](https://mongoose-mastery-hazel.vercel.app/)


Welcome to the Mongoose Mastery API documentation! [Server Link](https://mongoose-mastery-hazel.vercel.app/)
## Folder Structure

- `/src`: Contains the source code.
- `/dist`: Contains the compiled JavaScript code.
## Running the Project

- **Development Mode:**

    ```bash
    npm run start:dev
    ```

- **Production Mode:**

    ```bash
    npm run start:prod
    ```

- **Typescript Compiler:**

    ```bash
    npm run build
    ```
Below, you'll find details about available endpoints and their usage.

- POST: https://mongoose-mastery-hazel.vercel.app/api/users : to create new user.
- GET: https://mongoose-mastery-hazel.vercel.app/api/users : to get all users.
- GET: https://mongoose-mastery-hazel.vercel.app/api/users/1234567 : to get user having 1234567 userId.
- PUT: https://mongoose-mastery-hazel.vercel.app/api/users/1234567 : to update data of user having 1234567 userId.
- DELETE: https://mongoose-mastery-hazel.vercel.app/api/users/1234567 : to delete user having 1234567 userId.
- PUT: https://mongoose-mastery-hazel.vercel.app/api/users/1234567/orders : to add new order in user having 1234567 userId.
- GET: https://mongoose-mastery-hazel.vercel.app/api/users/1234567/orders : to get all order in user having 1234567 userId.
- GET: https://mongoose-mastery-hazel.vercel.app/api/users/1234567/orders/total-price : to get total price of all order in user having 1234567 userId.




## Note
- .env file is excluded from git. Inside src folder, index.tx file can be found where environment variables name are stored and can be used to run the project.
