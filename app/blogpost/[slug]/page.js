import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const filepath = path.join(process.cwd(), 'content', 'posts.json');

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const posts = JSON.parse(fileContent);
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
    return;
  }

  return (
    <div className='max-w-5xl mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
      <p className='text-base mb-2 border-l-4 border-gray-500 pl-4 italic'>
        &quot;{post.description}&quot;
      </p>

      <div className='flex gap-2'>
        <p className='text-sm text-gray-500 mb-4 italic'>By {post.author}</p>
        <p className='text-sm text-gray-500 mb-4'>{post.date }</p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className='prose dark:prose-invert'
      ></div>
    </div>
  );
}
