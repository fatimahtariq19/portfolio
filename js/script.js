
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      mobileMenu.classList.add("hidden");
    }
  });
});

document.getElementById("download-cv").addEventListener("click", function () {

  const driveUrl =
    "https://drive.google.com/drive/folders/1C1gzgjuwmasLayTIwf7I0f8uF0Ql2rar";

  window.open(driveUrl, "_blank");

  const button = this;
  const originalText = button.textContent;
  button.textContent = "Opening...";
  button.classList.add("bg-green-500");
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("bg-green-500");
  }, 2000);
});


const projectData = {
  // 'roaring-trends': {
  //     title: 'Roaring Trends (FYP)',
  //     content: `
  //         <p class="mb-4">A comprehensive smart platform that analyzes real-time social media trends across multiple platforms. This Final Year Project demonstrates advanced data processing and analytics capabilities.</p>

  //         <h4 class="text-xl font-semibold text-tech-teal mb-3">Key Features:</h4>
  //         <ul class="list-disc list-inside mb-4 space-y-2">
  //             <li>Real-time data collection from social media APIs</li>
  //             <li>Advanced trend analysis algorithms</li>
  //             <li>Interactive dashboard with data visualizations</li>
  //             <li>Hashtag popularity tracking</li>
  //             <li>Content engagement metrics</li>
  //             <li>Predictive trend forecasting</li>
  //         </ul>

  //         <h4 class="text-xl font-semibold text-tech-teal mb-3">Technical Implementation:</h4>
  //         <ul class="list-disc list-inside space-y-2">
  //             <li>React.js frontend with Chart.js for data visualization</li>
  //             <li>Node.js backend with Express.js framework</li>
  //             <li>MongoDB for storing trend data and analytics</li>
  //             <li>Real-time updates using WebSocket connections</li>
  //             <li>RESTful API design for data management</li>
  //         </ul>
  //     `,
  //     tags: ['MERN Stack', 'Analytics', 'Real-time', 'WebSocket', 'Chart.js', 'Data Visualization']
  // },

  "xpose-store": {
    title: "XPOSE Shoe Store",
    content: `
                    <p class="mb-4">A full-featured eCommerce platform specifically designed for shoe retail, featuring modern UI/UX design and comprehensive shopping functionality.</p>
                    
                    <h4 class="text-xl font-semibold text-tech-teal mb-3">Key Features:</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Product catalog with advanced filtering and search</li>
                        <li>Shopping cart and wishlist functionality</li>
                        <li>Secure user authentication and authorization</li>
                        <li>Order management and tracking system</li>
                        <li>Payment gateway integration</li>
                        <li>Admin dashboard for inventory management</li>
                        <li>Responsive design for all devices</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold text-tech-teal mb-3">Technical Stack:</h4>
                    <ul class="list-disc list-inside space-y-2">
                        <li>React.js with modern hooks and context API</li>
                        <li>Node.js and Express.js backend architecture</li>
                        <li>MongoDB with Mongoose ODM</li>
                        <li>JWT-based authentication system</li>
                        <li>Stripe payment integration</li>
                        <li>Cloudinary for image management</li>
                    </ul>
                `,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Stripe",
      "eCommerce",
    ],
  },
  // 'library-management': {
  //     title: 'Library Management System',
  //     content: `
  //         <p class="mb-4">A comprehensive web application designed to streamline library operations, from book cataloging to user management and transaction tracking.</p>

  //         <h4 class="text-xl font-semibold text-tech-teal mb-3">Core Features:</h4>
  //         <ul class="list-disc list-inside mb-4 space-y-2">
  //             <li>Complete book catalog management</li>
  //             <li>User registration and profile management</li>
  //             <li>Book borrowing and return system</li>
  //             <li>Advanced search and filtering capabilities</li>
  //             <li>Due date notifications and reminders</li>
  //             <li>Fine calculation and payment tracking</li>
  //             <li>Detailed reporting and analytics</li>
  //         </ul>

  //         <h4 class="text-xl font-semibold text-tech-teal mb-3">Technical Features:</h4>
  //         <ul class="list-disc list-inside space-y-2">
  //             <li>Role-based access control (Admin, Librarian, Member)</li>
  //             <li>RESTful API architecture</li>
  //             <li>Database optimization for large book collections</li>
  //             <li>Automated email notifications</li>
  //             <li>Data export functionality</li>
  //             <li>Responsive design for desktop and mobile</li>
  //         </ul>
  //     `,
  //     tags: ['MERN Stack', 'REST API', 'Authentication', 'Role Management', 'Email Integration', 'Reports']
  // },
  "tagoio-widgets": {
    title: "TagoIO Custom Widgets",
    content: `
                    <p class="mb-4">Backend development project focused on IoT data handling and processing, integrated with Tago.io platform for custom widget development and real-time data visualization.</p>
                    
                    <h4 class="text-xl font-semibold text-tech-teal mb-3">Project Overview:</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Backend development for IoT device data management</li>
                        <li>Integration with Tago.io platform for custom widgets</li>
                        <li>Real-time data processing and visualization</li>
                        <li>Scalable architecture for handling large IoT datasets</li>
                        <li>Secure data transmission and storage protocols</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold text-tech-teal mb-3">Technical Implementation:</h4>
                    <ul class="list-disc list-inside mb-4 space-y-2">
                        <li>Node.js and Express.js backend architecture</li>
                        <li>MongoDB with optimized queries for large datasets</li>
                        <li>REST APIs for device data management</li>
                        <li>JWT-based secure authentication system</li>
                        <li>Role-based access control for different user types</li>
                        <li>Real-time data streaming and processing</li>
                    </ul>
                    
                    <h4 class="text-xl font-semibold text-tech-teal mb-3">Key Achievements:</h4>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Ensured scalable and reliable IoT data workflows</li>
                        <li>Implemented secure authentication and authorization</li>
                        <li>Optimized database performance for high-volume data</li>
                        <li>Created efficient APIs for seamless data integration</li>
                    </ul>
                `,
    tags: [
      "IoT",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Tago.io",
      "Real-time",
      "Authentication",
    ],
  },
};

