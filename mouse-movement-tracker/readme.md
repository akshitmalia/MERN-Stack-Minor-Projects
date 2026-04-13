# 🖱️ Mouse Movement Tracker

🌐 Live Demo: https://mouse-movement-tracker-akshit.netlify.app/

A simple interactive web application that tracks and displays real-time mouse cursor position on the screen. On mobile devices, it responds to tap interactions, with scope for touch-based movement tracking.

---

## 🚀 Features

* 📍 Real-time mouse position tracking (X & Y coordinates)
* ⚡ Instant UI updates on movement
* 📱 Works on mobile (tap interaction)
* 🎯 Simple and responsive layout

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript (Vanilla JS)

---

## 📸 Screenshots

<img width="1919" height="956" alt="image" src="https://github.com/user-attachments/assets/7997de24-36a1-48a2-9145-dab3ad6700b7" />
<img width="1917" height="931" alt="image" src="https://github.com/user-attachments/assets/137b5949-31f3-46b2-a416-8062fb346308" />


---

## ⚙️ Installation & Setup

```
git clone https://github.com/your-username/mouse-movement-tracker.git
cd mouse-movement-tracker
```

* Open `index.html` in your browser

---

## 📌 How It Works

1. The app listens for `mousemove` events on the window
2. Captures:

   * Mouse X position (`clientX`)
   * Mouse Y position (`clientY`)
3. Updates the UI dynamically with current coordinates

---

## 📱 Mobile Behavior

* Works on tap interactions by default
* Can be enhanced using:

  * `touchmove` event for real-time tracking on mobile

---

## ⚠️ Limitations

* No continuous tracking on mobile (without touch events)
* UI updates by replacing innerHTML (not optimal for large apps)

---

## 🌟 Future Improvements

* 📲 Add `touchmove` support for mobile tracking
* 🎨 Improve UI/UX with animations
* 📊 Add coordinate history tracking
* 🖌️ Convert into drawing app using mouse movement
* ⚡ Optimize DOM updates

---

## 👤 Author

**Akshit Malia**

* 🌐 Live Demo: https://mouse-movement-tracker-akshit.netlify.app/
* 💻 GitHub: https://github.com/akshitmalia

---

## 📄 License

This project is open-source and available under the MIT License.
