

const ReviewCard = ({ review }) => {
    const {name,email,ratings,image, review_description} = review;
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Customer Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-16 h-16 rounded-full mx-auto"
      />

      {/* Customer Name and Email */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {[...Array(ratings)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927C9.33 2.018 10.67 2.018 10.951 2.927l1.032 3.18a1 1 0 00.95.69h3.356c1.036 0 1.47 1.25.71 1.85l-2.714 2.17a1 1 0 00-.364 1.118l1.033 3.18c.282.909-.755 1.668-1.54 1.118L10 13.586l-2.715 2.17c-.785.55-1.822-.209-1.54-1.118l1.033-3.18a1 1 0 00-.364-1.118l-2.714-2.17c-.76-.6-.326-1.85.71-1.85h3.356a1 1 0 00.95-.69l1.032-3.18z" />
          </svg>
        ))}
      </div>

      {/* Customer Review */}
      <p className="mt-4 text-center text-gray-700">{review_description}</p>
    </div>
  );
};

export default ReviewCard;
