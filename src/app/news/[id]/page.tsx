import { NewsItem } from "@/types/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts: NewsItem[] = await fetch('https://news-api-lemon-zeta.vercel.app/api/news').then((res) =>
    res.json()
  );
  return posts.slice(0, 5).map((post) => ({
    id: String(post._id),
  }));
}

const NewsDetailsapage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`https://news-api-lemon-zeta.vercel.app/api/news/${id}`);
  if (!res.ok) {
    return notFound(); // 404 page
  }

  const post = await res.json();

  return (
    <div>
      <section className="py-12">
        <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
          {post?.imageUrl && (
            <div>
              <Image
                src={post?.imageUrl}
                alt={post?.title}
                width={800}
                height={450}
                className="rounded-md object-cover"
              />
            </div>
          )}

          <div className="my-5">
            <h2 className="text-3xl font-bold mb-4">{post?.title}</h2>

            <div className="flex justify-between items-center text-sm mb-4">
              <p>{new Date(post?.published_at).toLocaleDateString()}</p>
              <p>
                Source: <span>{post?.source}</span>
              </p>
            </div>
          </div>

          <div className="mb-4">
            {post?.categories?.map((category: string) => (
              <span
                key={category}
                className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                {category}
              </span>
            ))}
          </div>

          <p className=" mb-2">{post?.snippet}</p>
          <p className=" mb-4">{post?.description}</p>
        </article>
      </section>
    </div>
  );
};

export default NewsDetailsapage;
