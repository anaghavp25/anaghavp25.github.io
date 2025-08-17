# 🌐 Anagha V P | Portfolio Website

This repository contains the source code for my personal **portfolio website**, hosted using **GitHub Pages** at:

👉 [https://anaghavp25.github.io](https://anaghavp25.github.io)

The portfolio highlights my academic journey, technical skills, projects, and creative interests. It also integrates APIs, embedded content, and an interactive contact form.

---

## 📌 Features

### 🏠 Home Page (`index.html`)
- Responsive **navigation bar** with logo and profile photo.  
- **Hero Section** introducing me as an aspiring Data Analyst and artist.  
- **Articles of Interest** – fetches curated articles from [Dev.to API](https://developers.forem.com/api).  
- **Live Weather Checker** – uses [OpenWeatherMap REST API](https://openweathermap.org/api) to display real-time weather by city.  
- **Dynamic Greeting** – changes between Good Morning/Afternoon/Evening based on time.  

### 👤 Profile Page (`profile.html`)
- **Biography** – my journey as a B.Tech AI & DS student.  
- **Career Goals** – short and long-term objectives.  
- **Interests** – coding, AI tools, digital art, dance, and teaching.  
- **Profile Photo** for personalization.  

### 📄 CV Page (`cv.html`)
- **About Me** – personal statement and career outlook.  
- **Education** – B.Tech, Higher Secondary, and High School with CGPA.  
- **Skills** – programming (Python, Java, C/C++, SQL, HTML, CSS, JS) plus problem-solving, leadership, adaptability, etc.  
- **Experience** – IT teacher, hackathons, NSS volunteer, and school roles.  
- **Hobbies** – drawing, dancing, crafts.  
- **Languages** – English, Malayalam, Tamil, Hindi.  
- **Embedded CV PDF** – inline viewer + download link.  
- **Contact Info** – email, LinkedIn, phone, and address.  

### 🎓 Education Page (`education.html`)
- **Academic Qualifications** – B.Tech at RSET, schooling at St. Teresa’s AIHSS.  
- **Programming Languages** – Python, Java, C, C++, JS, SQL.  
- **Tools & Technologies** – Git, GitHub, Linux, VS Code.  
- **Embedded Google Maps (iframe)** – location of Rajagiri School of Engineering and Technology.  

### ✉️ Contact Page (`contact.html`)
- **Contact Form** – name, email, and message fields with client-side validation.  
- **Live Form Validation** – ensures correct inputs (email regex + empty field checks).  
- **Embedded LinkedIn (iframe)** – direct professional network preview.  
- **Quick Links** – direct email and LinkedIn profile.  

---

## 🎨 Styling (`css/style.css`)
- Global design system using **CSS variables**.  
- **Dark theme** with accent colors.  
- **Responsive grid** layouts (`grid-2`, `thumb-grid`).  
- **Card-based design** for sections, iframes, and article feeds.  
- **Sticky, glass-like navbar** with blur and hover effects.  
- **Responsive navigation** with mobile-friendly toggle.  

---

## ⚙️ Functionality (`js/script.js`)
- **Footer Year Auto-update**.  
- **Mobile Nav Toggle**.  
- **Dynamic Greeting** (Morning/Afternoon/Evening).  
- **Weather API Integration** with live results and icons.  
- **Dev.to API Integration** to fetch and display articles.  
- **Contact Form Validation** with simulated success (since GitHub Pages has no backend).  
- **Simple Slideshow** component for projects/gallery.  

---

## 📂 Project Structure

├── index.html # Home Page
├── profile.html # About/Profile Page
├── cv.html # CV / Resume Page
├── education.html # Education Page
├── contact.html # Contact Page
├── css/
│ └── style.css # Stylesheet
├── js/
│ └── script.js # JavaScript logic
└── images/ # Profile photo, CV PDF, and assets
