const sitename = document.getElementsByClassName('sitename').sitename;
const siteurl = document.getElementsByClassName('siteurl').siteurl;
const visitors = document.getElementsByClassName('visitors').visitors;
const email = document.getElementsByClassName('email').email;
const votes = document.getElementsByClassName('votes').votes;
const textarea = document.getElementsByClassName('textarea').description;
const button = document.getElementsByClassName('submit');
const form = document.getElementsByClassName('form');
const divv = document.getElementsByClassName('form-control');

arr =[sitename, siteurl, visitors, email, votes, textarea];


document.addEventListener('submit', function (event){
	event.preventDefault();

	removeErrors();
	validation();
})

function removeErrors(){
	let errors = document.getElementsByClassName('error-text');
	for(let i=0; i<errors.length;i++){
		errors[i].remove();
	}
}

function validation(){

	arr.forEach (item =>{
		
		if(item.value ===''){
			setErrorFor(item);

			const errorText = document.createElement('div');
			errorText.innerHTML = "please check";
			errorText.className = 'error-text';
			item.parentElement.appendChild(errorText);

		}else{
			setSuccessFor(item);
		}
	})
	if (!isEmail(email.value)) {
		setErrorFor(email);
	}
	
}
function setErrorFor(input) {
	input.style.borderColor = '#FF5964';
}

function setSuccessFor(input) {
	input.style.borderColor = '#9EE279';
}


let e = email.value;
function isEmail(e) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
}