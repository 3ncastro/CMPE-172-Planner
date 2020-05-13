# Monthly Planner
## San Jose State University
## CMPE 172/ Spring 2020
## Team-Nicholas Castro and Justin Magadia
## Project Introduction
##### Current Application
Currently the app isn't fully done and at the place we hoped it would be. When you first enter the app you will see a login page, this is a placeholder page for if we had time to implement a login for the app. Any email and password will allow the user to login and see the calendar page. The user would be able to select any month either by clicking the arrows on the top right and top left of the initial calendar screen, or by clicking on the current month in the top left corner to bring up the select month feature. To change the year the user can either scroll through all the months using the arrows on the top left and top right until the end of the year is reached and the next one pops up, or by clicking on the current month and then using the arrows on that screen to change the year directly. Once both the desired year and month are selected the user can select which day they would like to add an event to by clicking on the number for that day. This brings up the add event form which can then be filled out and submitted. Currently the submit button only goes to local storage. After submitting the user can scroll to the bottom of the calendar and click the "see events" button this will bring up a form that is currently filled with hardcoded values but shows how the events would be displayed. 
##### Intended Application
We intended for the app to have a login page to remeber each users info and keep it private. After a simple login the user would be able to select any month, year and day the same way as in the current application. Once the day is selected and the form is submitted this info would go to an RDS database where the values are stored under that users info. Once stored the user can see all saved events by clicking the "see events" button at the bottomo of the calendar. This will get the values from the database and display them in a form on screen much like the values in the current application. 

## Sample Demo Screenshots
##### Login Page
![](images/LoginPage.PNG)
##### Calendar Page
![](images/Calendar%20Page.PNG)
##### Select Month
![](images/Select%20Month.PNG)
##### Add Event
![](images/Add%20Event.PNG)
##### See Events
![](images/See%20Events.PNG)

## Setup Pre-requisites
This project only runs locally so these are the pre-requisites to do so.<br />
You will need to have NodeJS installed on the system.<br />
Once this is done locate the directory in which the project is stored.<br />
From within this directory run command prompt and type the command "npm start".<br />
This will allow you to view our app in (http://localhost:3000) and view it in the browser.<br />


## Class and Sequence Diagrams
<img src="images/classDiagram.JPG"> </div>
<img src="images/sequenceDiagram.JPG"> </div>

## Mid tier APIS
This tier refers to the processing between a user's computer and a database server, usually taking place in an application
server. Had the application be built and ran as expected, the middle tier API would have utilized Springboot as the program 
creates the necessary restful API for the project. Docker would contain the project into a jar file for Amazon Elastic Beanstalk to deploy.

## UI data Transport
The server file acts as the transport layer. The MySQL to RDS connection acts as the TCP connection between the database server and
the program. However due to difficulties in the programming especially with the submit button, the data would not transfer to the
database server.
