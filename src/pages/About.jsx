import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      
      {/* Name & Role */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg font-serif tracking-wide">
          AMRUTHA T
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-200 font-medium mt-3 font-mono">
          Web Developer
        </h2>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif tracking-wide">
          About Me
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Amrutha T is an enthusiastic learner with a strong interest in computer science 
          and software development. She has explored diverse areas including computer 
          networks, DBMS, object-oriented programming, distributed computing, and 
          full-stack web development using the MERN stack. Skilled in Python, JavaScript, 
          and modern web technologies, she enjoys understanding both the theoretical 
          concepts and practical applications of programming. Her learning approach 
          combines deep technical exploration with hands-on projects, and she often seeks 
          explanations in both English and Malayalam to strengthen her understanding.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
