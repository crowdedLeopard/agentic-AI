'use client'; // Client component for potential future interactions

import { useState } from 'react';

export default function AdminPage() {
  // Basic state for a hypothetical upload form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadStatus('Uploading... (Simulation)');

    // --- Placeholder for actual upload logic --- 
    // In a real application, you would:
    // 1. Authenticate the user (ensure they are an admin).
    // 2. Send the title and content to a backend API endpoint.
    // 3. The backend would save the data to a database or file system.
    // 4. Handle success or error responses.
    // -------------------------------------------

    // Simulate an upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form and show simulated success
    setTitle('');
    setContent('');
    setUploadStatus('Article submitted successfully! (Simulation - Data not saved)');
    setTimeout(() => setUploadStatus(''), 5000); // Clear status after 5 seconds
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-6">Admin - Upload New Article</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
        <p className="font-bold">Development Notice</p>
        <p>This is a placeholder admin interface. Authentication and actual content saving require backend implementation.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Article Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Article Content (Markdown/HTML)</label>
          <textarea
            id="content"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={!title || !content || uploadStatus.includes('Uploading')}
        >
          {uploadStatus.includes('Uploading') ? 'Submitting...' : 'Submit Article'}
        </button>
      </form>

      {uploadStatus && (
        <p className={`mt-4 text-sm ${uploadStatus.includes('successfully') ? 'text-green-600' : 'text-gray-600'}`}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
}
