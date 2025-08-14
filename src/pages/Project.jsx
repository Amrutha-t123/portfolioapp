import { motion } from "framer-motion";

function Project() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mb-12 text-center drop-shadow-lg font-serif"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <div className="grid gap-10 max-w-5xl w-full">
        {/* Mini Project */}
        <motion.div
          className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            THOUGHTS (A Full-Stack Thread Clone) – Mini Project
          </h2>
          <p className="text-gray-100 leading-relaxed">
            Developed a collaborative platform designed to foster the exchange of ideas and simulate
            insightful conversations. Implemented features to create and post thoughts with image support,
            and enhanced theme management and UI/UX inspired by the Threads platform.
          </p>
        </motion.div>

        {/* Main Project */}
        <motion.div
          className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-green-300 mb-3">
            Machine Learning-Based Cardiovascular Disease Detection – Main Project
          </h2>
          <p className="text-gray-100 leading-relaxed">
            Developed a machine learning model to detect cardiovascular diseases using the Kaggle heart
            disease dataset. Applied feature selection techniques (including PCA) to improve accuracy and
            reduce dimensionality. Achieved 88% accuracy using a hybrid ANN + SVM model.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
