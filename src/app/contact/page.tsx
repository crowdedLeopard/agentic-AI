export default function ContactPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700">
        Have questions, suggestions, or want to collaborate? Reach out!
      </p>

      {/* Basic Contact Info (Replace with actual details) */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
          <a href="mailto:info@aiagentinsights.com" className="text-blue-600 hover:underline">
            info@aiagentinsights.com
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Social Media</h2>
          <div className="flex space-x-4">
            {/* Add links to your actual social profiles */}
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Optional: Contact Form (Requires backend logic) */}
      {/*
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Send Message
        </button>
      </form>
      */}
    </div>
  );
}