function openModal(projectId) {
  const modal = document.getElementById("project-modal");
  const title = document.getElementById("modal-title");
  const content = document.getElementById("modal-content");
  const tagsContainer = document.getElementById("modal-tags");
  const buttonsContainer = document.getElementById("modal-buttons");

  const project = projectData[projectId];

  // Set modal title and content
  title.innerHTML = project.title;
  content.innerHTML = project.content;

  // Set tags
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    span.className = "bg-tech-teal text-white px-2 py-1 rounded-full text-xs";
    tagsContainer.appendChild(span);
  });

  // Set buttons dynamically
  buttonsContainer.innerHTML = "";

  // Live Demo button (only for XPOSE)
  if (projectId === "xpose-store") {
    const demoBtn = document.createElement("button");
    demoBtn.textContent = "Live Demo";
    demoBtn.className =
      "bg-gradient-to-r from-tech-teal to-tech-blue text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300";
    demoBtn.onclick = () => window.open("https://www.google.com/", "_blank");
    buttonsContainer.appendChild(demoBtn);
  }

  // Source Code button (for both projects)
  const sourceBtn = document.createElement("button");
  sourceBtn.textContent = "Source Code";
  sourceBtn.className =
    "border border-tech-teal text-tech-teal px-6 py-2 rounded-lg hover:bg-tech-teal hover:text-white transition duration-300";
  const repoLinks = {
    "xpose-store":
      "https://github.com/fatimahtariq19/isg-trinity-tago-widgets.git",
    "tagoio-widgets":
      "https://github.com/fatimahtariq19/isg-trinity-tago-widgets.git",
  };
  sourceBtn.onclick = () => window.open(repoLinks[projectId], "_blank");
  buttonsContainer.appendChild(sourceBtn);

  // Show modal
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("project-modal").classList.add("hidden");
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}


document
  .getElementById("project-modal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const messageDiv = document.getElementById("form-message");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        messageDiv.innerHTML = `<p class="text-tech-teal font-semibold">${result.message}</p>`;
        this.reset();
      } else {
        messageDiv.innerHTML = `<p class="text-red-500 font-semibold">Failed to send email. Please try again.</p>`;
      }
    } catch (err) {
      messageDiv.innerHTML = `<p class="text-red-500 font-semibold">Error: ${err.message}</p>`;
    }

    messageDiv.classList.remove("hidden");
    setTimeout(() => messageDiv.classList.add("hidden"), 5000);
  });


window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});


const tagline = document.querySelector("section#home p");
const text = tagline.textContent;
tagline.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

setTimeout(typeWriter, 1000);

// (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');
//     d.innerHTML="window.__CF$cv$params={r:'986e92b5641711b8',t:'MTc1OTE4MTMzNi4wMDAwMDA='};var a=document.createElement('script');
// a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);
//     'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
