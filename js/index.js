$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

SignUp_Callback = function(result)
{
    if (result =='Error') //let the user know their account couldnt be created for whatever reason
    {
        window.alert("Sorry, your account could not be created. Please ensure the email you choose is not in use, if you already have an account please login instead");
    }
    else //success
    {
        window.alert("Account creation successful, you may now login.");
    }
}

SignUp = function()
{
    console.log("Signing up");
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    pwd = document.getElementById("pwd").value;
    if (firstName != "" && lastName != "" && email != "" && pwd != "")
    {
        runQuery("INSERT INTO accounts (firstName, lastName, email, pwd) VALUES ('" + firstName + "','" +lastName + "','" + email + "','" + pwd + "');", SignUp_Callback);
    }
    else
    {
        console.log("Form not filled in");
    }
}
Login_Callback = function(result)
{
	console.log("read this shit " + result);
    if (result =="Error")
    {
        window.alert("An error occured");
    }
    else
    {

		var r = JSON.parse(result);
		console.log("Login_Callback");
        if (r.length < 1)
        {
            window.alert("Incorrect email and password combo");
        }
        else
        {
            console.log("Logged in" + result);
            
            sessionStorage.setItem("accountID", r[0].id); // store the userID in this variable for use on other pages queries
            window.location.href = "/main.html";
        }
    }
}
Login = function()
{
    console.log("Logging in");
    email = document.getElementById("emailLogin").value;
    pwd = document.getElementById("pwdLogin").value;
    if (email != "" && pwd != "")
    {
        runQuery("SELECT id FROM accounts WHERE email = '" + email + "' AND pwd = '" + pwd + "';", Login_Callback);
    }
}
