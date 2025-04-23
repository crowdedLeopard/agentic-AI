import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to AI Agent Insights</h1>
        <p className="text-xl mb-8">Your source for the latest in AI and Agentic Systems development and analysis.</p>
        <a
          href="/articles"
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Explore Articles
        </a>
      </section>

      {/* Featured Content Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ensure links point to correct slugs */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Understanding Large Language Models</h3>
            <p className="text-gray-600 mb-4">A deep dive into the architecture and capabilities of modern LLMs.</p>
            <a href="/articles/understanding-llms" className="text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Building Your First AI Agent</h3>
            <p className="text-gray-600 mb-4">A step-by-step guide to creating a simple autonomous agent.</p>
            <a href="/articles/building-first-agent" className="text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">The Ethics of AI Agents</h3>
            <p className="text-gray-600 mb-4">Exploring the important ethical considerations in AI development.</p>
            <a href="/articles/ethics-of-ai" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </section>

      {/* Updated Media Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-purple-500 pb-2">Featured Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1: Using the first provided YouTube link */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded overflow-hidden"> {/* Added overflow-hidden */}
              <iframe 
                className="w-full h-full" // Ensure iframe fills the container
                src="https://www.youtube.com/embed/I0TPj62Dhsc" // Updated Video ID
                title="YouTube video player 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </div>
            <h3 className="text-xl font-semibold mb-2">Featured Video 1</h3>
            <p className="text-gray-600">Description for the first video.</p>
          </div>
          {/* Video 2: Using the second provided YouTube link */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded overflow-hidden"> {/* Added overflow-hidden */}
              <iframe 
                className="w-full h-full" // Ensure iframe fills the container
                src="https://www.youtube.com/embed/48-2OTttJS8" // Updated Video ID
                title="YouTube video player 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </div>
            <h3 className="text-xl font-semibold mb-2">Featured Video 2</h3>
            <p className="text-gray-600">Description for the second video.</p>
          </div>
        </div>
      </section>

      {/* Placeholder for Affiliate Links Section (will add to footer) */}

    </div>
  );
}
