//form 1
const btn1 = document.querySelector("#button1");
const name1 = document.querySelector("#name1");
const surname1 = document.querySelector("#surname1");
btn1.addEventListener("click", (e) => {
	e.preventDefault();
	name1.value === "" && surname1.value === ""
		? alert("zadne pole nie wypelnione")
		: name1.value != "" && surname1.value != ""
		? alert("oba pola wypelnione")
		: name1.value != "" && surname1.value === ""
		? alert("nazwisko nie wypelnione")
		: name1.value === "" && surname1.value != ""
		? alert("imie nie wypelnione")
		: console.log();
});

//form 2
const btn2 = document.querySelector("#button2");

//name 
const name2 = document.querySelector("#name2");
name2.addEventListener("input", () => {
	const nsReg = /[a-z]\s[a-z]/g;
	if(nsReg.test(name2.value)===true){
		name2.setCustomValidity('');
	} else if(nsReg.test(name2.value)===false)
	{
		name2.setCustomValidity('samo imie nie wystarczy')
	}
});

//email
const email = document.querySelector('#email');
email.addEventListener('input', ()=>{
	const eReg = /[a-z]{2,3}\@[a-z]{2,5}\.[a-z]{2,3}/g;
	if(eReg.test(email.value) ===true ){
		email.setCustomValidity('')
	} else{
		email.setCustomValidity('wpisano niepoprawny email')
	}
	if(!email.value.includes("@")){
        email.setCustomValidity("Uwzglednij znak '@' w adresie email. W adresie '"+email.value+"' brakuje znaku '@'")
	}
	if(email.value.includes("@")&&!email.value.includes(".")){
        email.setCustomValidity("Podaj czesc po znaku '@'. Adres '"+email.value+"' jest niepełny")
	}
})
//ocena
const ocena = document.querySelector('#grade');
ocena.addEventListener('input', ()=>{
	const oReg = /[0-6]/g;
	if(oReg.test(ocena.value)=== true){
		ocena.setCustomValidity('')
	}
	else{
		ocena.setCustomValidity('wartosc nie powinna byc wieksza niz 6')
	}
})
//date
const data = document.querySelector('#date');
data.addEventListener('input', ()=>{
	if(data.value==""){
        data.setCustomValidity("wpisz date i godzine")
    }else
    {
        data.setCustomValidity("")
    }
})

btn2.addEventListener("click", () => {
	if(name2.value==""){
		name2.setCustomValidity("wpisz imie i nazwisko")
	} 
	if(email.value==""){
        email.setCustomValidity("wpisz email")
    }
	if(ocena.value==""){
        ocena.setCustomValidity("wpisz ocene 1-6")
    }
    if(data.value==""){
        data.setCustomValidity("wpisz date i godzine")
    }
});
