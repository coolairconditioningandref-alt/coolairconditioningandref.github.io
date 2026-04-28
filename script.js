function sendMessage() {
  let input = document.getElementById("user-input");
  let text = input.value;

  if (text.trim() === "") return;

  addMessage(text, "user");

  input.value = "";

  setTimeout(() => {
    let reply = getAIResponse(text);
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, type) {
  let box = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.innerText = text;

  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function getAIResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hello! How can I assist you?";
  if (input.includes("price")) return "Our pricing depends on service type.";
  if (input.includes("ac")) return "We provide AC installation and repair.";
  if (input.includes("contact")) return "Call us or message us anytime!";

  return "I'm still learning. Ask about AC services!";
}
