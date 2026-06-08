# GitPulse — GitHub Analytics Dashboard

🌐 **Live Demo:** https://akshitmalia.github.io/GitPulse-GitHub-Dashboard/

GitPulse is a GitHub analytics dashboard built with JavaScript, Axios, Bootstrap, and Chart.js. It enables users to search GitHub profiles, explore repositories, analyze repository activity, and visualize commit history through an intuitive interface.

---

## 🚀 Features

* 🔍 Search GitHub users with debounced input (600ms)
* 📂 Browse repositories with details such as stars, forks, and open issues
* 🔄 Sort repositories by name, stars, forks, or issues
* 🎯 Filter repositories instantly by name
* 📖 View repository README content
* 📝 Display recent commits and contributor information
* 📊 Visualize commit activity using Chart.js
* ⚠️ Handle GitHub API rate limits using Axios interceptors

---

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/a76af726-69a9-45e2-89f1-7f2b03987786" alt="Home Page" width="100%">
  <br><br>
  <img src="https://github.com/user-attachments/assets/8b15aae2-b01c-4b01-b5df-3d4f719f17c6" alt="Search Results" width="100%">
  <br><br>
  <img src="https://github.com/user-attachments/assets/881d0225-632f-4692-9a3f-721c3d07b3b6" alt="Repositories Page" width="100%">
  <br><br>
  <img src="https://github.com/user-attachments/assets/3712775f-a13a-4827-a010-e16fa9fcb619" alt="Repo Detail Page" width="100%">
  <br><br>
  <img src="https://github.com/user-attachments/assets/fdfb4f02-7bef-451d-80ad-978fec356e3d" alt="Favourites Page" width="100%">
</div>
---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6)
* Axios
* Chart.js
* GitHub REST API

---

## 📡 APIs Used

* Search Users API
* User Repositories API
* Repository README API
* Repository Commits API
* Repository Issues API
* Repository Contributors API

---

## 📂 Project Structure

```text
index.html      → User Search
repos.html      → Repository Dashboard
repo.html       → Repository Details

search.js       → Search + Debouncing
repos.js        → Sorting + Filtering
repoDetail.js   → README, Commits, Issues, Contributors, Charts
axiosSetup.js   → Rate Limit Handling
```

---

## 💡 Key Concepts

* Debouncing
* DOM Manipulation
* REST API Integration
* Query Parameter Handling
* Data Visualization with Chart.js
* Axios Interceptors
* Client-side Sorting & Filtering
* Error Handling

---

## 🔮 Future Improvements

* GitHub OAuth Authentication
* Pagination Support
* Repository Language Analytics
* Contribution Heatmaps
* API Response Caching
* Enhanced Mobile Experience

---

## 👨‍💻 Author

**Akshit Malia**

GitHub: https://github.com/akshitmalia

---

## 📄 License

This project is open-source and available under the MIT License.
