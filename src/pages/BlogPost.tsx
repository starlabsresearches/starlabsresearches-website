import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/BlogPosts";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">

        <div className="max-w-4xl mx-auto">

          <Link
            to="/blog"
            className="text-blue-400 hover:text-blue-300"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-5xl font-bold mt-6 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-400 mb-6">
            {post.date} • {post.readTime}
          </p>

          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl mb-8"
          />

          <div className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
            {post.content}
          </div>

        </div>

      </div>
    </>
  );
}
