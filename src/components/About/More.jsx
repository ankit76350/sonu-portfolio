import React from "react";

const MoreAbout = () => {
  return (
    <div className="min-h-screen dark:bg-neutral-900">
      <article className="font-fira mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
        <h1 className="font-fira mb-8 text-4xl font-bold dark:text-white sm:mt-16">About Me</h1>

        <img
          className="float-right w-44 rounded-full"
          src="./assets/myProfile/sonu-pic.png"
          alt="Sonu Kumar Bhagat"
        />

        <p className="text-lg dark:text-neutral-200">
          Hello! My name is Sonu Kumar Bhagat, and I am passionate about technology, machine learning, and full-stack web development. I am currently pursuing my Bachelor of Technology in Electronics and Communication Engineering at the National Institute of Technology, Sikkim. I have a deep interest in software development and data science, which drives me to constantly learn and work on innovative projects.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold dark:text-white">Professional Experience</h2>
          <p className="mt-6 text-lg dark:text-neutral-200">
            <strong>Research and Development Intern at NIT Patna</strong><br/>
            Focused on Speech Processing, particularly in automatic speaker verification and automatic speech recognition using the Kaldi toolkit. Improved speaker verification accuracy by 20% and speech recognition accuracy by 15%. Worked extensively on data preprocessing and model training.
          </p>
        </section>

        {/* Software Projects */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold dark:text-white">Software Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <section className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
              <header className="flex items-center justify-between dark:text-gray-50">
                <h3 className="text-lg font-bold">Gold Price Prediction</h3>
                <span>2023</span>
              </header>
              <div className="mt-2 dark:text-gray-300">
                Developed a machine learning model to predict gold prices with a 15% increase in prediction accuracy. Utilized Python, Pandas, NumPy, and Scikit-learn for data analysis and model training.
              </div>
            </section>

            <section className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
              <header className="flex items-center justify-between dark:text-gray-50">
                <h3 className="text-lg font-bold">Todo List Application</h3>
                <span>2023</span>
              </header>
              <div className="mt-2 dark:text-gray-300">
                Built a task management application using the MERN stack, improving efficiency by 30%. The app features task creation, modification, and deletion with an intuitive user interface.
              </div>
            </section>

            <section className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
              <header className="flex items-center justify-between dark:text-gray-50">
                <h3 className="text-lg font-bold">E-Commerce App Development</h3>
                <span>2023</span>
              </header>
              <div className="mt-2 dark:text-gray-300">
                Developed an Android-based e-commerce app using Kotlin, XML, and Firebase, achieving a 25% reduction in data retrieval times and a 30% improvement in notification delivery efficiency.
              </div>
            </section>

            <section className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
              <header className="flex items-center justify-between dark:text-gray-50">
                <h3 className="text-lg font-bold">Quiz App</h3>
                <span>2023</span>
              </header>
              <div className="mt-2 dark:text-gray-300">
                Created an interactive quiz app with secure user authentication and performance analytics. Boosted user engagement by 40% and retention by 25%.
              </div>
            </section>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold dark:text-white">Education</h2>
          <p className="mt-6 text-lg dark:text-neutral-200">
            <strong>Bachelor of Technology in Electronics and Communication Engineering</strong><br/>
            National Institute of Technology, Sikkim<br/>
            CGPA: 8.10
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold dark:text-white">Skills</h2>
          <p className="mt-6 text-lg dark:text-neutral-200">
            <strong>Designing Software:</strong> LT-Spice, EasyEDA, Cadance<br/>
            <strong>Data Structure and Algorithm:</strong> Proficient in Python, Java<br/>
            <strong>Version Control:</strong> Git, GitHub<br/>
            <strong>Programming Languages:</strong> Java, Python, C, C++, MATLAB, Kotlin<br/>
            <strong>Full Stack Web Development:</strong> Node.js, Express.js, React.js, MongoDB, HTML, CSS, JavaScript<br/>
            <strong>Database:</strong> MongoDB, MySQL<br/>
            <strong>Machine Learning:</strong> Python, Scikit-learn, Pandas, NumPy
          </p>
        </section>
      </article>
    </div>
  );
};

export default MoreAbout;
