Dear user,

This is our term project for CP 317 - Software Engineering.

We had initially planned on using only JavaScript and MySQL so we would not need a PHP server, and anyone with the files would be able to run it, however this was not possible as JS does not have its own connector for MySQL. As a workaround we built our own connector using AJAX and PHP. As a result our implementation requires an Apache server to run on.

Our Apache server is located at http://xx.xx.xxx.xxx/, if you wish to go there please email me. We have included all the files in this archive, if you want to set up your own Apache server for further testing it should just be a matter of copying this directory into the www folder Apache provides, and then creating a MySQL database called SecretSanta, running the 3 create table queries in the CreateTables.sql file, and updating the username and password variables in the 2 included PHP files, in order for the app to be able to communicate with the database. 

Max Besco and Ryan Shanks
