const cards = [
    {
      id: 1,
      title: "Card Title 1",
      image: "/src/assets/hero.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula."
    },
    {
      id: 2,
      title: "Card Title 2",
      image: "/src/assets/hero.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula."
    },
    {
      id: 3,
      title: "Card Title 3",
      image: "/src/assets/hero.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula."
    },
    {
      id: 4,
      title: "Card Title 4",
      image: "/src/assets/hero.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula."
    },
    {
      id: 5,
      title: "Card Title 5",
      image: "/src/assets/hero.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula."
    },
    {
      id: 6,
      title: "Card Title 6",
      image: "/src/assets/hero.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula."
    }
  ];

  const CardGrid = () => {
    return (
      <div className="container mx-auto p-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cards.map((card) => (
            <div key={card.id} className="bg-[#1c1c1f] rounded-3xl shadow-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
            <h3 className="text-2xl flex justify-center pt-4  text-white font-bold mb-4">{card.title}</h3>
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 pt-2"
              />
              <div className="p-6 pt-2">
                <p className="text-white opacity-80">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default CardGrid