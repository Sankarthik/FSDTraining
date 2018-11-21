# FSD Task Manager Case Study

Application is to manage the Task with the below business functionalities.

User can view all the existing tasks and also filter the tasks in Frontend. (Backend JPA Filter is defined and not implemented on purpose)
User can add a new task with mandatory fields of Task name and Start date.
User can edit an existing task
User can end the task by clicking the End Task which will set the current date as End
Disable Behaviour
-----------------
Task row will be shown with Edit and Delete button in case of start date of the task is future.
Task row will be shown with Edit and End Task button in case of start date(task) is in active period.
All conditional buttons of Edit/End Task/Delete will be disabled/uneditable in case task is done/completed with end date set as of current date.
In case of end date is set with future date, then still Edit and End Task will be available for edit.


Technologies Used
------------------
taskmanager - Spring Boot WAR project uses MySql DB for real time and H2 embedded for testing.
This also uses Flyway db for db version management and change log.

task ui - Frontend application uses Angular 6 and latest dependencies 


To run the project
---------------------

Frontend - use 'ng serve' and the application will be available in 'http://localhost:4200' (with default port)

Backend - run the CtsTaskMgrApplication.java application.




