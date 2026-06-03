import React, { useEffect, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = target / 100;

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover premium footwear designed for comfort, style, and
          performance.
        </p>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000"
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

          <p className="text-gray-600 mb-4 leading-7">
            At ShoeHub, we believe that great footwear is more than just
            fashion. It represents confidence, comfort, and performance. Our
            mission is to provide customers with high-quality shoes that combine
            modern design with exceptional durability.
          </p>

          <p className="text-gray-600 mb-4 leading-7">
            From casual sneakers to premium sports footwear, we carefully curate
            every product to ensure the highest standards of quality. Our
            collection is designed for people who want to look good and feel
            comfortable every day.
          </p>

          <p className="text-gray-600 leading-7">
            We are committed to delivering a seamless online shopping experience
            with secure payments, fast shipping, and customer-first service.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold text-xl mb-2">Premium Quality</h3>
            <p className="text-gray-500">
              Carefully selected products with top-notch quality.
            </p>
          </div>

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-500">
              Quick and reliable shipping nationwide.
            </p>
          </div>

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold text-xl mb-2">Secure Payment</h3>
            <p className="text-gray-500">Safe and trusted payment methods.</p>
          </div>

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold text-xl mb-2">Customer Support</h3>
            <p className="text-gray-500">
              Dedicated support whenever you need help.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">
              <Counter target={20000} />+
            </h3>
            <p className="text-gray-500 mt-2">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              <Counter target={500} />+
            </h3>
            <p className="text-gray-500 mt-2">Products</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              <Counter target={50} />+
            </h3>
            <p className="text-gray-500 mt-2">Brands</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              <Counter target={5} />
            </h3>
            <p className="text-gray-500 mt-2">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
