import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/posts'; // Revert back to alias path

const POSTS_PER_PAGE = 5; // Number of posts to display per page

interface ArticlesPageProps {
  searchParams?: { // Accept searchParams for pagination
    page?: string;
  };
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const allPosts: PostData[] = getSortedPostsData();

  // Pagination logic
  const currentPage = parseInt(searchParams?.page || '1', 10);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">Articles</h1>

      {/* Article List */}
      <div className="space-y-6">
        {currentPosts.length > 0 ? (
          currentPosts.map((article) => (
            <article key={article.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/articles/${article.slug}`} className="text-blue-600 hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mb-3">Published on: {article.date}</p>
              {article.description && (
                 <p className="text-gray-700 mb-4 line-clamp-3">{article.description}</p> // Limit description lines
              )}
              <Link href={`/articles/${article.slug}`} className="text-blue-500 hover:underline font-medium inline-block mt-2">
                Read More →
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-600 text-center py-4">No articles found. Create some in the 'posts' directory!</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
          {hasPrevPage ? (
            <Link href={`/articles?page=${currentPage - 1}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
              ← Previous
            </Link>
          ) : (
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed">
              ← Previous
            </span>
          )}

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          {hasNextPage ? (
            <Link href={`/articles?page=${currentPage + 1}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
              Next →
            </Link>
          ) : (
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed">
              Next →
            </span>
          )}
        </div>
      )}
    </div>
  );
}
