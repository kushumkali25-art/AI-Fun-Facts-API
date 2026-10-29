const btn = document.getElementById("fact-btn");
const statusEl = document.getElementById("status");
const factBox = document.getElementById("fact-box");

btn.addEventListener("click", async () => {
  btn.disabled = true;
  statusEl.textContent = "Thinking...";
  factBox.classList.add("hidden");

  try {
    const res = await fetch("/fun-fact");
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    factBox.textContent = data.fact;
    factBox.classList.remove("hidden");
    statusEl.textContent = "";
  } catch (err) {
    statusEl.textContent = err.message;
  } finally {
    btn.disabled = false;
  }
});