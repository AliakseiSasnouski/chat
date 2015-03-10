function myFunction() {
	
	var c = document.getElementById("jumbotron");
    var d = document.createElement('textarea');
	d.className = 'sent-message-area';
	
	var text = document.getElementById('message');
	d.innerHTML = text.value;
    c.appendChild(d);
	text.value = '';
    /*var x = document.getElementsByClassName("jumbotron");
	var text = document.getElementById('message');
	//x[0].innerHTML = text.value;
	
	
	var div = document.createElement("div");
	div.className = "sent-message-area";
	//div.appendChild(document.createTextNode(a.innerHTML));
	//x.innerHTML = "";
	x.appendChild(div);
	alert(document.getElementsByClassName("jumbotron")[0].innerHTML);
	var a = document.getElementsByClassName("sent-message-area");
	a[0].innerHTML = text.value;
	text.value = '';*/
}