


const Gallery = () => {


  const flatImages = [
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
    // Add more flatflatflatImages as needed
  ];
  return (
    <div>
      <div className="flat-details-page">
        <h1 className="text-2xl font-bold mb-6">Flat Gallery</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {/* First column: Full height image */}
        <div className="row-span-3 col-span-1">
          <img
            src={flatImages[0]}
            alt="Gallery Image"
            className="w-full h-[650px] object-cover rounded-md"
          />
        </div>

        {/* Second column: Three smaller flatImages */}
        <div className="col-span-1 grid grid-rows-3 gap-4">
          <img src={flatImages[1]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[2]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[3]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Third column: Three smaller flatImages */}
        <div className="col-span-1 grid grid-rows-3 gap-4">
          <img src={flatImages[4]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[5]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[6]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Fourth column: Three smaller flatImages */}
        <div className="col-span-1 grid grid-rows-3 gap-4">
          <img src={flatImages[7]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[8]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[9]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Fifth column: Three smaller flatImages */}
        <div className="col-span-1 grid grid-rows-3 gap-4">
          <img src={flatImages[10]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[11]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
          <img src={flatImages[12]} alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>

    </div>
  );
};

export default Gallery;