import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../data/BlogPosts";

export default function Blog() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Research Updates",
    "Astronomy Explained",
    "Coding For Astronomy",
    "My Journey",
    "Conferences",
    "My Team",
  ];

  const filteredPosts =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Blog
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Research updates, astronomy insights, coding tutorials,
              conference experiences, and personal journeys.
            </p>
          </div>

          {/* Filters */}

          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  filter === category
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800 border border-slate-700 text-white hover:border-blue-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-[#07172f] border border-[#123a74] rounded-2xl overflow-hidden hover:border-blue-500 transition group"
              >

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-6">

                  <span className="inline-block mb-3 px-3 py-1 text-xs bg-blue-500 rounded-full">
                    {post.category}
                  </span>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="text-sm text-gray-500">
                    {post.date} • {post.readTime}
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
