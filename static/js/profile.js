document.addEventListener('DOMContentLoaded', () => {

    // --- Data ---
    const portfolioData = {
        home: { name: "Vamsi Krishna A", summary: "Results-driven software developer with 5+ years of experience in designing, building, and maintaining scalable applications. Recently completed a Master’s degree in Artificial Intelligence, enhancing expertise in cutting-edge technologies and intelligent systems. Strong collaborator with a passion for solving complex problems, delivering user-focused solutions, and continuously learning to stay ahead in a fast-evolving tech landscape.", roles: ["Software Developer", "AI Enthusiast", "Full Stack Engineer"], cvUrl: "#", linkedin: "https://www.linkedin.com/in/vamsi-krishna-athipatla", github: "https://github.com/krish8237" },
        about: { imageUrl: "https://placehold.co/400x400/0f172a/cbd5e1?text=VKA", description: ["I'm a passionate and results-driven software developer with a strong foundation in building scalable and user-focused applications. With 3.6 years of professional experience, I've had the opportunity to work on a variety of projects, from backend microservices to dynamic front-end components.", "My journey in technology led me to pursue a Master's degree in Artificial Intelligence, where I've been able to dive deep into machine learning, NLP, and big data analytics. I enjoy tackling complex problems and am always eager to learn and apply new technologies to create innovative solutions.", "As a strong collaborator, I thrive in team environments and am dedicated to continuous learning to stay at the forefront of the ever-evolving tech landscape."] },
        skills: [ { category: "Programming & Web", items: ["Java", "Python", "Golang", "C++", "HTML/CSS", "JavaScript", "Angular", "React"] }, { category: "Frameworks", items: ["Spring Boot", "Flask", "Django", "FastAPI", "PyTest", "JUnit"] }, { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "FAISS DB"] }, { category: "DevOps & Cloud", items: ["Jenkins", "Docker", "Kubernetes", "AWS", "GitLab CI/CD", "OpenShift", "ArgoCD"] }, { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Generative AI", "LangChain"] }, { category: "Developer Tools", items: ["IntelliJ", "PyCharm", "VSCode", "Jupyter", "GitHub Copilot", "Amazon Q"] } ],
        experience: [ { company: "Continental", role: "Senior Software Developer", period: "Apr 2023 - Jan 2024", location: "Bangalore, India", points: ["Designed and implemented standalone tools using Python and Django to verify and validate the software image variants.", "Implemented Rest APIs using the Fast API and GraphQL for Single point entry.", "Worked on developing a Java Spring Boot microservices to manage the Atlassian (Jira/Confluence) Work flows and achieved in decreasing 80% of the manual effort.", "Developed data pipelines using Python, Pandas and PySpark that analyzes the DLT logs and generates the performance reports of the software images for the selected measurement cycles.", "Automated 15+ software delivery and application workflows by setting up the pipelines using Jenkins, Docker, Kubernetes, Open shift, ArgoCD and GitHub webhooks."] }, { company: "Tata Consultancy Services", role: "Software Developer", period: "Aug 2020 - Mar 2023", location: "Bangalore, India", points: ["Developed secured Java Spring Boot microservices with GraphQL to support core business functionalities like order management, securities trading, and automated investment workflows for Marcus.", "Maintained 10+ microservices that are responsible for core business of Marcus platform and connected a few of them with multiple upstream and downstream services, ensuring seamless data flow across platforms.", "Built ETL data streams within Spring Boot using internal frameworks and Apache Kafka for real-time processing of position data.", "Utilized AWS services such as EC2, Cloud Formation, Lambda, CloudWatch, and Step Functions to support scalable and event-driven processing."] } ],
        education: [ { institution: "University of North Texas", degree: "Master of Science in AI", period: "Jan 2024 - May 2025", location: "Denton, TX, USA", details: "Key Learnings: Machine Learning, Deep Learning, NLP, Big Data Analytics." }, { institution: "Sreenivasa Institute of Technology", degree: "Bachelor of Technology in CS", period: "Aug 2016 - Sep 2020", location: "Chittoor, AP, IN" } ],
        projects: [ { name: "MediBot using LLMs", description: "A medical question-answering bot leveraging various Large Language Models on the MedQuad dataset (47.5K QA pairs), utilizing FAISS for vector storage, Sentence T5 for embeddings, and ColBERTv2 for re-ranking to provide accurate medical information.", stack: ["Python", "FastAPI", "FAISS", "LangChain", "PyTorch", "HuggingFace"], url: "#" }, { name: "GitHub-Jira Agent", description: "An intelligent agent that interprets tasks described in Jira tickets, automatically generates corresponding code solutions, and pushes the implementation to a GitHub repository, streamlining the development workflow.", stack: ["Python", "Google GenAI", "LangChain", "LangGraph", "Jira API"], url: "#" }, { name: "Online Fraud Detection", description: "A robust fraud detection system for online credit transactions using advanced data sampling methods (SMOTE, ADASYN) and an ensemble learning model combining Logistic Regression, XGBoost, and Neural Networks to handle imbalanced data.", stack: ["Python", "Scikit-learn", "PyTorch", "XGBoost", "Pandas"], url: "#" }, { name: "Attendance System", description: "An advanced attendance management system that uses Convolutional Neural Networks (CNN) and Haar Cascade classifiers for real-time facial recognition, built with a Django backend and a responsive user interface.", stack: ["Python", "Django", "PyTorch", "CNN", "OpenCV"], url: "#" } ],
        certifications: [ { name: "AWS Certified Cloud Practitioner", date: "Mar 2023", logoUrl: "https://placehold.co/80x80/ffffff/0f172a?text=AWS", credentialUrl: "static/certs/aieng_dc.png" }, { name: "Oracle Certified Professional, Java SE 11", date: "Aug 2022", logoUrl: "https://placehold.co/80x80/ffffff/0f172a?text=Java", credentialUrl: "https://placehold.co/800x600/1e293b/ffffff?text=Java+Certificate" }, { name: "Docker Certified Associate", date: "May 2023", logoUrl: "https://placehold.co/80x80/ffffff/0f172a?text=Docker", credentialUrl: "https://placehold.co/800x600/1e293b/ffffff?text=Docker+Certificate" } ],
        contact: { message: "I'm currently seeking new opportunities and would love to hear from you.", email: "vamsikrishnaathipatla@gmail.com" }
    };

    function renderPortfolio() {
        const data = portfolioData;

        // --- Nav ---
        const navLinksContainer = document.getElementById('nav-links');
        const mobileMenuContainer = document.getElementById('mobile-menu');
        const navLinksHTML = `<a href="#about" class="hover:text-indigo-400 transition-colors interactive">About</a> <a href="#skills" class="hover:text-indigo-400 transition-colors interactive">Skills</a> <a href="#experience" class="hover:text-indigo-400 transition-colors interactive">Experience</a> <a href="#education" class="hover:text-indigo-400 transition-colors interactive">Education</a> <a href="#projects" class="hover:text-indigo-400 transition-colors interactive">Projects</a> <a href="#certifications" class="hover:text-indigo-400 transition-colors interactive">Certifications</a> <a href="#contact" class="hover:text-indigo-400 transition-colors interactive">Contact</a>`;
        navLinksContainer.innerHTML = navLinksHTML;
        mobileMenuContainer.innerHTML = navLinksHTML.replace(/class="/g, 'class="block py-2 text-center hover:bg-slate-700 rounded ');

        // --- Sections ---
        document.getElementById('home').innerHTML = `<h1 class="text-5xl md:text-7xl font-bold mb-4">${data.home.name}</h1> <p class="text-xl md:text-2xl text-indigo-400 mb-8 h-8 md:h-auto"><span id="subtitle"></span><span class="typing-cursor"></span></p> <p class="max-w-3xl mx-auto text-slate-400 mb-8">${data.home.summary}</p> <div class="flex flex-col sm:flex-row justify-center items-center gap-6"> <a href="${data.home.cvUrl}" target="_blank" class="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors interactive w-full sm:w-auto">Download CV</a> <div class="flex justify-center space-x-6"> <a href="${data.home.linkedin}" target="_blank" class="interactive"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:stroke-indigo-400 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a> <a href="${data.home.github}" target="_blank" class="interactive"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:stroke-indigo-400 transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg></a></div></div>`;
        document.getElementById('about').innerHTML = `<h2 class="text-4xl font-bold text-center mb-16">About Me</h2><div class="flex flex-col md:flex-row items-center gap-12"><div class="md:w-1/3"><img src="${data.about.imageUrl}" alt="Vamsi Krishna A" class="rounded-full shadow-lg mx-auto border-4 border-slate-700"></div><div class="md:w-2/3">${data.about.description.map(p => `<p class="text-slate-300 mb-4 text-lg leading-relaxed">${p}</p>`).join('')}</div></div>`;
        document.getElementById('skills').innerHTML = `<h2 class="text-4xl font-bold text-center mb-16">My Skills</h2><div class="scroller" data-direction="left"><div class="scroller-inner">${data.skills.map(sc => `<div class="glass-effect p-6 rounded-lg"><h3 class="text-xl font-semibold mb-4 text-indigo-400">${sc.category}</h3><div class="flex flex-wrap gap-2">${sc.items.map(i => `<span class="bg-slate-700 px-3 py-1 rounded-full text-sm">${i}</span>`).join('')}</div></div>`).join('')}</div></div>`;
        document.getElementById('experience').innerHTML = `<h2 class="text-4xl font-bold text-center mb-16">Work Experience</h2><div class="relative timeline">${data.experience.map(exp => `<div class="timeline-item"><div class="timeline-dot"></div><h3 class="text-xl font-semibold text-indigo-400">${exp.company}</h3><p class="font-medium text-lg">${exp.role}</p><p class="text-sm text-slate-400">${exp.period} | ${exp.location}</p><div class="expandable-summary"><ul class="list-disc list-inside mt-4 text-slate-300 space-y-2 text-left">${exp.points.map(p=>`<li>${p}</li>`).join('')}</ul></div><button class="expand-btn interactive">Read More</button></div>`).join('')}</div>`;
        document.getElementById('education').innerHTML = `<h2 class="text-4xl font-bold text-center mb-16">Education</h2><div class="relative timeline">${data.education.map(edu => `<div class="timeline-item"><div class="timeline-dot"></div><h3 class="text-xl font-semibold text-indigo-400">${edu.institution}</h3><p class="font-medium text-lg">${edu.degree}</p><p class="text-sm text-slate-400">${edu.period} | ${edu.location}</p>${edu.details ? `<p class="text-slate-400 mt-2 text-sm">${edu.details}</p>` : ''}</div>`).join('')}</div>`;
        document.getElementById('projects').innerHTML = `<h2 class="text-4xl font-bold text-center mb-16">Personal Projects</h2><div class="scroller" data-direction="right"><div class="scroller-inner">${data.projects.map(proj => `<div class="glass-effect p-6 rounded-lg flex flex-col"><div class="flex justify-between items-start mb-2"><h3 class="text-xl font-semibold text-indigo-400">${proj.name}</h3><a href="${proj.url}" target="_blank" class="interactive text-slate-400 hover:text-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg></a></div><div class="expandable-summary"><p class="text-slate-400 mb-4 flex-grow text-left">${proj.description}</p></div><button class="expand-btn interactive">Read More</button><div class="mt-auto pt-4"><div class="skills-wrapper"><div class="flex flex-wrap gap-2 text-xs skills-container">${proj.stack.map(t => `<span class="bg-slate-700 px-2 py-1 rounded">${t}</span>`).join('')}</div></div><button class="expand-skills-btn interactive" style="display: none;">Show more</button></div></div>`).join('')}</div></div>`;
        document.getElementById('certifications').innerHTML = `<h2 class="text-4xl font-bold text-center mb-16">Certifications</h2><div class="scroller" data-direction="left"><div class="scroller-inner">${data.certifications.map(cert => `<div class="glass-effect p-6 rounded-lg text-center" data-credential-url="${cert.credentialUrl}"><img src="${cert.logoUrl}" alt="${cert.name} Logo" class="mx-auto mb-4 h-20 w-20 object-contain"><h3 class="text-xl font-semibold">${cert.name}</h3><p class="text-slate-400 text-sm mt-1">Issued: ${cert.date}</p><button class="credential-link interactive mt-4 text-indigo-400 hover:text-indigo-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-1 w-4 h-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg> Show Credential</button></div>`).join('')}</div></div>`;
        document.getElementById('contact').innerHTML = `<h2 class="text-4xl font-bold mb-4">Get In Touch</h2><p class="text-slate-400 max-w-xl mx-auto mb-8">${data.contact.message}</p><a href="mailto:${data.contact.email}" class="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors interactive">👋 Say Hello</a>`;

        startTypewriter(data.home.roles);
        setupEventListeners();
        setupExpandables();
    }
    renderPortfolio();

    function setupEventListeners() {
        // --- Custom Cursor ---
        const customCursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        });

        // --- Scroll Particles ---
        window.addEventListener('scroll', () => {
            const particle = document.createElement('div');
            particle.classList.add('scroll-particle');
            const colors = ['#6366f1', '#818cf8', '#a5b4fc', '#ec4899', '#f472b6'];
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1500);
        }, { passive: true });

        // --- Mobile Menu ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                if (!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
            });
        });

        // --- Chatbot ---
        document.getElementById('chatbot-toggle').addEventListener('click', () => document.getElementById('chatbot-window').classList.toggle('open'));
        document.getElementById('chatbot-form').addEventListener('submit', (e) => { e.preventDefault(); /* Chatbot logic here */ });

        // --- Certificate Modal ---
        const modal = document.getElementById('certificate-modal');
        const modalImage = document.getElementById('modal-image');
        const modalClose = modal.querySelector('.modal-close');
        document.querySelectorAll('.credential-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('[data-credential-url]');
                modalImage.src = card.getAttribute('data-credential-url');
                modal.classList.add('open');
            });
        });
        const closeModal = () => modal.classList.remove('open');
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        // --- Animate Sections on Scroll ---
        const sections = document.querySelectorAll('.animated-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
        }, { threshold: 0.1 });
        sections.forEach(section => observer.observe(section));

        // --- Auto Scroller ---
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
                const scrollerInner = scroller.querySelector(".scroller-inner");
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }

    function setupExpandables() {
        // --- Read More for Experience and Projects ---
        document.getElementById('main-content').addEventListener('click', (e) => {
            if (e.target.classList.contains('expand-btn')) {
                const summary = e.target.previousElementSibling;
                if (summary && summary.classList.contains('expandable-summary')) {
                    summary.classList.toggle('expanded');
                    e.target.textContent = summary.classList.contains('expanded') ? 'Read Less' : 'Read More';
                }
            }
            if (e.target.classList.contains('expand-skills-btn')) {
                const wrapper = e.target.previousElementSibling;
                if (wrapper && wrapper.classList.contains('skills-wrapper')) {
                    wrapper.classList.toggle('expanded');
                    e.target.textContent = wrapper.classList.contains('expanded') ? 'Show less' : 'Show more';
                }
            }
        });

        // Show 'Show more' button only if skills overflow
        document.querySelectorAll('#projects .glass-effect').forEach(card => {
            const skillsWrapper = card.querySelector('.skills-wrapper');
            const skillsContainer = card.querySelector('.skills-container');
            const expandBtn = card.querySelector('.expand-skills-btn');

            // Use a small timeout to let the browser render and calculate heights
            setTimeout(() => {
                if (skillsContainer.scrollHeight > skillsWrapper.clientHeight) {
                    expandBtn.style.display = 'inline-block';
                }
            }, 150);
        });
    }

    function startTypewriter(roles) {
        const el = document.getElementById('subtitle');
        if (!el || !roles || roles.length === 0) return;
        let roleIndex = 0, charIndex = 0, isDeleting = false;
        function type() {
            const currentRole = roles[roleIndex];
            let displayText = isDeleting ? currentRole.substring(0, charIndex--) : currentRole.substring(0, charIndex++);
            el.textContent = displayText;
            if (!isDeleting && charIndex > currentRole.length) { setTimeout(() => isDeleting = true, 2000); }
            else if (isDeleting && charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
            setTimeout(type, isDeleting ? 50 : 100);
        }
        type();
    }
});