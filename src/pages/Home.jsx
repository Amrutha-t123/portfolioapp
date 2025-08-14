import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mb-6 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-base sm:text-lg bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xl text-center leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Welcome to the home page of the Portfolio. Explore my work, learn more
        about me, and see the projects I have built using modern web
        technologies.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Now
      </motion.button>
    </section>
  );
}

export default Home;
