const clickCounterHandler = (event) => {
  // console.log(event)
  // console.log("event.target", event.target)
  // console.log("event.target.dataset", event.target.dataset)
  // console.log("event.target.dataset.clicks", event.target.dataset.clicks)
  // console.log(typeof event.target.dataset.clicks)
  event.target.dataset.clicks = Number(event.target.dataset.clicks) + 1;
  // console.log(typeof event.target.dataset.clicks)
  if (event.target.dataset.clicks === "1") {
    event.target.textContent = `I've been clicked ${event.target.dataset.clicks} time.`;
  } else {
    event.target.textContent = `I've been clicked ${event.target.dataset.clicks} times!`;
  }
};

const handleKeydown = (e) => {
  document.querySelector(
    "#keydown-tracker"
  ).textContent = `You pressed ${e.code}`;
};

const handleDelegation = (event) => {
  // console.log(event.currentTarget);
  const resultSpan = document.querySelector("#delegation-result");
  if (event.target !== event.currentTarget) {
    resultSpan.textContent = event.target.textContent;
  }
};

// function handleDelegation(event) {
//   const resultSpan = document.querySelector('#delegation-result');
//   // Check if the clicked element is a button
//   if (event.target.tagName === 'BUTTON') {
//     // Update the result span with the button's text content
//     resultSpan.textContent = event.target.textContent;
//   }
// }

const addNewRandomNumber = (event) => {
  // <ul id="random-numbers"></ul>
  const randomNumbersList = document.getElementById("random-numbers");
  const newLi = document.createElement("li");
  // Generate a random number greater than 0
  const randomNumber = Math.random() * 100 + 1;

  // Set the text content of the list item to the random number
  newLi.textContent = randomNumber.toFixed(2); // To limit to 2 decimal places

  // Append the new list item to the unordered list
  randomNumbersList.appendChild(newLi);
};

const main = () => {
  document
    .getElementById("click-button")
    .addEventListener("click", clickCounterHandler);
  document.body.addEventListener("keydown", handleKeydown);
  document
    .getElementById("inline-example")
    .addEventListener("click", clickCounterHandler);
  document
    .getElementById("add-random-num")
    .addEventListener("click", addNewRandomNumber);
  const delegationContainer = document.querySelector("#delegation");

  delegationContainer.addEventListener("click", handleDelegation);
  document.querySelector("#remove").addEventListener("click", (event) =>{
    // console.log(event.target)
    delegationContainer.removeEventListener('click', handleDelegation);
  })
};

main();
