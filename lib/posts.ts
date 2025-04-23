import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description?: string; // Optional description from frontmatter
  contentHtml?: string; // Optional full content
  [key: string]: any; // Allow other frontmatter fields
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (err) {
    console.warn('Could not read posts directory:', err);
    return []; // Return empty if directory doesn't exist or isn't readable
  }

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // Ensure we only process markdown files
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...(matterResult.data as { title: string; date: string; description?: string }),
      } as PostData;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (err) {
     console.warn('Could not read posts directory for slugs:', err);
    return [];
  }

  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  let fileContents;

  try {
     fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    console.error(`Error reading post file for slug "${slug}":`, err);
    return null; // Return null if file doesn't exist or isn't readable
  }


  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; description?: string }),
  } as PostData;
}
