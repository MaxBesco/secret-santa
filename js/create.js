drawFromHat = function(num)
{
    var assigned = [];
    var result = []; // matchups. Email[i] will buy a present for the email with the index result[i]
    for (i =0; i < num; i++)
    {
        assigned.push(false); // init array assigned to false for each of the num elements
    }
    
    for (i=0; i < num; i++)
    {
        var rand
        do
        {
            rand = Math.floor(Math.random() * num);
        }while(assigned[rand] || rand == i); //generate a random number that hasnt already been generated and isnt equal to i
        assigned[rand] = true;
        result.push(rand);
    }
    return result;
}

createExchange = function()
{
    // get all the data from the form
    var title, desc;
    var emails = [];
    title = document.getElementById("title").value
    desc = document.getElementById("description").value
    
    for (i =1; i <= emailCount; i++)
    {
        emails.push(document.getElementById("email" + i).value); //get each email and store in an array
    }
    
    var matchups = drawFromHat(emailCount); // give each email a person to buy for, ensuring no one has themself and everyone gets a gift
    var arr;
    arr = [sessionStorage.getItem("accountID"),title, desc, emails.length];
    for (i=0; i < emails.length; i++)
        arr.push(emails[i]);
    for (i=0; i < emails.length; i++)
        arr.push(emails[matchups[i]]);
        
    str = JSON.stringify(arr);
    console.log("CreateExchange stringify" + str);
    xhttpr = new XMLHttpRequest
    xhttpr.onreadystatechange = function()
    {
        console.log("Create Exchange Ready State: ", this.readyState, " Status: ", this.status);
        if (this.readyState == 4 && this.status == 200) {
            console.log (this.responseText);
            window.location.href = "/main.html";
        }
    };
    xhttpr.open("GET", "addExchange.php?q="+str, true);
    xhttpr.send();
    console.log("Query sent");
}
var emailCount = 1
addEmail = function()
{
    emailCount += 1;
    container = document.getElementById("emails");
    var newEmail = document.createElement("input");
    newEmail.type = "text";
    newEmail.id = "email" + emailCount;
    container.appendChild(newEmail);
}
