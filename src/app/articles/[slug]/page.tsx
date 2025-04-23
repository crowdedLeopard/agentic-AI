import { getPostData, getAllPostSlugs, PostData } from '../../../../lib/posts'; // Corrected relative path
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define the type for the path object returned by getAllPostSlugs
interface PostPath {
  params: {
    slug: string;
  };
}

// Function to generate static paths based on post slugs
export async function generateStaticParams(): Promise<{ slug: string }[]> { // Add return type
  const paths: PostPath[] = getAllPostSlugs();
  // Explicitly type the map parameter
  return paths.map((path: PostPath) => ({ slug: path.params.slug }));
}

// Function to generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Explicitly type the post variable
  const post: PostData | null = await getPostData(params.slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  return {
    title: post.title,
    description: post.description || 'An article from AI Agent Insights',
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  // Explicitly type the post variable
  const post: PostData | null = await getPostData(params.slug);

  // Check post and contentHtml existence before accessing properties
  if (!post || !post.contentHtml) {
    notFound();
  }

  return (
    <article className="bg-white p-8 rounded-lg shadow-md space-y-6">
      {/* Use optional chaining or ensure post is not null here */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm">Published on: {post.date}</p>
      {/* Render HTML content using prose styles */}
      <div
        className="prose lg:prose-xl max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
