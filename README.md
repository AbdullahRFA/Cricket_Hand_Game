# 🕹️ Ball-Bat-Stamp Game

A simple interactive browser-based game built with **HTML, CSS, and JavaScript**. Inspired by the classic rock-paper-scissors logic, this version uses **Ball**, **Bat**, and **Stamp** as the playable options. The game tracks your wins, losses, and ties using `localStorage`.

---

## 🎯 Features

- 🔁 **Play Ball-Bat-Stamp** against the computer.
- 💾 **Score Tracking**: Saves your game progress in `localStorage`.
- 📊 **Scoreboard Display**: View wins, losses, and ties in real-time.
- 🔄 **Reset Score**: Clear your score and start fresh.
- 🧠 **Computer Logic**: Randomly selects Ball, Bat, or Stamp.
- 🎨 Clean and responsive UI (requires simple HTML/CSS setup).

---

## ⚙️ How to Play

- Choose one: **Ball**, **Bat**, or **Stamp**.
- The computer randomly selects its move.
- The rules are:
  - `Ball` beats `Stamp`
  - `Bat` beats `Ball`
  - `Stamp` beats `Bat`
  - Same moves = Tie
- Results are shown immediately.
- Your score is updated and saved locally.

---
## 📸 Screenshots
 
<img src="Screenshot/Screenshot 2025-07-17 at 2.01.23 AM.png" alt="Product Page" width="700"/>


## 📁 Project Structure
```

project/
│
├── index.html          # Basic HTML layout
├── style.css           # Styling (optional)
└── script.js           # Core game logic
```
---

## 🧠 Logic Overview (`script.js`)

- **score Object**: Holds wins, losses, and ties.
  - Methods to `loadFromLocalStorage`, `saveToLocalStorage`, and `displayResult`.
- **result()**: Determines game outcome.
- **computerMove()**: Random choice generator.
- **action_perform()**: Main function triggered on button click.
- **resetScore()**: Clears all scores and updates UI.

---

## 🧪 Sample Code Snippet

```js
if (yourMove === comMove) return "Tie";
if (
  (yourMove === "Ball" && comMove === "Stamp") ||
  (yourMove === "Bat" && comMove === "Ball") ||
  (yourMove === "Stamp" && comMove === "Bat")
) {
  return "Win";
}
return "Lost";
```


---

## 🚀 How to Run
1.	Clone or download this repo.
2.	Open index.html in your browser.
3.	Click buttons to play.
4.	Reset score when needed.

---

## 🧰 Technologies Used
- JavaScript
- HTML5
- CSS3
- LocalStorage API

---

 ### 📜 License

This project is licensed under the MIT License.

---

 ### 🤝 Contributing

Feel free to fork this repo and submit pull requests to improve the game mechanics, UI, or add new features!



## 📬 Connect with Me

**Abdullah Nazmus-Sakib**  
👨‍💻 CSE Student @ Jahangirnagar University  
🔗 [LinkedIn](https://www.linkedin.com/in/abdullah-nazmus-sakib-04024b261/)  
🐙 [GitHub](https://github.com/AbdullahRFA)

---


Enjoy playing Ball-Bat-Stamp! 🎉

---
