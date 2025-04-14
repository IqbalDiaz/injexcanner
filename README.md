# InjeXcanner - SQL Injection Scanner

InjeXcanner is a web-based SQL Injection Scanner designed to detect and categorize SQL Injection vulnerabilities in web applications, featuring real-time detection, severity classification, and a user-friendly dashboard.

**Project Title**: SQL Injection Scanner (InjeXcanner)  
**Group Members**:  
- Muhammad Luqman Aziem  
- Nur Qurratu Aini Balqis  
- Amirul Haziq  
- Seri Mohd Nizam  
- Iqbal

**Supervisor**: Noormelah Binti Shamsul Anuar  
**Institution**: GMI (German-Malaysian Institute)  
**Intake**: NWS/22/23A

## Demo

Visit the project demo here: [https://iqbaldiaz.github.io/injexcanner/](#)

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

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/InjeXcanner.git
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up the MySQL database by running the schema in `dev/db/schema.sql`.

4. Run the application:

   ```bash
   python app.py
   ```

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

3. **Dashboard (4/23/2025 - 5/20/2025)**  
   - Create a user-friendly dashboard to display scanning results.

## Tasks

### SQL Injection Detection

- Modify and develop the source code to detect Classic and Blind SQL Injection vulnerabilities.
- Integrate the scanner with the web application.

### Severity Classification

- Define the classification criteria for vulnerabilities (e.g., high, medium, low).
- Develop a system to categorize vulnerabilities based on severity.
- Integrate the classification system with the SQL Injection scanner.

### Dashboard

- Design and develop a dashboard to display the results of SQL Injection scans.
- Implement historical data tracking and reporting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This format organizes your FYP information into a clear structure similar to the example, making it easy for others to understand the setup, tasks, and overall project structure.