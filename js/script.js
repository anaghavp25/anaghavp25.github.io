/* ---------- Global Utilities ---------- */
const $ = window.jQuery; // shorthand

// Update footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Mobile nav toggle
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.nav-toggle');
  if (btn) {
    const list = document.querySelector('.nav-links');
    if (list) list.classList.toggle('open');
  }
});
  

/* ---------- Dynamic Greeting on Home ---------- */
(function dynamicGreeting(){
  const el = document.getElementById('greeting');
  if (!el) return;
  const h = new Date().getHours();
  let msg = "Hello";
  if (h < 12) msg = "Good morning";
  else if (h < 18) msg = "Good afternoon";
  else msg = "Good evening";
  el.textContent = msg + " 👋";
})();
/* ---------- Weather (OpenWeatherMap REST API) ---------- */
// Insert your API key below
const OWM_KEY = "4a5b31c5f3b5a1b44084c3626a65eaba";
async function fetchWeather(city){
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OWM_KEY}&units=metric`);
  if (!res.ok) throw new Error("Invalid city or network error");
  return await res.json();
}
document.addEventListener('click', async (e) => {
  if (e.target && e.target.id === 'get-weather') {
    const city = document.getElementById('city-input').value.trim();
    const out = document.getElementById('weather-result');
    const err = document.getElementById('weather-error');
    if (err) err.hidden = true;
    if (!city) {
      if (err){ err.hidden = false; err.textContent = "Please enter a city name."; }
      return;
    }
    out.innerHTML = "Loading...";
    try {
      const data = await fetchWeather(city);
      const icon = data.weather?.[0]?.icon;
      const desc = data.weather?.[0]?.description ?? "—";
      const temp = Math.round(data.main?.temp);
      out.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
        <div><strong>${data.name}</strong><br>${temp}°C · ${desc}</div>`;
    } catch (ex) {
      out.innerHTML = "";
      if (err){ err.hidden = false; err.textContent = "Could not fetch weather. Check city name or try again."; }
      console.error(ex);
    }
  }
});



 /* ---------- Dev.to Feed (Articles of Interest) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("devto-list");
  const errorBox = document.getElementById("devto-error");

  if (!list) return; // don’t run if not on Home page

  // You can fetch by username (if you have one) or by tag
  // Example with tag: #datascience
  const apiURL = "https://dev.to/api/articles?tag=datascience&per_page=5";

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch Dev.to articles");
      }
      return response.json();
    })
    .then(data => {
      list.innerHTML = ""; // clear placeholder

      if (data.length === 0) {
        list.innerHTML = "<li>No articles found.</li>";
        return;
      }

      data.slice(0, 5).forEach(article => {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${article.url}" target="_blank" rel="noopener">
            ${article.title}
          </a>
        `;
        list.appendChild(li);
      });

      list.setAttribute("aria-busy", "false");
    })
    .catch(error => {
      errorBox.hidden = false;
      errorBox.textContent = "Could not load articles. Please try again later.";
      console.error(error);
    });
});


/* ---------- Contact Form Validation ---------- */
document.addEventListener('submit', (e) => {
  const form = e.target.closest('#contact-form');
  if (!form) return;
  e.preventDefault();
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');
  const status = document.getElementById('form-status');

  let valid = true;
  [name, email, message].forEach(inp => {
    inp.classList.remove('invalid');
    if (!inp.value.trim()) { inp.classList.add('invalid'); valid = false; }
  });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  if (!emailOk){ email.classList.add('invalid'); valid = false; }

  if (!valid){
    if (status) status.textContent = "Please fill all fields correctly.";
    return;
  }
  // Simulated success (no backend on GitHub Pages)
  if (status) status.textContent = "Thanks! Your message has been noted.";
  form.reset();
});


/* ---------- Simple Slideshow ---------- */
(function(){
  const container = document.querySelector('.slideshow');
  if (!container) return;
  const slides = Array.from(container.querySelectorAll('.slide'));
  let idx = 0;
  const show = (i) => {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  };
  container.querySelector('.prev').addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length; show(idx);
  });
  container.querySelector('.next').addEventListener('click', () => {
    idx = (idx + 1) % slides.length; show(idx);
  });
})();
