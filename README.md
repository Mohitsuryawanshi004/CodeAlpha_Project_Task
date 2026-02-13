This project is a Simple URL Shortener built using Node.js, MongoDB, and React.js.

First, I created the backend to handle all server-side logic.
The backend receives a long URL from the user, generates a short code for it, and stores both the original URL and the short URL in the database (MongoDB).

Then, I built the frontend using React.js.
On the frontend page, the user can enter any long URL in the input box and click the Shorten button.

🔄 Working Flow:

User enters a long URL on the frontend.

Frontend sends this URL to the backend using an API request.

Backend generates a short URL for the given long URL.

Backend saves the long URL and short URL in the database.

Backend sends the short URL back to the frontend.

Frontend displays the short URL to the user.

When the user opens the short URL, it redirects to the original long URL.


<img width="1024" height="768" alt="Screenshot (57)" src="https://github.com/user-attachments/assets/e92e667c-3144-4fdd-a7ae-c8e0fa68fb6e" />
<img width="1024" height="768" alt="Screenshot (58)" src="https://github.com/user-attachments/assets/848f8551-e18e-42dd-912e-5cbe254295d7" />
<img width="1024" height="768" alt="Screenshot (60)" src="https://github.com/user-attachments/assets/a493e4da-9497-43e3-be87-5c09e7bb21b9" />
<img width="1024" height="768" alt="Screenshot (61)" src="https://github.com/user-attachments/assets/fc5baed1-d526-4771-96d4-4e7d4729deaa" />
<img width="1024" height="768" alt="Screenshot (62)" src="https://github.com/user-attachments/assets/8af0e0ce-4f6a-49d5-a3a3-5ce41d786087" />
<img width="1024" height="768" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/7a341e0b-b87c-4fa3-b420-f1df2eae8926" />







