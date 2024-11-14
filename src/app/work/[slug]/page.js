// src/app/work/[slug]/page.js
import notion, { worksDatabaseId } from "@/lib/notion";
import Image from "next/image";
import NotionRenderer from "../../../components/NotionRenderer";

export async function generateStaticParams() {
  const response = await notion.databases.query({
    database_id: worksDatabaseId,
  });

  return response.results.map((page) => ({
    slug: page.properties.Slug.rich_text[0]?.plain_text || page.id,
  }));
}

async function getPageFromSlug(slug) {
  const response = await notion.databases.query({
    database_id: worksDatabaseId,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
      next: { revalidate: 3000 },
    },
  });

  return response.results[0];
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const page = await getPageFromSlug(slug);

  if (!page) {
    return <div>Project not found</div>;
  }

  const title = page.properties.Title?.title[0]?.plain_text;
  const description = page.properties.Description?.rich_text[0]?.plain_text;
  const client = page.properties.Client?.rich_text[0]?.plain_text;
  const coverImage = page.cover?.external?.url || page.cover?.file?.url;

  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  return (
    <article className="mx-auto max-w-4xl p-4 flex flex-col gap-8 items-center">
      <header className="flex flex-col items-center">
        {client && <span className="text-gray-500 text-sm mb-2">{client}</span>}
        <h1 className="text-2xl font-serif font-bold">{title}</h1>
      </header>
      <div className="relative aspect-video h-96 rounded-lg overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title || "Project cover"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-orange-300 h-full" />
        )}
      </div>

      <div className="max-w-prose">
        <NotionRenderer blocks={blocks.results} />
      </div>
    </article>
  );
}
