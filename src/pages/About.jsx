function About() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 px-6 sm:px-12 lg:px-20 animate-fadeIn">
      
      {/* Name & Role */}
      <div className="text-center mb-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-slideDown font-serif tracking-wide">
          AMRUTHA T
        </h1>
        <h2 className="text-lg sm:text-xl text-pink-500 font-medium mt-3 animate-fadeUp font-mono">
          Web Developer
        </h2>
      </div>

      {/* About Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6 animate-slideLeft font-serif tracking-wide">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-5xl animate-fadeUp">
          Amrutha T is an enthusiastic learner with a strong interest in computer science 
          and software development. She has explored diverse areas including computer 
          networks, DBMS, object-oriented programming, distributed computing, and 
          full-stack web development using the MERN stack. Skilled in Python, JavaScript, 
          and modern web technologies, she enjoys understanding both the theoretical 
          concepts and practical applications of programming. Her learning approach 
          combines deep technical exploration with hands-on projects, and she often seeks 
          explanations in both English and Malayalam to strengthen her understanding.
        </p>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
          .animate-fadeIn { animation: fadeIn 1s ease-in-out; }

          @keyframes fadeUp { from {opacity:0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} }
          .animate-fadeUp { animation: fadeUp 1s ease-in-out; }

          @keyframes slideLeft { from {opacity:0; transform: translateX(50px);} to {opacity:1; transform: translateX(0);} }
          .animate-slideLeft { animation: slideLeft 1s ease-in-out; }

          @keyframes slideDown { from {opacity:0; transform: translateY(-30px);} to {opacity:1; transform: translateY(0);} }
          .animate-slideDown { animation: slideDown 1s ease-in-out; }
        `}
      </style>
    </section>
  );
}

export default About;
