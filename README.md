Jarurat Health Care Services
Jarurat Health Care Services is a web application that allows users to add, edit, update, and delete healthcare services. The website is built using React for the frontend functionality and Tailwind CSS along with some custom CSS for styling.

Features
Add Services: Users can input service details like name, description, and price to add a service to the list.
Edit Services: Users can edit any existing service.
Delete Services: Users can delete any service from the list.
Persisted Data: All services are stored in localStorage, ensuring that data remains available even after page reloads.
Dynamic Heading Animation: A dynamic typed heading is displayed using Typed.js, creating an engaging user experience.

Tech Stack
React.js: The web application is built using React for managing state and UI.
Tailwind CSS: Tailwind CSS is used for styling, providing a mobile-friendly, responsive design.
Custom CSS: Custom styles are added to enhance visual elements.
Typed.js: Implemented for dynamic, animated text display on the homepage.

Installation & Setup
1. Clone the repository to your local machine.
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install the required dependencies.
npm install

3. Run the app locally.
npm start

The app will start running at http://localhost:3000.

Usage
1. Add a service by providing a name, description, and price.
2. Services will be listed, where you can edit or delete them as needed.
3. The data will be saved locally using the browser’s localStorage.

Components

1. App.js
Main component responsible for managing the state of services.
Handles adding, updating, deleting, and loading services from localStorage.

2. ServiceForm.js
Form component for adding and editing services.
Includes validation to ensure all fields are filled.
3. ServiceList.js
Displays the list of all added services.
Contains functionality for editing or deleting services.
4. TypedHeading.js
Handles the dynamic display of text on the homepage using Typed.js.
5. ServiceItem.js
Displays individual service information in the list and provides edit/delete options.
LocalStorage Integration
The services data is stored in localStorage so that it persists even after the page is refreshed.

On component mount, localStorage is checked for existing services.
When services are added, updated, or deleted, the data is saved back to localStorage.
Styling
The project uses Tailwind CSS for a responsive design. Some custom CSS is included for additional effects such as shadows, gradients, and hover effects.

Button Gradient Hover Effect with the .btn-grad class.
Outer Shadow for adding depth to containers and elements with the .outer-shadow class.