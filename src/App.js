import React from 'react';

function App() {
  return (
    <div classclassName="bg-gray-50 text-gray-800 font-sans antialiased">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 tracking-wide">FT.</h1>
        <div className="space-x-6 font-medium text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Available for Opportunities
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm Fatimah Tariq
          </h1>
          <p className="text-xl text-blue-600 font-medium">
            Associate Software Engineer | DevOps Engineer
          </p>
          <p className="text-gray-600 leading-relaxed">
            Results-driven software professional with experience in MERN stack development and DevOps automation.
            Proven ability to build full-stack applications and deploy them securely on cloud infrastructure.
          </p>
          <div className="pt-4 space-x-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition">
              Get In Touch
            </a>
            <a href="#projects" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-lg transition">
              View Work
            </a>
          </div>
        </div>
        {/* <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center text-white text-6xl font-bold">
          FT
        </div> */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div classclassName="text-blue-600 text-3xl mb-4"><i className="fas fa-code"></i></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Node.js, Express.js, React.js, MongoDB, RESTful APIs, HTML5, CSS3, Bootstrap, Postman
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4"><i className="fas fa-server"></i></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps & Cloud</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AWS (EC2, IAM, Security Groups), Docker, Jenkins, GitHub Actions, Git
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4"><i className="fas fa-terminal"></i></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Systems & Scripting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Linux Administration, Bash/Shell Scripting, Centralized Monitoring (Prometheus & Grafana)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-gray-200">

          {/* CNS Engineering */}
          <div className="flex flex-col md:flex-row items-start relative">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 -translate-x-1.5 border-4 border-white shadow"></div>
            <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
              <span className="text-sm font-semibold text-blue-600">Jan 2026 - June 2026 </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">DevOps Engineering Intern </h3>
              <p className="text-gray-500 font-medium mb-3">CNS Engineering </p>
              <p className="text-gray-600 text-sm">
                Automating server tasks using Bash scripts, managing AWS EC2 instances, configuring Security Groups,
                and supporting core CI/CD workflows using Jenkins and GitHub Actions.
              </p>
            </div>
          </div>

          {/* Techmate Technologies */}
          <div className="flex flex-col md:flex-row items-start relative">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 -translate-x-1.5 border-4 border-white shadow"></div>
            <div className="pl-12 md:pl-0 md:w-1/2 md:ml-auto md:pl-12">
              <span className="text-sm font-semibold text-blue-600">Dec 2024 - May 2025 </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">Associate Software Engineer (Intern) </h3>
              <p className="text-gray-500 font-medium mb-3">Techmate Technologies</p>
              <p className="text-gray-600 text-sm">
                Developed full-stack web applications using the MERN stack. Designed secure MongoDB schemas,
                validated RESTful APIs with Postman, and leveraged Docker for isolated application environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


 {/* Project 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">CI/CD Application Deployment </h3>
              <p className="text-gray-600 text-sm mb-4">
                Set up automated pipelines using Jenkins, GitHub Actions, and AWS EC2. Used custom Bash scripts
                to control deployment flows and server setups.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-green-600">
                <span className="bg-green-50 px-2 py-1 rounded">AWS EC2</span>
                <span className="bg-green-50 px-2 py-1 rounded">Jenkins</span>
                <span className="bg-green-50 px-2 py-1 rounded">Bash</span>
              </div>
            </div>

            
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">XPOSE — Full-Stack MERN Platform </h3>
              <p className="text-gray-600 text-sm mb-4">
                A complete e-commerce backend and frontend. Features secure JWT authentication, password hashing,
                and dynamic data binding with MongoDB RESTful APIs.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-blue-600">
                <span className="bg-blue-50 px-2 py-1 rounded">React.js</span>
                <span className="bg-blue-50 px-2 py-1 rounded">Node.js</span>
                <span className="bg-blue-50 px-2 py-1 rounded">MongoDB</span>
              </div>
            </div>

           

            {/* Project 3 - Commented block handled cleanly in JSX */}
            {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Centralized Log Monitoring Setup</h3>
              <p className="text-gray-600 text-sm mb-4">Configured and hosted Prometheus and Grafana on AWS EC2. Built customized visualization dashboards to securely track system and container matrices.</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-600">
                <span className="bg-purple-50 px-2 py-1 rounded">Prometheus</span>
                <span className="bg-purple-50 px-2 py-1 rounded">Grafana</span>
                <span className="bg-purple-50 px-2 py-1 rounded">Linux</span>
              </div>
            </div> */}

            {/* Project 4 */}
            {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dockerized Environments Strategy</h3>
              <p className="text-gray-600 text-sm mb-4">Created scalable Dockerfiles and environment images to bundle applications into isolated local containers for stable deployment.</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-teal-600">
                <span className="bg-teal-50 px-2 py-1 rounded">Docker</span>
                <span className="bg-teal-50 px-2 py-1 rounded">Containerization</span>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-8">I am currently looking for full-time opportunities or impactful projects in Lahore or remote.</p>
        <div className="space-y-4">
          <a href="mailto:fatimahtariq687@gmail.com" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition shadow">
            <i className="fas fa-envelope mr-2"></i> fatimahtariq687@gmail.com
          </a>
          <div className="text-gray-700 font-medium py-3 border border-gray-200 rounded-lg bg-white">
            <i className="fas fa-phone mr-2 text-blue-600"></i> +92 330 4084349
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-100 text-center text-sm text-gray-500">
        &copy; 2026 Fatimah Tariq. All rights reserved.
      </footer>

    </div>
  );
}

export default App;