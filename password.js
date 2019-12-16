function match() {

    var a = document.getElementById("id1");
    var b = document.getElementById("id2");

    if (id1.value == "" || id2.value == "")
	{
	    alert("Username Or Password Not Entered");
        window.open("login.html");
	}
    else
        window.open("user.html");




}