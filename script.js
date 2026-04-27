function sendMessage() {
  let input = document.getElementById("user-input");
  let text = input.value;

  if (!text) return;

  let box = document.getElementById("chat-box");

  let userMsg = document.createElement("div");
  userMsg.innerText = "You: " + text;
  box.appendChild(userMsg);

  let botMsg = document.createElement("div");
  botMsg.innerText = "AI: Hello! You said: " + text;
  box.appendChild(botMsg);

  input.value = "";
}
