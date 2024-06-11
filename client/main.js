const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  // do something with the form data here
  const formData = Object.fromEntries(new FormData(messageForm));

  fetch("http://localhost:8008/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ messageForm }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
