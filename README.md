# Adaptive E-Learning Engine

**Name:** RONALD FRANCO GALENDEZ 
**Section:** CS4D 
 

---

## Overview
This project implements a rule-based adaptive engine for an e-learning platform. It dynamically assesses learner metrics (assessment accuracy, completion speed, and historical performance trends) to adjust difficulty and curriculum delivery in real time.

---

## Adaptive Rules Logic

* **Rule 1:**  
  * **If:** `quizScore < 60%` AND `consecutiveLowScores >= 2`  
  * **Then:** Lower module difficulty to `Foundational` and inject interactive prerequisite review drills.
* **Rule 2:**  
  * **If:** `quizScore >= 90%` AND `timeSpentMinutes < 15`  
  * **Then:** Unlock the `Advanced Project-Based Track` and present a skip-ahead option to bypass redundant lessons.

---

## Explanation of Personalization Logic

1. **Targeted Remediation (Rule 1):** Static learning systems often penalize struggling students by repeating identical failed content, causing frustration and disengagement. Rule 1 detects persistent difficulty and intervenes before cognitive burnout occurs by automatically shifting the pedagogical approach to scaffolded, bite-sized prerequisite concepts.
2. **Engagement & Flow State Maintenance (Rule 2):** High performers risk disengagement if forced through low-friction content they have already mastered. Rule 2 rewards both accuracy and speed by eliminating filler content, immediately elevating the challenge level to maintain the user's optimal "flow" state.

---

## How to Run the Code

### Prerequisites
* [Node.js](https://nodejs.org/) (v16.0 or higher)

### Execution
1. Clone this repository:
   ```bash
   git clone [https://github.com/m3izu/Galendez-Elective-Activity1.git](https://github.com/m3izu/Galendez-Elective-Activity1.git)
   cd YOUR_REPOSITORY
