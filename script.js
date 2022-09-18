// const modmeBtn = document.querySelector('.modme-form__btn');
// const checkerBtn = document.querySelector('.check-form__btn');

// modmeBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     let modmeForm = document.querySelector('.modme-form');
//     modmeForm.classList.add('form-hide');
//     let checkingForm = document.querySelector('.check-form');
//     checkingForm.classList.remove('form-hide');

//     let code = Math.floor(Math.random() * 999999) + 111111;
//     console.log(code);

//     setTimeout(() => {
//         alert(`Ваш проверочный код: ${code}`)
//     }, 3000);
// })

const modmeId = document.querySelector('#check-id');

console.log(modmeId.value.length);