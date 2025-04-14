# InjeXcanner - SQL Injection Scanner

Demo Website: https://iqbaldiaz.github.io/injexcanner/

**Project Title**: SQL Injection Scanner (InjeXcanner)

**Group Members**:  
- Muhammad Luqman Aziem  
- Nur Qurratu Aini Balqis  
- Amirul Haziq  
- Seri Mohd Nizam  
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

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/InjeXcanner.git
   ```

2. Install required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up the MySQL database by running the provided schema.

4. Run the application:

   ```bash
   python app.py
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to our supervisor, Noormelah Binti Shamsul Anuar, for guidance and support.
- Thanks to the tools and libraries used throughout the development, including PyCharm, SQLMap, and Visual Studio Code.

---

For further details or questions, feel free to contact me at [your-email@example.com].

```

This README provides a comprehensive summary of your project, covering the main details and phases of your development. Feel free to customize it based on your actual repository and progress.
