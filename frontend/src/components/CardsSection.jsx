import React, { useState } from 'react';
import Card from "../components/Card";
import Modal from 'react-modal';

const cardsData = [
  {
    image: "https://source.unsplash.com/400x300/?herbs",
    title: "Tulsi",
    type: "Herb",
    scientificname: "Ocimum tenuiflorum",
    uses: "Stress Relief: Known for its adaptogenic properties, reducing stress and anxiety. Immune Booster: Enhances immune function and overall health. Anti-inflammatory: Reduces inflammation and pain. Respiratory Health: Supports respiratory function and alleviates coughs.",
    region: "Tropical",
    description: "Tulsi is a sacred herb in Hinduism, known for its medicinal properties and spiritual significance.",
    modelUrl: "https://sketchfab.com/models/c604e8f52c234f2e9259d895fe028819/embed?autospin=1", // Replace with actual Sketchfab embed URL
  },
  {
    image: "https://source.unsplash.com/400x300/?aloe-vera",
    title: "Aloe Vera",
    type: "Succulent",
    scientificname: "Aloe barbadensis",
    uses: "Aloe vera is renowned for its wide range of health benefits: Skin Care: Helps soothe burns, wounds, and sunburns. Anti-inflammatory: Reduces inflammation in the skin and joints. Digestive Aid: Aloe juice helps relieve constipation and promotes digestion. Immune System: Contains antioxidants that boost immunity. Wound Healing: Accelerates the healing of cuts and abrasions. Anti-aging: Used in cosmetics for moisturizing and reducing wrinkles. Hair Care: Promotes hair growth and treats scalp conditions.",
    region: "Tropical",
    description: "Aloe vera is a succulent plant valued for its medicinal properties, especially for skin care, wound healing, and digestion. It has been used in Ayurveda and traditional medicine systems for centuries.",
    modelUrl: "https://sketchfab.com/models/abacab4588fe48108e2edba18b5a8db0/embed", // Replace with actual Sketchfab embed URL
  },
  {
    image: "https://source.unsplash.com/400x300/?neem",
    title: "Neem",
    type: "Tree",
    scientificname: "Azadirachta indica",
    uses: " Antibacterial: Effective against various bacteria and fungi. Anti-inflammatory: Reduces inflammation and pain. Skin Health: Used in skin care for acne and eczema. Blood Sugar Regulation: May help regulate blood sugar levels.",
    region: "Tropical",
    description: "Neem is a medicinal tree known for its antibacterial and anti-inflammatory properties.",
    modelUrl: "https://sketchfab.com/models/78ecb1acd520413ea6d8fd893d2895d1/embed", // Replace with actual Sketchfab embed URL
  },
];

function CardsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <section className="py-12 px-6 bg-green-50">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
        Our Herbal Picks 🌱
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardsData.map((card, index) => (
          <div key={index} onClick={() => openModal(card)}>
            <Card
              image={card.image}
              title={card.title}
              type={card.type}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Plant Details"
        className="bg-white p-6 rounded shadow-lg max-w-6xl mx-auto"
        overlayClassName="fixed inset-0 backdrop-filter backdrop-blur-md bg-opacity-50 flex justify-center items-center border-0"
      >
        {selectedCard && (
          <div className="flex flex-col lg:flex-row p-4 w-full max-w-5xl h-[80vh] overflow-hidden bg-white rounded-lg shadow-lg">
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 overflow-x-auto lg:overflow-y-auto pr-0 lg:pr-4">
            <div className="bg-gray-100 h-80 flex items-center justify-center">
            <iframe
                title={selectedCard.title}
                src={selectedCard.modelUrl}
                frameBorder="0"
                allow="autoplay; fullscreen; vr"
                className="h-full object-contain w-full"
              ></iframe>
            </div>
            {/* <div className="flex gap-6">
              <img src="/path-to-leaf1.jpg" alt={selectedCard.title} className="w-1/2 h-48 object-cover rounded" />
              <img src="/path-to-leaf2.jpg" alt={selectedCard.title} className="w-1/2 h-48 object-cover rounded" />
            </div> */}
          </div>
    
          {/* Right Side: Text & Audio */}
          <div className="w-full lg:w-1/2 overflow-y-auto p-4 bg-white rounded shadow mt-4 lg:mt-0 h-full">
            <h1 className="text-3xl font-bold mb-2">{selectedCard.title}</h1>
            <p className="mb-4 text-gray-700">
              {selectedCard.description}
            </p>
            <p><span className="font-semibold">Scientific name: </span> <i>{selectedCard.scientificname}</i></p>
            <p><span className="font-semibold">Region:</span> {selectedCard.region}</p>
            <p><span className="font-semibold">Type:</span> {selectedCard.type}</p>
            <p className="mb-4"><span className="font-semibold">Medicinal uses:</span> {selectedCard.uses}</p>
    
            <audio controls className="mb-4 w-full">
              <source src="/path-to-audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
    
            
    
            
          </div>
        </div>
        )}
      </Modal>
    </section>
  );
}

export default CardsSection;
