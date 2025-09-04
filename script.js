// ========== Part 1: Variables & Conditionals ==========
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.onclick = function() {
  const age = Number(ageInput.value); // variable declaration and type casting
  if (age >= 18) {
    ageResult.textContent = 'You are an adult.';
  } else if (age > 0) {
    ageResult.textContent = 'You are a minor.';
  } else {
    ageResult.textContent = 'Please enter a valid age.';
  }
};

// ========== Part 2: Functions ==========
// Function to calculate sum of two numbers
function sum(a, b) {
  return a + b;
}

// Function to format a message string
function formatMessage(num1, num2, result) {
  return `The sum of ${num1} and ${num2} is ${result}.`;
}

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calcSumBtn = document.getElementById('calcSumBtn');
const sumResult = document.getElementById('sumResult');

calcSumBtn.onclick = function() {
  const n1 = Number(num1Input.value);
  const n2 = Number(num2Input.value);
  const total = sum(n1, n2);
  sumResult.textContent = formatMessage(n1, n2, total);
};

// ========== Part 3: Loops ==========
const showListBtn = document.getElementById('showListBtn');
const itemList = document.getElementById('itemList');
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

showListBtn.onclick = function() {
  itemList.innerHTML = ''; // Clear previous list

  // Using for loop to iterate over array
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.textContent = items[i];
    itemList.appendChild(li);
  }

  // Using while loop to count down (just for demo)
  let countdown = 3;
  console.log('Countdown:');
  while (countdown > 0) {
    console.log(countdown);
    countdown--;
  }
};

// ========== Part 4: DOM Manipulation ==========
const toggleBtn = document.getElementById('toggleBtn');
const part4Section = document.getElementById('part4');

toggleBtn.onclick = function() {
  part4Section.classList.toggle('toggled');
};
