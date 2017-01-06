var callback = null;

function runQuery(str, cb)
{
    console.log("SQL: " + str);
    callback = cb
    xhttp = new XMLHttpRequest
    xhttp.onreadystatechange = function()
    {
        console.log("Ready State: ", this.readyState, " Status: ", this.status);
        if (this.readyState == 4 && this.status == 200) {
            console.log("Calling back");
            callback(this.responseText);
        }
        else if (this.readyState == 4 && this.status == 0)
        {
            callback(this.responseText);
        }
    };
    xhttp.open("GET", "dbConnection.php?q="+str, true);
    xhttp.send();
    console.log("Query sent");
}

//RunQuery("SELECT * FROM accounts;");

