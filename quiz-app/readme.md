# 📊 Quiz App (API-Based)

![GitHub stars](https://img.shields.io/github/stars/akshitmalia/quiz-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/akshitmalia/quiz-app?style=social)

🌐 Live Demo: https://quiz-app-akshit.netlify.app/

An interactive quiz web application that fetches questions from an external API, allows users to attempt quizzes, and provides a detailed result summary with correct answers.

---

## 🚀 Features

* ❓ Fetches quiz questions dynamically from API
* 🎯 Multiple-choice questions (MCQs)
* 🔀 Randomized answer options
* 📊 Score calculation with result summary
* 📄 Displays correct answers after completion
* 🔁 Restart quiz functionality
* ⚡ Loading state while fetching data

---

## 🛠️ Tech Stack

* HTML
* CSS (Bootstrap 5)
* JavaScript (Vanilla JS)
* Axios (API calls)
* Open Trivia DB API

---

##  Concepts Used

* API Integration
* Asynchronous JavaScript (`async/await`)
* DOM Manipulation
* Event Handling
* Data Handling using Arrays & Objects
* Randomization (Shuffling Options)
* HTML Decoding (handling encoded API data)

---

## 📸 Screenshots

<img width="1919" height="677" alt="image" src="https://github.com/user-attachments/assets/9b776769-d8d4-48fa-b5ae-60a7deaaf782" />
<img width="1919" height="763" alt="image" src="https://github.com/user-attachments/assets/1fd6dfc3-ca11-4606-b7c0-a15e9abf88ab" />
<img width="1919" height="775" alt="image" src="https://github.com/user-attachments/assets/900e4bc0-18dd-4ae3-8424-161ee18b8d03" />
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/a1cc620a-0af3-430a-8dac-2b3a1a874edc" />
<img width="1919" height="941" alt="image" src="https://github.com/user-attachments/assets/331202a9-63d3-41df-9ad4-4b96a486a284" />


---

## ⚙️ Installation & Setup

```
git clone https://github.com/akshitmalia/quiz-app.git
cd quiz-app
```

* Open `index.html` in your browser

---

## 📌 How It Works

1. User clicks **Start**
2. App fetches 5 quiz questions from API
3. Displays one question at a time
4. Options are shuffled randomly
5. User selects an answer and submits
6. Score is calculated (+4 per correct answer)
7. After completion:

   * Result summary is displayed
   * Correct answers are shown

---

## 🔗 API Used

* Open Trivia DB: https://opentdb.com/

---

## ⚠️ Important Note

* `console.log(dataset)` is intentionally included

  * Used for debugging and verifying correctness of answers
  * Helps ensure score calculation logic works properly

---

## ⚠️ Limitations

* Fixed number of questions (5)
* No timer functionality
* No category/difficulty selection UI
* No persistent score storage

---

## 🌟 Future Improvements

* ⏱️ Add timer for each question
* 🎯 Select difficulty & categories
* 📊 Track previous scores
* 🧠 Increase number of questions dynamically
* 🎨 Improve UI/UX
* 📱 Better mobile responsiveness

---

## 👤 Author

**Akshit Malia**

* 🌐 Live Demo: https://quiz-app-akshit.netlify.app/
* 💻 GitHub: https://github.com/akshitmalia

---

## 📄 License

This project is open-source and available under the MIT License.
