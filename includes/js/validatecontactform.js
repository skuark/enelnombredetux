function deleteSpaces(value)
{
	while(value.charAt(value.length-1)==" ") value=value.substr(0, value.length-1);
	while(value.charAt(0)==" ") value=value.substr(1, value.length-1);
	return value;
}

function validateLength(value, canbeempty, mins, maxs)
{
	n = value.length;
	if(value == ""){
		if(canbeempty) return true;
		else return false;
	}else{
		if(n >= mins && n <= maxs) return true;
		else return false;
	}
}

function validateName(value)
{
	if (validateLength(value, false, 3, 50)) return true;
	else return false;
}

function validateEmail(value)
{
	var reg=/([a-zA-Z0-9._-]{1,30})@([a-zA-Z0-9.-]{1,30})/;
	if(reg.test(value)) return true;
	else return false;
}

function validateWebPage(value)
{
	if (validateLength(value, true, 5, 70)) return true;
	else return false;
}

function validateSubject(value)
{
	if (validateLength(value, false, 3, 100)) return true;
	else return false;
}

function validateMessage(value)
{
	if (validateLength(value, false, 20, 1000)) return true;
	else return false;
}

function validatecontactform()
{
	var name = deleteSpaces(document.mailform.name.value);
	var email = deleteSpaces(document.mailform.email.value);
	var web = deleteSpaces(document.mailform.web.value);
	var subject = deleteSpaces(document.mailform.subject.value);
	var message = deleteSpaces(document.mailform.message.value);
	
	var error = 0;
	if (!validateName(name)){ document.mailform.name.style.color = 'red'; error = 1; }
	if (!validateEmail(email)){ document.mailform.email.style.color = 'red'; error = 1; }
	if (!validateWebPage(web)){ document.mailform.web.style.color = 'red'; error = 1; }
	if (!validateSubject(subject)){ document.mailform.subject.style.color = 'red'; error = 1; }
	if (!validateMessage(message)){ document.mailform.message.style.color = 'red'; error = 1; }
	if (error){
		alert('Datos erroneos. Por favor, verifique que ha introducido los datos correctamente.');
		return false;
	}else
		return true;
}

