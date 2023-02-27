'use strict';
const account1 = {
    owner: 'Minh Luan',
    pin: 1111,
};

const account2 = {
    owner: 'Thien Nhan',
    pin: 2222,
};
  

const accounts = [account1, account2];

const labelWelcome = document.querySelector('.welcome');
const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const containerForm = document.querySelector('.container');

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };

createUsernames(accounts);
debugger
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
  
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      labelWelcome.textContent = `Welcome, ${
        currentAccount.owner.split(' ')[1]
      }`;
      containerForm.style.opacity = 100;

      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
    }
});