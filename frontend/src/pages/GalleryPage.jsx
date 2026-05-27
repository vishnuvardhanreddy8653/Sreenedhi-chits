import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const IMAGES = Array.from({ length: 11 }, (_, i) => `https://srinidhichits.com/assests/Gallery/1/${i + 1}.jpg`);

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden min-h-[480px] flex items-center justify-center px-4 text-center border-b border-yellow-500"
        style={{
          background: 'radial-gradient(circle at top, #ffe149 0%, #ffe536 55%, #ffd900 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url('https://srinidhichits.com/assests/about%20bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-[56px] md:text-[80px] font-black tracking-[4px] leading-none mb-5 text-white drop-shadow-[15px_30px_20px_rgba(0,0,0,0.35)] uppercase">
            Gallery
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto leading-none text-[24px] md:text-[30px] font-bold">
            Anyone can dream up great ideas,
          </p>
          <p className="text-gray-900 max-w-2xl mx-auto text-[24px] md:text-[30px] font-bold mt-2">
            but an idea is nothing until it's realized.
          </p>
          <a
            href="#memories"
            className="mt-8 inline-flex h-12 px-8 items-center justify-center rounded-full bg-[#fe2121] text-white font-black uppercase tracking-[1px] shadow-[5px_5px_18px_rgba(250,12,12,0.856)] hover:bg-red-700 transition-colors duration-300"
          >
            Our Memories
          </a>
        </motion.div>
      </section>

      {/* Gallery Content */}
      <section id="memories" className="py-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-wide"
            >
              Opening of New Branch at Karimnagar
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-red-600 font-bold text-lg"
            >
              20/11/2018
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {IMAGES.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(src)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white aspect-[4/3] border-4 border-white cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.onerror = null;
                    e.target.src = `https://images.unsplash.com/photo-1485766410122-1b403edb53db?w=500&h=400&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                   <span className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-pointer backdrop-blur-sm"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged memory"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
