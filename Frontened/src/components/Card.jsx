const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>

        <p className="text-gray-600 mt-2">₹{product.price}</p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:opacity-90">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
