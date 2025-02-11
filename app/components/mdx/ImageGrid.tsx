'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: Image[];
  columns?: number;
}

export default function ImageGrid({ images, columns = 2 }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 my-6`}>
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-75 text-white text-sm rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            {selectedImage.caption && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-8 left-0 right-0 text-center text-white text-lg"
              >
                {selectedImage.caption}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
