import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blogPosts = [
    {
      title: 'Tips for Renting Flats in Dhaka',
      content: 'Dhaka is a bustling city with numerous rental options, but finding the right flat can be a challenge. From negotiating prices to inspecting the property, this guide walks you through the essential steps...',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/485465176.jpg?k=7b2ca76d1e800106c21bf461cfb4b7937ef50c14894015c7ea3af9805dca9522&o=&hp=1',
      link: '/',
    },
    {
      title: 'How to Find the Best Deals on Flat Rentals',
      content: 'Everyone wants to find the best deal when renting a flat. But how do you make sure you are getting a good price without compromising on the quality of the flat? In this post, we explore various tips for securing the best deal...',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/485465176.jpg?k=7b2ca76d1e800106c21bf461cfb4b7937ef50c14894015c7ea3af9805dca9522&o=&hp=1',
      link: '/',
    },
    {
      title: 'Flat Rental Agreements: What to Look For',
      content: 'Understanding your rental agreement is crucial to avoiding future disputes. Learn about the key clauses you need to watch out for and how to ensure your rights are protected as a tenant...',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/485465176.jpg?k=7b2ca76d1e800106c21bf461cfb4b7937ef50c14894015c7ea3af9805dca9522&o=&hp=1',
      link: '/',
    },
    {
      title: 'Affordable Flats for Rent: Budget Tips',
      content: 'Looking for affordable flats? We provide some practical budget-saving tips for renters. From searching the right neighborhoods to negotiating the rental agreement, this blog will help you find an affordable option...',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/485465176.jpg?k=7b2ca76d1e800106c21bf461cfb4b7937ef50c14894015c7ea3af9805dca9522&o=&hp=1',
      link: '/',
    },
  ];


  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">Flat Rent Blog</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            data-aos="fade-up"
            className="bg-white border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>

              {/* Truncate the text to keep the card clean */}
              <p className="text-gray-600 line-clamp-3">
                {post.content}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;