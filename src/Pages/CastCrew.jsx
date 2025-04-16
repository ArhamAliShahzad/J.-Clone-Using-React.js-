import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const CastCrew = ({
  title = 'Cast & Crew',
  castMembers = [
    {
      id: 1,
      src: '/Cast&Crew/1.jpg',
      alt: 'Actor John Doe',
      role: 'Main Character',
      bio: 'Award-winning actor with 10+ years experience...'
    },
    {
      id: 2,
      src: '/Cast&Crew/2.jpg',
      alt: 'Actress Jane Smith',
      role: 'Supporting Role',
      bio: 'Known for her versatile performances...'
    },
    {
      id: 3,
      src: '/Cast&Crew/3.jpg',
      alt: 'Director Mike Johnson',
      role: 'Director',
      bio: 'Visionary director with multiple awards...'
    },
    {
      id: 4,
      src: '/Cast&Crew/4.jpg',
      alt: 'Producer Sarah Williams',
      role: 'Producer',
      bio: 'Executive producer with 15 years experience...'
    }
  ]
}) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = castMembers.map(member => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = member.src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    };

    loadImages();
  }, [castMembers]);

  return (
    <div className="min-w-full mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="font-medium text-gray-900">{title}</li>
        </ol>
      </nav>

      {/* Image Grid - Exactly 4 items */}
      <div className="grid grid-cols-2 gap-6">
        {castMembers.slice(0, 4).map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: imagesLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={member.src}
              alt={member.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">{member.alt}</h3>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>
            <button
              onClick={() => setSelectedMember(member)}
              className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity bg-black/50 flex items-center justify-center"
            >
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                View Profile
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl max-w-md w-full p-6 mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedMember.alt}</h2>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedMember.src}
                alt={selectedMember.alt}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-2 font-medium">{selectedMember.role}</p>
              <p className="text-gray-700">{selectedMember.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

CastCrew.propTypes = {
  title: PropTypes.string,
  castMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      bio: PropTypes.string,
    })
  ),
};

export default CastCrew;