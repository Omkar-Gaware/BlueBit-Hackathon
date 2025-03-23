# PS7 Job & Internship Aggregator

## 🚀 Overview
**Hirely** is a powerful **Chrome extension** designed to simplify your job search. Instead of switching between multiple platforms like LinkedIn, Wellfound, and Indeed, this extension aggregates job listings in one place. With intuitive search and filter options, users can find relevant opportunities faster and apply directly. **Extensions offer quick access and seamless integration**, saving time compared to traditional websites.

## 🌟 Why Choose a Chrome Extension?
- **Instant Access**: Access job listings without opening multiple tabs.
- **Efficiency**: Easily search and filter through jobs while browsing other sites.
- **Convenience**: Receive real-time notifications about new jobs matching your preferences.
- **Seamless Application**: Apply directly with one click from the extension.

## 🧑‍💻 Tech Stack
### **Frontend**
- **HTML, CSS, JavaScript**: Create a responsive and interactive extension interface.

### **Backend**
- **Node.js & Express.js**: Efficient server management.
- **Google APIs**: Role-based job categorization.
- **Third-Party Job APIs**: Seamless integration with LinkedIn, Wellfound, and Indeed.

### **Database**
- **MongoDB**: Stores job listings and user preferences.

## 🧠 How It Works
### **1. Fetching Job Data**
- The extension connects to external job APIs.
- Job details like title, company, location, and application links are gathered.

### **2. Role-Based Categorization**
- Google APIs analyze job descriptions.
- Jobs are categorized based on keywords and relevant user roles.

### **3. Personalized User Dashboard**
- Users select their preferred roles.
- AI-powered recommendations offer the most suitable jobs.
- Clicking on a listing redirects users to the application page.

## 🛠️ How to Set Up
1. **Clone the Repository**
```sh
git clone https://github.com/your-username/PS7-Job-Aggregator.git
cd PS7-Job-Aggregator
```

2. **Install Dependencies**
```sh
npm install
```

3. **Set Environment Variables**
- Create a `.env` file.
- Add your API keys and database credentials.

4. **Run the Application**
```sh
npm start
```

5. **Add as Chrome Extension**
- Go to `chrome://extensions/`
- Enable **Developer mode**.
- Click on **Load unpacked**.
- Select the project folder to load the extension.

## 🤝 How to Contribute
1. **Fork the Repository**
2. **Create a New Branch**
```sh
git checkout -b feature/your-feature
```
3. **Make Changes & Commit**
```sh
git commit -m "Add your feature"
```
4. **Submit a Pull Request**

## 📝 License
This project is licensed under the **MIT License**.

---

## 🖼️ Interface Screenshots

### **1. Extension Popup**
![image](https://github.com/user-attachments/assets/9243d56d-658c-4f0d-a940-9fef59126ec8)


### **2. Job Search Results**
![image](https://github.com/user-attachments/assets/99ab2da1-59d0-418e-81dc-c139ebea8cc3)

### **3. Role-Based Recommendations**
![image](https://github.com/user-attachments/assets/c7771db9-b850-480c-9404-9b2582cad23f)
![image](https://github.com/user-attachments/assets/a9f83477-e811-41f5-a68f-c002020a312d)


### **4. Job Details**
![image](https://github.com/user-attachments/assets/1f4c7cb5-0559-4820-805a-6b3f5510148b)
![image](https://github.com/user-attachments/assets/20d93bbd-699a-49fc-9ee7-fb6446ffb32b)




