logOut = function()
{
    sessionStorage.removeItem("accountID"); // delete the makeshift cookie
    window.location.href="/index.html"
}  

gotoExchange = function(id)
{
    sessionStorage.setItem("exchangeID", id);
    window.location.href = "/view.html";
}

viewExchangeList_callback = function(result)
{
    var html = "";
    console.log("View Exchange List Callback, Result: ", result);
    var r = JSON.parse(result);
    
    for (i=0; i < r.length; i++)
    {
        html += "<input type='button' onclick='gotoExchange("+r[i].exchangeID+")' value='"+r[i].title+"'>";
    }
    if (r.length ==0)
    {
        html = "Sorry, you are not currently in any gift exchanges. You can create one by clicking the 'Create Exchange' button";
    }
    
    document.getElementById("exchanges").innerHTML = html;
}

showExchange = function(exchangeID)
{
    
}

runQuery("SELECT e.exchangeID, title FROM exchanges as e INNER JOIN accounts as a INNER JOIN participants as p "
    + "ON p.exchangeID = e.exchangeID AND a.email = p.email WHERE a.id = "
    + sessionStorage.getItem("accountID"), viewExchangeList_callback); 
