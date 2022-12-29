import isEmail from "validator/lib/isEmail";

const userName = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const repeatPass = document.querySelector(".password2") as HTMLInputElement;
const formCampo = document.querySelector(".form-fields") as HTMLDivElement;
const form = document.querySelector('.form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    hideErrorMessages(form);
    validaForm(userName, email, password, repeatPass);
    checkEmail(email);
    validaSenha(password, repeatPass);
    
    if(enviaForm(form)) alert('Formulario Enviado');
});



function validaForm(...inputs: HTMLInputElement[]):void {
    inputs.forEach((input) => {
        if(!input.value) showErrorMessage(input, 'Este campo  nao deve estar vazio!');
    });
}

function validaSenha(password: HTMLInputElement, password2: HTMLInputElement):void {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senhas devem ser iguais!')
        showErrorMessage(password2, "Senhas devem ser iguais!");
    }
}


function checkEmail(input: HTMLInputElement):void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email Invalido!');
}


function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll(".show-error-message")
    .forEach((item) => item.classList.remove("show-error-message"));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const erroMsg = formFields.querySelector(".error-message") as HTMLSpanElement;

    erroMsg.innerText = msg;
    formFields.classList.add('show-error-message');
}

function enviaForm(form: HTMLFormElement):boolean {
    let envia = true;

    form.querySelectorAll('.show-error-message').forEach(() => (envia = false));

    return envia;
}




