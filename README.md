# InjeXcanner - SQL Injection Scanner

<<<<<<< HEAD
InjeXcanner is a web-based SQL Injection Scanner designed to detect and categorize SQL Injection vulnerabilities in web applications, featuring real-time detection, severity classification, and a user-friendly dashboard.

**Project Title**: SQL Injection Scanner (InjeXcanner)  
=======
Demo Website: https://iqbaldiaz.github.io/injexcanner/

**Project Title**: SQL Injection Scanner (InjeXcanner)

>>>>>>> ba8a3abbd4a80055af8f3d79319676da9137495d
**Group Members**:  
- Muhammad Luqman Aziem  
- Nur Qurratu Aini Balqis  
- Amirul Haziq  
- Seri Mohd Nizam  
<<<<<<< HEAD
- Iqbal [You]  

**Supervisor**: Noormelah Binti Shamsul Anuar  
**Institution**: GMI (Global Matedu International)  
**Intake**: NWS/22/23A

## Demo

Visit the project demo here: [Demo link](#)

![Mockup demo](screenshots/pic.jpg)  
Product mockup created with [Magic Mockups](http://magicmockups.com/).

## Contents

- [Folder and file structure](#folder-and-file-structure)
- [Requirements](#requirements)
    - [Python and MySQL](#python-and-mysql)
    - [Libraries](#libraries)
- [How to start](#how-to-start)
- [Project milestones](#project-milestones)
- [Tasks](#tasks)
    - [SQL Injection Detection](#sql-injection-detection)
    - [Severity Classification](#severity-classification)
    - [Real-Time Dashboard](#real-time-dashboard)
- [License](#license)

## Folder and file structure

```
./
├── app.py                                   * Main Python script for running the scanner
├── requirements.txt                        * Python dependencies
├── README.md                               * Project documentation
|
├── screenshots/                            * Mockup and screenshot files
|   ├── demo.jpg
|
├── dev/                                    * Source code
|   ├── scanner/                            * SQL Injection scanning logic
|   ├── db/                                 * Database schema and queries
|   ├── frontend/                           * HTML, CSS, JavaScript for dashboard
|   └── reports/                            * Scripts for generating reports
|
└── build/                                  * Production build
    ├── index.html                          * Main website
    ├── assets/                             * Minified static files
        ├── css/
        ├── js/
        └── images/
```

## Requirements

- **Python**: Version 3.x  
- **MySQL**: Database for storing scan results  
- **Libraries**:  
  - `Flask` (for web interface)
  - `SQLAlchemy` (for database interaction)
  - `SQLMap` (for SQL injection detection)
  - `Pandas` (for report generation)

### Python and MySQL

Make sure to have Python and MySQL installed. You can set up the database by running the schema in `dev/db/schema.sql`.

### Libraries

Install dependencies by running:

```bash
pip install -r requirements.txt
```

## How to start

### Steps to set up:
=======
- Iqbal [You]

**Supervisor**: Noormelah Binti Shamsul Anuar

**Institution**: GMI (Global Matedu International)

**Intake**: NWS/22/23A

## Overview

InjeXcanner is a web-based SQL Injection Scanner designed to detect and categorize SQL Injection vulnerabilities on websites. The tool features real-time detection, severity classification, and a user-friendly dashboard for displaying results.

## Features

1. **SQL Injection Detection**  
   - Detects Classic and Blind SQL Injection vulnerabilities in web applications.
   - Uses advanced techniques for scanning and identifying vulnerabilities in real time.

2. **Severity Classification**  
   - Classifies vulnerabilities by severity level to prioritize fixes based on potential impact.

3. **Real-Time Dashboard**  
   - Displays scan results in a clear and easy-to-read interface.
   - Includes historical data for tracking scanning results over time.

4. **Reporting**  
   - Generates detailed reports for analysis and documentation.

## Technologies Used

- **Languages**: Python, HTML, CSS, JavaScript
- **Database**: MySQL
- **Tools**: PyCharm, Visual Studio Code, SQLMap

## Development Progress

### FYP01 (Research & Design Phase)
- Research on SQL Injection types.
- Initial design and planning of the project.
- Setup environment and initial testing framework.

### FYP02 (Implementation Phase)
1. **SQL Injection Detection (1/28/2025 - 3/21/2025)**  
   - Modify source code (Seri, Aziem)  
   - Develop scanner (Seri, Aziem)  
   - Integrate scanner with website (Seri, Aziem)  
   - Set up testing environment (Seri, Aziem)  
   - Test program (Seri, Aziem)  

2. **Severity Classification (3/22/2025 - 4/21/2025)**  
   - Define classification criteria (Iqbal, Haziq)  
   - Develop classification system (Iqbal, Haziq)  
   - Create sample dataset (Iqbal, Haziq)  
   - Integrate classification system with scanner (Iqbal, Haziq)  

3. **Real-Time Dashboard (4/23/2025 - 5/20/2025)**  
   - Design dashboard layout (Aini)  
   - Create database for scanning history (Aini)  
   - Develop the web interface (Aini)  
   - Test the system (All members)  

## Database Schema

- **Table: Scan_Results**
  - `id` (INT, Primary Key)
  - `scan_date` (DATETIME)
  - `vulnerability_type` (VARCHAR)
  - `severity` (VARCHAR)
  - `website_url` (VARCHAR)

## Installation
>>>>>>> ba8a3abbd4a80055af8f3d79319676da9137495d

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/InjeXcanner.git
   ```

<<<<<<< HEAD
2. Install dependencies:
=======
2. Install required dependencies:
>>>>>>> ba8a3abbd4a80055af8f3d79319676da9137495d

   ```bash
   pip install -r requirements.txt
   ```

<<<<<<< HEAD
3. Set up the MySQL database by running the schema in `dev/db/schema.sql`.
=======
3. Set up the MySQL database by running the provided schema.
>>>>>>> ba8a3abbd4a80055af8f3d79319676da9137495d

4. Run the application:

   ```bash
   python app.py
   ```

<<<<<<< HEAD
   This will start the scanner and the web interface on your local machine.

## Project milestones

### FYP01 (Research & Design Phase)
- Research on SQL Injection types
- Initial design and planning of the project
- Environment setup and basic framework development

### FYP02 (Implementation Phase)
1. **SQL Injection Detection (1/28/2025 - 3/21/2025)**  
   - Develop and integrate the SQL Injection scanner.

2. **Severity Classification (3/22/2025 - 4/21/2025)**  
   - Define criteria for classifying the severity of vulnerabilities.

3. **Real-Time Dashboard (4/23/2025 - 5/20/2025)**  
   - Create a user-friendly dashboard to display scanning results.

## Tasks

### SQL Injection Detection

- Modify and develop the source code to detect Classic and Blind SQL Injection vulnerabilities.
- Integrate the scanner with the web application.

### Severity Classification

- Define the classification criteria for vulnerabilities (e.g., high, medium, low).
- Develop a system to categorize vulnerabilities based on severity.
- Integrate the classification system with the SQL Injection scanner.

### Real-Time Dashboard

- Design and develop a real-time dashboard to display the results of SQL Injection scans.
- Implement historical data tracking and reporting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This format organizes your FYP information into a clear structure similar to the example, making it easy for others to understand the setup, tasks, and overall project structure.
=======
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to our supervisor, Noormelah Binti Shamsul Anuar, for guidance and support.
- Thanks to the tools and libraries used throughout the development, including PyCharm, SQLMap, and Visual Studio Code.

---

For further details or questions, feel free to contact me at [your-email@example.com].

```

This README provides a comprehensive summary of your project, covering the main details and phases of your development. Feel free to customize it based on your actual repository and progress.
>>>>>>> ba8a3abbd4a80055af8f3d79319676da9137495d
