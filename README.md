# leaderboard
 React + django based Solution
 
## How to Run it in dev system
* Move to the root of the folder and hit ```npm install``` and after finishing it, ```npm start``` 
** The frontend will now run on localhost:3000 and devv can view it from there
* Now, move to leaderboard/djangoapi and hit ```python manage.py migrate``` afterwards, ```python manage.py api makemigrations```
* To make a superuser as for viewing the admin panel of the backend, ```python manage.py creatersuperuser``` and make the following
* As for running the backend on live, ```python manage.py runserver``` and view it on localhost:8000/admin
