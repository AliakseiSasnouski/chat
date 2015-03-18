function myFunction() {
	
	var c = document.getElementById("jumbotron");
    var textArea = document.createElement('div');
	 
	textArea.id = 'sent-message-area';
	var text = document.getElementById('message');
	var name = document.getElementById('chat-name');
	textArea.innerHTML = name.value + ": " + text.value;
    c.appendChild(textArea);
	text.value = '';
	//NewTeg();
}

function NewTeg() {
    var div=document.getElementById('sent-message-area');
    var button=document.createElement("button");
    
    button.type = "button";
    button.className = "btn btn-default navbar-btn";
    button.value = "Delete";
   
    div.appendChild(button);
}


function changeName(){
	var name = document.getElementById('input-name');
	var text = name.value;
	name.value = '';
	var changeName = document.getElementById('chat-name');
	changeName.innerHTML = text;
	
}

var theMessage = function(text, name) {
	return {
		description: text,
		name: text,
		id: uniqueId()
	};
};

var messageList = [];

function run(){
	var appContainer = document.getElementsByClassName('jumbotron')[0];

	var allMessage = restore() || [ theMessage('Сделать разметку', name),
			theMessage('Выучить JavaScript', name),
			theMessage('Написать чат !', name)
		];

	createAllMessage(allMessage);
	output(messageList);
	updateCounter();
}

function createAllMessage(allMessage) {
	for(var i = 0; i < allMessage.length; i++)
		addMessage(allMessage[i]);
}

function addMessage(message) {
	var item = createItem(message);
	var items = document.getElementById("jumbotron");[0];

	taskList.push(message);
	items.appendChild(item);
}

function createItem(task){
		
	var changeName = document.getElementById('chat-name');
	changeName.innerHTML = GLOBAL;
	debugger;
	var temp = document.createElement('div');
	var htmlAsText = '<div class="item strikeout" data-task-id="идентификатор">'+
	'<input type="checkbox">описание задачи</div>';

	temp.innerHTML = htmlAsText;
	updateItem(temp.firstChild, task);

	return temp.firstChild;
}

function output(value){
	var output = document.getElementById('output');

	output.innerText = "var taskList = " + JSON.stringify(value, null, 2) + ";";
}

function restore() {
	if(typeof(Storage) == "undefined") {
		alert('localStorage is not accessible');
		return;
	}

	var item = localStorage.getItem("TODOs taskList");

	return item && JSON.parse(item);
}