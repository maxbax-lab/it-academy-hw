let formDef1= [
    {label:'Login:',kind:'longtext',name:'login'},
    {label:'Password:',kind:'longtext',name:'pass'},
    {label:'Repeat Password:',kind:'longtext',name:'passrepeat'},
    {label:'E-mail:',kind:'longtext',name:'email'},
    {label:'Country:',kind:'combo',name:'country',
      variants:[{
        value: 1,
        text: 'Atlanta'
    }, {
        value: 2,
        text: 'Berlin'
    }, {
        value: 3,
        text: 'Boston'
    }, {
        value: 4,
        text: 'Chicago'
    }, {
        value: 5,
        text: 'London'
    }, {
        value: 6,
        text: 'Minsk'
    }, {
        value: 7,
        text: 'New York'
    }, {
        value: 8,
        text: 'Paris'
    }, {
        value: 9,
        text: 'San Francisco'
    }]},
    {label:'Subscribe for updates:',kind:'radio',name:'sub',
      variants:[{text:'Yes',value:1},{text:'No',value:2}]},
    {label:'Register',kind:'submit'},
];

// event listeners for login/register

let modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let modal2 = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

let form1 = document.getElementById('form1');
form1.classList.add('form');

let register = document.getElementById('register')
register.addEventListener('click',createForm(form1, formDef1))
register.addEventListener('click',function(event) {
        modal2.style.display = "none";
})

// register form creation

function createForm(form, array) {
    array.forEach(item => {

        let div = document.createElement('div');
        form.appendChild(div);
        div.classList.add('form-control')

        let label = document.createElement('label');
        let labelText = document.createTextNode(item.label);
        label.appendChild(labelText);

        let input = document.createElement('input');
        input.type = item.kind;
        input.name = item.name;

        input.classList.add(`${item.name}`);
        input.classList.add('inputField');
        
        if (item.kind === 'combo') {
            let select = document.createElement('select');
            select.classList.add('select');
            select.name = item.name;
        
            item.variants.forEach(item => {
                let option = document.createElement('option');
                let optionText = document.createTextNode(item.text);
                option.value = item.value;
                
                select.appendChild(option);
                option.appendChild(optionText);
            });
            div.appendChild(label);
            div.appendChild(select);
        } else if (item.kind === 'radio') {
            div.appendChild(label);
            item.variants.forEach(value => {    
                let input = document.createElement('input');
                input.type = item.kind;
                input.name = item.name;
                input.value = value.value;

                let label = document.createElement('label');
                let labelText = document.createTextNode(value.text);

                label.appendChild(input);
                label.appendChild(labelText);
                div.appendChild(label);
            });
        } else if (item.kind === 'memo') {
            let textarea = document.createElement('textarea');
            textarea.name = item.name;
        
            div.appendChild(label);
            div.appendChild(textarea);;
            textarea.classList.add('textarea');
        } else if (item.kind === 'submit') {
            input.value = item.label;
            div.appendChild(input);
            input.classList.add('submit');
            input.classList.remove('form-control')
        } else {
            div.appendChild(label);
            div.appendChild(input);
        }
        
    });
}

// валидация формы

const login= document.getElementsByClassName('login').login;
const pass = document.getElementsByClassName('pass').pass;
const passrepeat = document.getElementsByClassName('passrepeat').passrepeat;
const email = document.getElementsByClassName('email').email;
const country = document.getElementsByClassName('country').country;
const button = document.getElementsByClassName('submit');
const form = document.getElementsByClassName('form');
const input = document.getElementsByClassName('inputField');

const arr =[login, pass, passrepeat, email, country];

document.addEventListener('submit', function (event){
	event.preventDefault();
	removeErrors();
	validation();
})

arr.forEach(item=>{
	item.addEventListener('blur', function(){
		removeErrors();
		validation();
	});
});

function removeErrors(){
	let errors = [...document.getElementsByClassName('error-text')];
	for(let i=0; i<errors.length;i++){
		errors[i].remove();
	}
}
function validation(){

	arr.forEach (item =>{		
		if(!item.value){
			setErrorFor(item);
			const errorText = document.createElement('div');
			errorText.innerHTML = "please fill";
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
