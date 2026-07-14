const PORTFOLIO_DATA = {
      profile: {
        name: "BHARATHI B",
        title: "Full-Stack Developer",
        subtitle: "I create robust backends and premium responsive frontends using structured, performance-oriented vanilla logic.",
        avatar: "assets/image copy.png",
        email: "bharathi.b@example.com",
        github: "https://github.com/bharathinirosha690-hue",
        linkedin: "https://www.linkedin.com/in/bharathi-b-balasubramanian-8b7b383b2",
        twitter: "https://twitter.com",
        stats: [
          { value: 3, suffix: " rd", label: "B.Tech" },
          { value: 10, suffix: "+", label: "Completed Projects" },
          { value: 100, suffix: "%", label: "Learning Progress" },
          { value: 12, suffix: "", label: "Open Source Utilities" }
        ]
      },
      timeline: [
        {
          year: "2026 - Present",
          role: "MERN Stack Developer (Student)",
          company: "Self Learning & Personal Projectss",
          description: "Developing responsive full-stack web applications using the MERN Stack. Building RESTful APIs, integrating MongoDB databases, and creating modern React.js interfaces with reusable components while continuously improving problem-solving and software development skills."
        },
        {
          year: "2025",
          role: "Full-Stack Web Developer",
          company: "Independent Projects",
          description: "Building scalable full-stack applications with MongoDB, Express.js, React.js, and Node.js. Focused on responsive UI development, secure backend APIs, database management, and deploying modern web applications."
        },
        {
          year: "2024 - 2025",
          role: "MERN Stack Developer",
          company: "ByteCraft Studio",
          description: "Maintained clean frontend layouts and restful microservices. Standardized cross-device layouts for multi-platform dashboards and integrated payment processing integrations."
        },
        {
          year: "2024",
          role: "Full-Stack Developer (Student)",
          company: "Portfolio & Real-World Practice",
          description: " Creating feature-rich web applications using the MERN Stack. Experienced in React.js frontend development, Express.js and Node.js backend services, MongoDB database integration, REST API development, Git/GitHub version control, and responsive UI design."
        }
      ],
      skills: [
        {
          category: "Frontend Stack",
          items: [
            { name: "Vanilla JavaScript (ES6+)", level: 95 },
            { name: "TypeScript Core", level: 90 },
            { name: "HTML5 / Semantic Layouts", level: 92 },
            { name: "CSS3 / Grid & Flexbox / Sass", level: 94 }
          ]
        },
        {
          category: "Backend & Databases",
          items: [
            { name: "Node.js (Express / Fastify)", level: 88 },
            { name: "Python Core (FastAPI / Django)", level: 82 },
            { name: "SQL Databases (PostgreSQL / MySQL)", level: 86 },
            { name: "NoSQL Stores (MongoDB / Redis)", level: 80 }
          ]
        },
        {
          category: "DevOps & Tools",
          items: [
            { name: "Docker / Containerization", level: 78 },
            { name: "Git Version Control", level: 95 },
            { name: "AWS Services (S3 / Lambda / EC2)", level: 81 },
            { name: "CI/CD & GitHub Actions", level: 84 }
          ]
        }
      ],
      projects: [
        {
          title: "Car Dekho E-Commerce Platform",
          category: "E-Commerce",
          description: "Discover thousands of new and pre-owned vehicles from trusted brands. Compare prices, explore features, and find the perfect car that matches your lifestyle and budget.",
          image: "./assets/p1.png",
          tags: ["HTML", "CSS",],
          link: "https://github.com"
        },
        {
          title: "Hospital Management Dashboard",
          category: "DevOps & SaaS",
          description: "Efficiently manage patients, doctors, appointments, billing, pharmacy, laboratory, and medical records through one secure and intelligent healthcare platform.",
          image: "assets/p2.png",
          tags: ["HTML", "bootstrap", "CSS",],
          link: "https://github.com"
        },
        {
          title: "Pet Adaption Platform",
          category: "Data Visualization",
          description: "Give a loving pet a second chance at life. Browse adorable dogs, cats, rabbits, birds, and other rescue animals waiting for their forever homes.",
          image: "assets/p3.png",
          tags: ["HTML", "JavaScript", "CSS ",],
          link: "https://github.com"
        },
        {
          title: "Iron Pulse Fitness Tracker",
          category: "Collaboration",
          description: "SeAchieve your fitness goals with expert trainers, modern equipment, personalized workout plans, and a motivating community that keeps you moving every day.",
          image: "assets/p4.png",
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          link: "https://github.com"
        },
        {
          title: "Restaurant Menu Builder",
          category: "Productivity",
          description: "Savor delicious flavors crafted by expert chefs using the freshest ingredients. From traditional favorites to international cuisine, every meal is prepared with passion and perfection.",
          image: "assets/p5.png",
          tags: ["HTML", "CSS", "JavaScript",],
          link: "https://github.com"
        },
        {
          title: "Library of Components",
          category: "Design System",
          description: "Access thousands of books, journals, research papers, magazines, and eBooks anytime, anywhere. Expand your knowledge through a modern digital learning platform.",
          image: "assets/p6.png",
          tags: ["HTML", "CSS", "JavaScript",],
          link: "https://github.com"
        }
      ]
    };

    
      //  B. Initialization & Global DOM Listeners
      
    document.addEventListener("DOMContentLoaded", () => {
      // 1. Render data into DOM
      populateProfileData();
      renderStats();
      renderDynamicTimeline(); // Dynamically builds the entire Experience section
      renderSkills();
      setupProjectsBatchLoading();
      
      // 2. Setup behaviors
      initThemeHandler();
      initMobileMenu();
      initScrollReveal();
      initActiveLinkHighlight();
      initContactFormValidation();
      initBackToTop();
      setupCursorSpotlight();
    });

    
      //  C. Dynamic Data Rendering Functions
     
    
    // Populate profile description & headers
    function populateProfileData() {
      const data = PORTFOLIO_DATA.profile;
      
      // Hero
      document.getElementById("hero-name").innerText = data.name + " ";
      document.getElementById("profile-avatar").src = data.avatar;
      
      // Setup dynamic typing tagline
      initTypingEffect(data.subtitle);
      
      // Contact
      document.getElementById("contact-email").innerText = data.email;
      document.getElementById("contact-email").href = `mailto:${data.email}`;
      
      // Footer
      document.getElementById("footer-copyright").innerHTML = `&copy; ${new Date().getFullYear()} ${data.name}. All rights reserved.`;
      document.getElementById("social-github").href = data.github;
      document.getElementById("social-linkedin").href = data.linkedin;
      document.getElementById("social-twitter").href = data.twitter;
    }

    // Typing effect for subtitle
    function initTypingEffect(text) {
      const target = document.getElementById("hero-desc");
      if (!target) return;
      
      let index = 0;
      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";
      cursor.innerHTML = "&#124;"; // | symbol
      
      function type() {
        if (index < text.length) {
          target.innerText = text.substring(0, index + 1);
          target.appendChild(cursor);
          index++;
          setTimeout(type, 20); // Fast typing speed
        } else {
          target.appendChild(cursor);
        }
      }
      
      type();
    }

    // Render Stats inside Hero
    function renderStats() {
      const container = document.getElementById("stats-container");
      if (!container) return;
      
      container.innerHTML = PORTFOLIO_DATA.profile.stats.map(stat => `
        <div class="stat-card">
          <div class="stat-number-wrapper">
            <span class="stat-number" data-target="${stat.value}">0</span>
            <span class="stat-suffix">${stat.suffix}</span>
          </div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('');
      
      // Activate count-up using IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStatsCountUp(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(container);
    }

    function animateStatsCountUp(container) {
      const counters = container.querySelectorAll(".stat-number");
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        let current = 0;
        const duration = 1200; // Total animation milliseconds
        const stepTime = Math.max(Math.floor(duration / target), 15);
        
        const timer = setInterval(() => {
          current += Math.ceil(target / (duration / stepTime));
          if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
          } else {
            counter.innerText = current;
          }
        }, stepTime);
      });
    }

    // Dynamically generate and insert Experience Timeline Section via JS
    function renderDynamicTimeline() {
      const main = document.querySelector("main");
      const skillsSection = document.getElementById("skills");
      if (!main || !skillsSection) return;
      
      // Create Section node
      const section = document.createElement("section");
      section.id = "experience";
      section.className = "section-reveal";
      
      // Build inner structure
      section.innerHTML = `
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">My History</span>
            <h2 class="section-title">Education</h2>
            <div class="section-line"></div>
          </div>
          
          <div class="timeline-container">
            <div class="timeline-line"></div>
            ${PORTFOLIO_DATA.timeline.map((item, index) => `
              <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                <div class="timeline-dot"></div>
                <div class="timeline-content card">
                  <span class="timeline-date">${item.year}</span>
                  <h3 class="timeline-role">${item.role}</h3>
                  <h4 class="timeline-company">${item.company}</h4>
                  <p class="timeline-desc">${item.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
      // Insert dynamically before Skills Section
      main.insertBefore(section, skillsSection);
    }

    // Render Skills Section with progress bars
    function renderSkills() {
      const grid = document.getElementById("skills-grid");
      if (!grid) return;
      
      grid.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
        <div class="skills-category-card card">
          <h3 class="category-title">${cat.category}</h3>
          <div class="skills-list">
            ${cat.items.map(skill => `
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">${skill.name}</span>
                  <span class="skill-percentage" data-target="${skill.level}">0%</span>
                </div>
                <div class="skill-bar-container">
                  <div class="skill-bar" data-level="${skill.level}"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
      
      // IntersectionObserver to animate skill bar width & counter
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkillCard(entry.target);
            skillObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll(".skills-category-card").forEach(card => {
        skillObserver.observe(card);
      });
    }

    function animateSkillCard(card) {
      const bars = card.querySelectorAll(".skill-bar");
      const labels = card.querySelectorAll(".skill-percentage");
      
      bars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = `${level}%`;
      });
      
      labels.forEach(label => {
        const target = parseInt(label.getAttribute("data-target"), 10);
        let current = 0;
        const interval = setInterval(() => {
          if (current >= target) {
            label.innerText = `${target}%`;
            clearInterval(interval);
          } else {
            current++;
            label.innerText = `${current}%`;
          }
        }, 15);
      });
    }

    // Projects Batch Loading & Render
    let currentProjectCount = 3; // Show 3 projects initially
    
    function setupProjectsBatchLoading() {
      const loadMoreBtn = document.getElementById("load-more-btn");
      renderProjectsBatch();
      
      if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
          currentProjectCount += 3;
          renderProjectsBatch();
          
          // Re-trigger scroll-reveal check for newly revealed items
          setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
          }, 100);
        });
      }
    }

    function renderProjectsBatch() {
      const grid = document.getElementById("projects-grid");
      const loadMoreBtn = document.getElementById("load-more-btn");
      if (!grid) return;
      
      const allProjects = PORTFOLIO_DATA.projects;
      const visibleList = allProjects.slice(0, currentProjectCount);
      
      grid.innerHTML = visibleList.map(proj => `
        <div class="project-card card section-reveal visible">
          <div class="project-image-wrapper">
            <img src="${proj.image}" alt="${proj.title}" class="project-image" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'">
            <div class="project-overlay">
              <a href="${proj.link}" target="_blank" class="project-link-btn" aria-label="Github code details"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
          <div class="project-info">
            <span class="project-category">${proj.category}</span>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-tags">
              ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
      
      // Hide button if all projects are displayed
      if (currentProjectCount >= allProjects.length && loadMoreBtn) {
        loadMoreBtn.style.display = "none";
      }
    }

    /* ==========================================================================
       D. Interactive UI Features
       ========================================================================== */

    // Dark/Light Theme Handler
    function initThemeHandler() {
      const themeBtn = document.getElementById("theme-btn");
      const htmlEl = document.documentElement;
      
      // Check saved theme or default to dark
      const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
      htmlEl.setAttribute("data-theme", savedTheme);
      updateThemeIcon(savedTheme);
      
      themeBtn.addEventListener("click", () => {
        const currentTheme = htmlEl.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        htmlEl.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        updateThemeIcon(newTheme);
      });
    }

    function updateThemeIcon(theme) {
      const moonIcon = document.querySelector("#theme-btn .fa-moon");
      const sunIcon = document.querySelector("#theme-btn .fa-sun");
      if (theme === "light") {
        moonIcon.style.opacity = "0";
        sunIcon.style.opacity = "1";
      } else {
        moonIcon.style.opacity = "1";
        sunIcon.style.opacity = "0";
      }
    }

    // Spotlight cursor effect
    function setupCursorSpotlight() {
      const spotlight = document.getElementById("cursor-spotlight");
      if (!spotlight) return;
      
      // Only enable spotlight on desktop screens
      if (window.matchMedia("(min-width: 1024px)").matches) {
        spotlight.style.display = "block";
        
        document.addEventListener("mousemove", (e) => {
          spotlight.style.left = `${e.clientX}px`;
          spotlight.style.top = `${e.clientY}px`;
        });
      }
    }

    // Scroll Reveal Intersection Observer
    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.08 });
      
      // Observe all elements with section-reveal class
      document.querySelectorAll(".section-reveal").forEach(el => {
        observer.observe(el);
      });
    }

    // Mobile Hamburger Menu Navigation Toggle
    function initMobileMenu() {
      const hamburger = document.getElementById("hamburger-btn");
      const menu = document.getElementById("nav-menu");
      const links = menu.querySelectorAll("a");
      
      hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburger.classList.toggle("open");
        menu.classList.toggle("open");
      });
      
      // Close menu when clicking nav link
      links.forEach(link => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("open");
          menu.classList.remove("open");
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove("open");
          menu.classList.remove("open");
        }
      });
    }

    // Active Navigation Highlighting on Scroll
    function initActiveLinkHighlight() {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-links a");
      
      const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -55% 0px", // Focus area on center screen
        threshold: 0
      };
      
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute("id");
            
            navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${activeId}`) {
                link.classList.add("active");
              }
            });
          }
        });
      }, observerOptions);
      
      sections.forEach(sec => {
        sectionObserver.observe(sec);
      });
    }

    // Client-side Contact Form Validation & Success Overlay
    function initContactFormValidation() {
      const form = document.getElementById("contact-form");
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      
      const overlay = document.getElementById("form-success-overlay");
      const closeBtn = document.getElementById("success-close-btn");
      
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // 1. Validate Name
        if (nameInput.value.trim().length < 3) {
          showError(nameInput, "name-error");
          isValid = false;
        } else {
          hideError(nameInput, "name-error");
        }
        
        // 2. Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          showError(emailInput, "email-error");
          isValid = false;
        } else {
          hideError(emailInput, "email-error");
        }
        
        // 3. Validate Message
        if (messageInput.value.trim().length < 10) {
          showError(messageInput, "message-error");
          isValid = false;
        } else {
          hideError(messageInput, "message-error");
        }
        
        // Show success overlay on valid submission
        if (isValid) {
          overlay.classList.add("active");
          form.reset();
        }
      });
      
      // Close overlay
      closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
      });
      
      // Real-time input checking
      nameInput.addEventListener("input", () => {
        if (nameInput.value.trim().length >= 3) hideError(nameInput, "name-error");
      });
      emailInput.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value.trim())) hideError(emailInput, "email-error");
      });
      messageInput.addEventListener("input", () => {
        if (messageInput.value.trim().length >= 10) hideError(messageInput, "message-error");
      });
    }

    function showError(input, errorId) {
      input.classList.add("is-invalid");
      document.getElementById(errorId).style.display = "flex";
    }

    function hideError(input, errorId) {
      input.classList.remove("is-invalid");
      document.getElementById(errorId).style.display = "none";
    }

    // Back to Top Button
    function initBackToTop() {
      const btn = document.getElementById("back-to-top-btn");
      
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          btn.classList.add("visible");
        } else {
          btn.classList.remove("visible");
        }
      });
      
      btn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }