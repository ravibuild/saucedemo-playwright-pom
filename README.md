# Playwright Automation Project

This repository contains automated test scripts written using [Playwright](https://playwright.dev/).
The project follows the **Page Object Model (POM)** design pattern for better maintainability and scalability of test cases.

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed on your machine:

* [Node.js](https://nodejs.org/) (v16 or above recommended)
* npm (comes with Node.js)

---

## 📂 Project Structure

* `tests/` → Contains test cases
* `pages/` → Contains Page Object Model (POM) files
* `playwright.config.ts` → Playwright test configuration

---

### 1. Clone the Repository

```bash
git clone https://github.com/ravibuild/saucedemo-playwright-pom
cd <your-repo-folder>
```

---

### 2. Initialize Playwright Project

Run the following command to set up Playwright with TypeScript support:

```bash
npm init playwright@latest
```

---

### 3. During Setup, Choose the Following Options

* **Language:** TypeScript
* **Add GitHub Actions for CI?** → No
* **Install Playwright Browsers?** → Yes
* **Override existing test config file?** → **False**

---

### 4. Run the Tests

```bash
npx playwright test
```

---

### 5. View the Test Report

```bash
npx playwright show-report
```

## 🤝 Contributing
Contributions are welcome!  
Please open an issue or submit a pull request for improvements. 
