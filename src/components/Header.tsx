import Link from 'next/link';

export default function Header() {
  return (
    // Simplified header: white background, bottom border, indigo accent
    <header className="sticky top-0 z-50 bg-white text-gray-800 p-4 shadow-sm border-b border-gray-200">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
          AI Agent Insights
        </Link>
        {/* Adjusted spacing and font size */}
        <ul className="flex space-x-6 text-base items-center">
          <li><Link href="/" className="hover:text-indigo-700 transition-colors duration-300">Home</Link></li>
          <li><Link href="/articles" className="hover:text-indigo-700 transition-colors duration-300">Articles</Link></li>
          <li><Link href="/contact" className="hover:text-indigo-700 transition-colors duration-300">Contact</Link></li>
          {/* Removed Admin link as requested */}
        </ul>
      </nav>
    </header>
  );
}
