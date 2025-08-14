import { motion } from "framer-motion";

function Education() {
  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-20 text-center">
      {/* Main Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h1>

      <div className="space-y-10 max-w-3xl mx-auto">
        {/* Diploma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-2">
            DIPLOMA
          </h2>
          <p className="text-lg text-gray-700">
            Computer Science and Engineering –{" "}
            <span className="font-medium">KGPTC</span>
          </p>
        </motion.div>

        {/* BTech */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
            BTECH
          </h2>
          <p className="text-lg text-gray-700">
            Computer Science and Engineering
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
