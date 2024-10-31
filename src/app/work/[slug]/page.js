// src/app/work/[slug]/page.js
import notion, { worksDatabaseId } from "@/lib/notion";
import Image from "next/image";

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

  return (
    <article className="mx-auto max-w-4xl p-4">
      {coverImage && (
        <div className="relative mb-8 h-[60vh] overflow-hidden">
          <Image src={coverImage} alt={title} fill className="object-cover" />
        </div>
      )}

      <header className="mb-8">
        {client && <span className="text-gray-500">{client}</span>}
        <h1 className="text-4xl font-bold">{title}</h1>
      </header>

      {description && (
        <div className="prose max-w-none">
          <p>{description}</p>
        </div>
      )}
    </article>
  );
}
