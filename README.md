# 🛡️ InjeXcanner – SQL Injection Vulnerability Scanner

![Status](https://img.shields.io/badge/status-Completed-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Built With](https://img.shields.io/badge/built%20with-Python%20%7C%20HTML%20%7C%20CSS%20%7C%20JS-orange)

## 📌 Project Title
**InjeXcanner: A Web-Based SQL Injection Vulnerability Scanner with Severity Classification and Reporting**

## 👨‍💻 Team Members
- Muhammad Luqman Aziem  
- Nur Qurratu Aini Balqis  
- Amirul Haziq  
- Seri Mohd Nizam  
- Muhammad Iqbal

**Supervisor:** Pn. Noormelah Binti Shamsul Anuar  
**Institution:** German-Malaysian Institute (GMI)  
**Intake:** NWS/22/23A  
**Program:** Diploma in Network Security

---

## 💡 Project Overview

**InjeXcanner** is a complete web-based tool to detect, classify, and report SQL Injection (SQLi) vulnerabilities. It aims to help web developers and security analysts easily scan websites for SQLi issues, understand the severity, and generate reports with meaningful insights.

---

## 🎯 Objectives

- ✅ Detect Classic & Blind SQL Injection vulnerabilities
- ✅ Classify severity: Low / Medium / High
- ✅ Save results in MySQL database
- ✅ Real-time dashboard to view scan history
- ✅ Generate exportable reports (CSV/PDF)

---

## 🔧 Tools & Technologies

| Category        | Stack/Tool                         |
|----------------|-------------------------------------|
| Languages       | Python, HTML, CSS, JavaScript       |
| Frameworks      | Flask, Bootstrap, Chart.js          |
| Database        | MySQL                               |
| Vulnerability Scanner | SQLMap                         |
| Dev Tools       | PyCharm, VS Code                    |
| Hardware        | ASUS TUF Gaming F15, MSI 24" Monitor |

---

## 🧪 Key Features

### 1. 🔍 SQL Injection Detection
- Integration with SQLMap to identify SQLi vulnerabilities
- Supports GET/POST-based injections
- Detects Classic and Blind SQLi types

### 2. 🚨 Severity Classification
- Custom classification logic (Low / Medium / High)
- Based on exploitability, database access level, and injection type

### 3. 📊 Real-Time Dashboard
- Visual charts (pie/bar) of vulnerabilities
- Timestamped scanning history
- Built with Chart.js and Bootstrap

### 4. 💾 Database Integration
- Stores every scan result in MySQL
- Enables future analysis and historical tracking

### 5. 🧾 Reporting
- Scan results exportable to CSV/PDF
- Helpful for patching and documentation

---

## 📁 Project Structure
```
InjeXcanner/
├── scanner/                  # SQLMap Integration Scripts
├── web/                      # Frontend (HTML/CSS/JS)
├── dashboard/                # Real-Time Dashboard
├── classification/          # Severity Classification Logic
├── database/                # MySQL Scripts
├── reports/                 # Report Generator
├── app.py                   # Main Flask App
└── README.md                # Project Summary
```
---

## 🗓️ Timeline & Milestones

| Phase                       | Duration             | Team Members            |
|----------------------------|----------------------|--------------------------|
| SQL Injection Detection     | Jan 28 – Mar 21      | Seri, Aziem              |
| Severity Classification     | Mar 22 – Apr 21      | Iqbal, Haziq             |
| Real-Time Dashboard         | Apr 23 – May 20      | Aini                     |
| Final Testing & Deployment  | May 21 – May 30      | All Members              |

---

## 🧠 Iqbal's Contribution

- Designed and implemented **severity classification system**
- Defined severity logic and built sample datasets
- Assisted in frontend testing and dashboard UI integration
- Helped in syncing backend logic with SQLMap output

---

## ⚠️ Challenges Faced

- Syncing team schedules and task delegation
- Automating SQLMap execution in a secure way
- Dashboard real-time updates and error handling
- Time management under academic pressure

---

## ✅ Outcomes

- Successfully scanned and classified SQLi on test targets
- Real-time dashboard and reporting functional
- Full-stack web application completed and tested

---

## 📷 Screenshots (Coming Soon)
*(Upload screenshots in your repo’s `/screenshots` folder and embed below)*

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## Demo

Visit the project demo here: https://iqbaldiaz.github.io/injexcanner/

---

## 📬 Contact

If you have any questions or ideas for improvement:

**Muhammad Iqbal**  
Email: *your_email@example.com*  
GitHub: [@yourusername](https://github.com/yourusername)

---

## ⭐ Acknowledgments

- SQLMap (Open-source scanner)
- Flask, Chart.js & Bootstrap communities
- GMI lecturers and friends for feedback and guidance
