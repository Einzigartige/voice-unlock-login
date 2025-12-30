(() => {
  "use strict";

  /* ================= CONFIG ================= */
  const CONFIG = {
    secretCode: "let's start website",
    unlockDelay: 1500
  };

  /* ================= ELEMENTS ================= */
  const startBtn = document.getElementById("startBtn");
  const output = document.getElementById("output");
  const voiceAuth = document.getElementById("voiceAuth");
  const loginSection = document.getElementById("loginSection");
  const waveform = document.getElementById("waveform");
  const languageSelect = document.getElementById("languageSelect");

  /* ================= SPEECH API ================= */
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    output.textContent = "❌ Speech Recognition not supported";
    output.classList.add("error");
    startBtn.disabled = true;
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = languageSelect.value;

  /* ================= TEXT TO SPEECH ================= */
  function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = recognition.lang;
    speechSynthesis.speak(msg);
  }

  /* ================= EVENTS ================= */
  languageSelect.addEventListener("change", () => {
    recognition.lang = languageSelect.value;
    speak("Language changed");
  });

  startBtn.addEventListener("click", () => {
    output.textContent = "🎧 Listening...";
    output.className = "status";
    waveform.classList.add("active");
    speak("Please speak the secret code");
    recognition.start();
  });

  recognition.onresult = (event) => {
    waveform.classList.remove("active");

    const spokenText =
      event.results[0][0].transcript.toLowerCase().trim();

    if (spokenText === CONFIG.secretCode.toLowerCase()) {
      output.textContent = "✅ Correct code! Unlocking...";
      output.classList.add("success");
      speak("Access granted");

      setTimeout(unlockWebsite, CONFIG.unlockDelay);
    } else {
      output.textContent = "❌ Incorrect code. Try again.";
      output.classList.add("error");
      speak("Incorrect code, try again");
    }
  };

  recognition.onerror = (event) => {
    waveform.classList.remove("active");
    output.textContent = `Error: ${event.error}`;
    output.classList.add("error");
    speak("An error occurred");
  };

  function unlockWebsite() {
    voiceAuth.classList.add("hidden");
    loginSection.classList.remove("hidden");
  }
})();
