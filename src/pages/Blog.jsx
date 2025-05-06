import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Tips for First-Time Home Buyers",
    image: "https://source.unsplash.com/featured/?house,home",
    summary:
      "Buying your first home? Here's a list of the top 10 things you should know before signing the deal.",
    link: "#",
  },
  {
    id: 2,
    title: "Real Estate Market Trends in 2025",
    image: "https://source.unsplash.com/featured/?real-estate,property",
    summary:
      "The property market is shifting fast. Learn about the latest trends and predictions for 2025.",
    link: "#",
  },
  {
    id: 3,
    title: "How to Increase Your Property Value",
    image: "https://source.unsplash.com/featured/?interior,design",
    summary:
      "Simple interior upgrades and smart renovations can drastically improve your home’s resale value.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Latest Blogs
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2">{blog.summary}</p>
              <a
                href={blog.link}
                className="text-orange-500 mt-4 inline-block hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;