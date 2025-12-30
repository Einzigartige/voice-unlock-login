# 🎙️ Voice Unlock Authentication

A web-based **voice authentication system** that unlocks a login interface when a correct spoken passphrase is detected.  
Built using the **Web Speech API**, with **multi-language support**, **voice feedback**, **animated waveform**, and a **mobile-first UI**.

> ⚠️ This project is a **frontend demonstration** and should **not** be used as a real security system.

---

## ✨ Features

- 🎤 Voice-based unlock using Speech Recognition
- 🌍 Multi-language support (English, Hindi, French, Spanish)
- 🔊 Text-to-Speech feedback
- 🎙️ Animated voice waveform while listening
- 📱 Mobile-first responsive design
- 🎨 Clean & modern UI
- 🧹 Well-structured, readable code

---

## 🚀 Demo Flow

1. User clicks **“Speak Code”**
2. Browser listens to the user's voice
3. If the spoken phrase matches the secret code:
   - Voice-auth section is hidden
   - Login UI is revealed
4. If incorrect:
   - Error message + voice feedback

---

## 🧠 How It Works

This project uses the **Web Speech API**:
- `SpeechRecognition` for converting voice → text
- `SpeechSynthesis` for spoken feedback

The authentication logic is handled **entirely on the frontend** by matching a predefined secret phrase.

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Responsive UI & animations
- **JavaScript (Vanilla)** – App logic
- **Web Speech API** – Voice recognition & speech synthesis

---

## 📁 Project Structure

```
voice-unlock-auth/
│── index.html
│── style.css
│── main.js
│── media/
│   ├── google-logo.png
│   ├── facebook-logo.png
│   └── github-logo.png
└── README.md
```

---

## 🔧 Configuration

### Change the secret code

In `main.js`:

```js
const CONFIG = {
  secretCode: "let's start website",
  unlockDelay: 1500
};
```

### Change language defaults

Language can be selected from the UI, or you can set a default:

```js
recognition.lang = "en-US";
```

---

## 📌 Browser Support

✅ Chrome (Desktop & Android)  
✅ Edge  
⚠️ Firefox (limited support)  
❌ Safari (SpeechRecognition not supported)

> Best experience on **Google Chrome**

---

## 🔐 Security Notice

This project is **NOT a secure authentication system**.

- Voice phrases can be overheard
- Frontend logic can be bypassed
- No biometric voice verification

### For real-world security, combine with:
- Backend authentication
- WebAuthn
- OAuth / Firebase Auth
- AI-based voice biometrics

---

## 🌱 Future Improvements

- 🔐 Backend verification
- 🧠 AI-based phrase matching
- 🎧 Real microphone waveform (Web Audio API)
- 🌗 Dark mode
- 💾 Remember unlock state (localStorage)
- ⚛️ React / Next.js version

---

## 📜 License

MIT License  
Feel free to use, modify, and learn from this project.

---

## 🌐 Follow & Subscribe

| Platform  | Link |
|---------|------|
| Twitter  | https://twitter.com/einzigartigetec/ |
| Facebook | https://www.facebook.com/einzigartige/ |
| LinkedIn | https://www.linkedin.com/company/einzigartige/ |
| YouTube  | https://www.youtube.com/@einzigartige_/ |
| Website  | http://einzigartige.in/ |

---

## 📊 Live YouTube Statistics

![YouTube Subscribers](https://img.shields.io/youtube/channel/subscribers/UCjm1vLu6YLoLeXpt8aT6BWg?style=social)

![YouTube Views](https://img.shields.io/youtube/channel/views/UCjm1vLu6YLoLeXpt8aT6BWg?style=social)

👉 **Subscribe here:** https://www.youtube.com/@einzigartige_/

---

## 👤 Author

**Einzigartige**  
Website: http://einzigartige.in/

---

⭐ If you like this project, consider giving it a star!
