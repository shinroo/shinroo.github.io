document.getElementById("sendEmail").onclick = function () { 
	console.log("Name:" + document.getElementById('form_name').value);
	console.log("Surname:" + document.getElementById('form_lastname').value);
	console.log("Email:" + document.getElementById('form_email').value);
	console.log("Message:" + document.getElementById('form_message').value);
	
	$.post("/send",
    {
        name: document.getElementById('form_name').value,
        surname: document.getElementById('form_lastname').value,
		email: document.getElementById('form_email').value,
		message: document.getElementById('form_message').value
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
	
	$('#myModal').modal('hide'); 
};