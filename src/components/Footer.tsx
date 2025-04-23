export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // Lighter footer background, adjusted text colors
    <footer className="bg-gray-100 text-gray-600 p-6 mt-16 text-center border-t border-gray-200">
      <div className="container mx-auto">
        {/* Affiliate Links Section - Adjusted styling */}
        <div className="mb-6 pt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-3">Recommended AI Tools</h3>
          <div className="flex justify-center space-x-4 flex-wrap text-sm">
            {/* Replace # with your actual affiliate links */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">ElevenLabs</a>
            <span className="text-gray-400">|</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">N8n</a>
            <span className="text-gray-400">|</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">Make.com</a>
            <span className="text-gray-400">|</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">OpenAI API</a>
            {/* Add more links as needed */}
          </div>
        </div>

        <div className="text-xs text-gray-500">
          © {currentYear} AI Agent Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
