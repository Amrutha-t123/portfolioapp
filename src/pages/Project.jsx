import { motion } from "framer-motion";

function Project() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        {/* Mini Project */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 mb-8 hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            THOUGHTS (A Full-Stack Thread Clone) - Mini Project
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed a collaborative platform designed to foster the exchange of ideas and simulate
            insightful conversations. Implemented a feature to create and post thoughts, with the ability to
            add images to enhance posts. Enhanced the theme management and user interface (UI/UX),
            inspired by the Threads platform, with a modern and intuitive design to improve user engagement.
          </p>
        </motion.div>

        {/* Main Project */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            Machine Learning-Based Cardiovascular Disease Detection Using Optimal Feature Selection - Main Project
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed a machine learning model to detect cardiovascular diseases using the Kaggle heart
            disease dataset. Applied feature selection techniques (including PCA) to improve model accuracy
            and reduce dimensionality. Achieved 88% accuracy using a hybrid model (ANN + SVM).
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
