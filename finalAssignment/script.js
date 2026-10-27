"use strict";

// An array of objects used in the Buff facts explorer section
const parts = [
  { name: "His name is Buff.", short: "NAME", description: "I got the name Buff after my favorite Whiskey, Buffalo Trace- he is named after it.", 
    tip: "Click the other buttons to explore the details I have shared about him." },
  { name: "A black coat", short: "COAT", description: "Buff has a black coat. The image on this page was taken a month or two ago!", 
    tip: "He sheds more than any dog i've ever owned! UGH" },
  { name: "A Labrador mix", short: "LAB", description: "Labrador is one part of Buff's breed mix, it's the easiest to see in his face.", 
    tip: "His breed mix is one detail about him, his own personality is what makes him a 'Buff'." },
  { name: "An American Staffordshire mix", short: "STAFFY", description: "American Staffordshire is the other part of Buff's breed mix.", 
    tip: "Use the form below to suggest something fun for Buff to try." }
];

// A template literal.
const guide = { name: "Buff", coat: "Black", mix: "Labrador / American Staffordshire" };

// Both required DOM selection methods are used here
const partButtons = document.getElementById("part-buttons");
const guideInfo = document.querySelector("#guide-info");
guideInfo.textContent = `${guide.name} • ${guide.coat} coat • ${guide.mix} mix`;

// forEach and template literals create buttons from the array here
parts.forEach(function (part, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("part-button");
  button.dataset.index = index;
  button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
  const label = document.createElement("span");
  label.textContent = `0${index + 1} / ${part.short}`;
  button.appendChild(label);
  button.appendChild(document.createTextNode(part.name));
  partButtons.appendChild(button);
});

// PARTS 4 and 5: Event delegation. One click listener is attached to the parent.
// Click events bubble up from each button (or its span) to this container.
// closest() finds the button even when its child span was clicked.
partButtons.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-index]");
  if (!button || !partButtons.contains(button)) return;
  const index = Number(button.dataset.index);
  const selectedPart = parts[index];
  document.getElementById("part-label").textContent = `BUFF / 0${index + 1}`;
  document.getElementById("part-name").textContent = selectedPart.name;
  document.getElementById("part-description").textContent = selectedPart.description;
  document.getElementById("part-tip").textContent = selectedPart.tip;
  partButtons.querySelectorAll("button").forEach(function (partButton) {
    partButton.setAttribute("aria-pressed", String(partButton === button));
  });
});

// Clicks the first fact button automatically when the page loads.
partButtons.querySelector("button").click();

// updates visible checklist progress
const buildChecks = document.getElementById("build-checks");
buildChecks.addEventListener("change", function () {
  const completed = buildChecks.querySelectorAll("input:checked").length;
  document.getElementById("checklist-progress").textContent = `${completed} of 3 activity ideas selected.`;
});

const form = document.getElementById("build-form");
const nameInput = document.getElementById("builder-name");
const goalInput = document.getElementById("build-goal");
const formHelp = document.getElementById("form-help");
const planOutput = document.getElementById("plan-output");
const storageMessage = document.getElementById("storage-message");
const clearButton = document.getElementById("clear-plan");
const storageKey = "meetBuff.activityIdea";

// Focus events will give the user a visible field hint.
nameInput.addEventListener("focus", function () {
  formHelp.textContent = "A first name or nickname is all you need.";
});
goalInput.addEventListener("focus", function () {
  formHelp.textContent = "Think about the activities you think Buff might enjoy.";
});

function displayPlan(plan) {
  // keeps user entered text from being interpretated as html
  planOutput.textContent = `${plan.name} suggests this activity for Buff: ${plan.goal}`;
  clearButton.hidden = false;
}

// Prevent reload, retrieve both field values and it will show the result
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const savedPlan = { name: nameInput.value.trim(), goal: goalInput.value.trim() };
  if (!savedPlan.name || !savedPlan.goal) {
    formHelp.textContent = "Please enter a name and an activity idea, not just spaces.";
    return;
  }
  displayPlan(savedPlan);
  // I chose local storage, this holds it for a later session
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedPlan));
    storageMessage.textContent = "Your idea will return when you reload.";
  } catch (error) {
    storageMessage.textContent = "This browser could not save it for later";
  }
  formHelp.textContent = "Your activity idea is ready";
});

// This will retrieve the saved values when the page opens. Validates stored data first.
try {
  const storedPlan = JSON.parse(localStorage.getItem(storageKey));
  if (storedPlan && typeof storedPlan.name === "string" && typeof storedPlan.goal === "string" && storedPlan.name.trim() && storedPlan.goal.trim()) {
    nameInput.value = storedPlan.name;
    goalInput.value = storedPlan.goal;
    displayPlan(storedPlan);
    storageMessage.textContent = "Your saved activity idea was restored.";
  }
} catch (error) {
  storageMessage.textContent = "A saved idea could not be loaded. You can enter a new one.";
}

clearButton.addEventListener("click", function () {
  try {
    localStorage.removeItem(storageKey);
    storageMessage.textContent = "Your saved idea was cleared.";
    form.reset();
    planOutput.textContent = "Your activity suggestion will appear here.";
    clearButton.hidden = true;
    formHelp.textContent = "Enter your name and an activity idea for Buff.";
  } catch (error) {
    storageMessage.textContent = "The browser could not clear the saved idea. Please try again.";
  }
});

// Two browser objects, navigator and window.
function displayBrowserInfo() {
  document.getElementById("browser-info").textContent = `Browser language: ${navigator.language} • Window width: ${window.innerWidth} pixels`;
}
displayBrowserInfo();
window.addEventListener("resize", displayBrowserInfo);

/*
REFLECTION

Which JavaScript feature was easiest for you to use?
The easiest feature for me was selecting elements with getElementById() and
changing their textContent because I could see the result right away.

Which JavaScript feature was most challenging?
Event delegation was the hardest part because I had to keep in mind how clicking an 
element also triggers an event on its parent and I used 'closest' to find the 
correct fact button even when someone clicks the label inside it.

How did you use events in your project?
I used click events to change facts about Buff and clear a saved idea
change events to update checklist progress, focus events to show form hints
a submit event to handle the form and resize to update the window width

How did you use storage in your project?
I used localStorage to save the name and activity idea as a JSON string. When the
page loads again, JSON.parse turns the stored string back into an object and the saved idea 
is displayed.
*/
