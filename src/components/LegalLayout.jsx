import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, children }) => {
    return (
        <div className="text-white pt-32 pb-20 px-6 sm:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {title}
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-8">
                        {children}
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-qard-accent/5 rounded-full blur-[120px]" />
            <div className="fixed bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>
    );
};

export default LegalLayout;
