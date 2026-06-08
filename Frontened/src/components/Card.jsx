import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>

        <p className="text-gray-600 mt-2">₹{product.price}</p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:opacity-90">
          Add To Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
