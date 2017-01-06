Dear Dr. Hoang,

Here is our term project for CP 317 - Software Engineering.

We had initially planned on using only JavaScript and MySQL so we would not need a PHP server, and anyone with the files would be able to run it, however this was not possible as JS does not have its own connector for MySQL. As a workaround we built our own connector using AJAX and PHP. As a result our implementation requires an Apache server to run on.

Our Apache server is located at http://45.62.246.106/, if you go there in your browser you will be able to use the app. We have included all the files in this archive as well for your review, if you want to set up your own Apache server for further testing it should just be a matter of copying this directory into the www folder Apache provides, and then creating a MySQL database called SecretSanta, running the 3 create table queries in the CreateTables.sql file, and updating the username and password variables in the 2 included PHP files, in order for the app to be able to communicate with the database. In case of any difficulty, I am available at shan3960@mylaurier.ca and happy to help.

Ryan Shanks and Max Besco