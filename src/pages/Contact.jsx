import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-6xl font-extrabold mb-6 text-center drop-shadow-lg font-serif"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Details
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-lg text-gray-200 mb-10 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'd love to hear from you! Whether you have a question, want to work together, or just say hi.
      </motion.p>

      {/* Contact Details */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Email */}
        <a
          href="mailto:amruthababutp@gmail.com"
          className="bg-white text-indigo-600 hover:bg-gray-200 px-8 py-4 rounded-2xl shadow-lg transition duration-300 text-lg font-semibold min-w-[250px] text-center"
        >
          amruthababutp@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+918658361289"
          className="bg-white text-indigo-600 hover:bg-gray-200 px-8 py-4 rounded-2xl shadow-lg transition duration-300 text-lg font-semibold min-w-[250px] text-center"
        >
          +91-8658361289
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
