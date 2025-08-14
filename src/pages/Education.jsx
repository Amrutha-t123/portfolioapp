import { motion } from "framer-motion";

function Education() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      {/* Main Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mb-12 text-center drop-shadow-lg font-serif"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        My Education
      </motion.h1>

      {/* Education Timeline */}
      <div className="space-y-12 max-w-3xl w-full">
        
        {/* Diploma */}
        <motion.div
          className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            Diploma
          </h2>
          <p className="text-lg text-gray-100">
            Computer Science and Engineering –{" "}
            <span className="font-semibold">KGPTC</span>
          </p>
        </motion.div>

        {/* BTech */}
        <motion.div
          className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-green-300 mb-3">
            B.Tech
          </h2>
          <p className="text-lg text-gray-100">
            Computer Science and Engineering –{" "}
            <span className="font-semibold">College of Engineering Perumon</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
