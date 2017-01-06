view_callback = function(result)
{
    console.log("view callback" + result);
    var r = JSON.parse(result);
    document.getElementById("title").value = r[0].title;
    document.getElementById("description").value = r[0].description;
    document.getElementById("email").value = r[0].buyingForEmail;
}

runQuery("SELECT e.title, e.description, p.buyingForEmail FROM accounts a INNER JOIN exchanges e INNER JOIN participants p ON a.email = p.email AND p.exchangeID = e.exchangeID WHERE a.id = " + sessionStorage.getItem("accountID") + " AND e.exchangeID = " + sessionStorage.getItem("exchangeID") + ";", view_callback);
