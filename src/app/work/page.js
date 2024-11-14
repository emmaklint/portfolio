import notion, { worksDatabaseId } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const revalidate = 3000; // Add this at the top

// Helper function to safely get Notion property text
const getNotionProperty = (properties, propertyName, type = "rich_text") => {
  const property = properties[propertyName];
  if (!property) return null;

  if (type === "title") {
    return property.title[0]?.plain_text || null;
  }

  return property.rich_text[0]?.plain_text || null;
};

// Helper to get cover image URL
const getCoverImage = (page) => {
  if (!page.cover) return null;

  // Handle external URLs
  if (page.cover.type === "external") {
    return page.cover.external.url;
  }

  // Handle uploaded files
  if (page.cover.type === "file") {
    return page.cover.file.url;
  }

  return null;
};

// Helper to get multi select
const getMultiSelect = (properties, propertyName) => {
  return properties[propertyName]?.multi_select || [];
};

function Card({ page }) {
  const client = getNotionProperty(page.properties, "Client");
  const title = getNotionProperty(page.properties, "Title", "title");
  const description = getNotionProperty(page.properties, "Description");
  const coverImage = getCoverImage(page);
  const tags = getMultiSelect(page.properties, "Tags");
  const slug = getNotionProperty(page.properties, "Slug");

  return (
    <div key={page.id} className="flex flex-col gap-6">
      <div className="relative h-80 rounded-lg overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title || "Project cover"}
            fill
            className="object-cover aspect-video"
          />
        ) : (
          <div className="bg-orange-300 h-full" />
        )}
      </div>

      <div className="flex flex-col gap-2">
        {client && <span className="text-sm">{client}</span>}
        {title && (
          <h2 className="text-base md:text-xl font-serif font-bold">{title}</h2>
        )}
        {description && <p className="text-gray-600">{description}</p>}
        <div className="">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-orange-100 mr-2 px-2 py-1 text-orange-600 font-medium rounded-lg"
            >
              {tag.name}
              {/* {index !== tags.length - 1 && <span className="mx-2">•</span>} */}
            </span>
          ))}
        </div>
      </div>
      {slug && (
        <Link
          href={`/work/${slug}`}
          className="group inline-flex items-center gap-1 font-medium font-serif text-gray-800 transition-colors duration-200 hover:text-orange-700
"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

export default async function Work() {
  const response = await notion.databases.query({
    database_id: worksDatabaseId,
    sorts: [
      {
        property: "Order",
        direction: "ascending",
      },
    ],
    filter: {
      property: "Status",
      status: { equals: "Published" },
    },
  });

  const pages = response.results;

  return (
    <>
      <section className="w-full">
        <h2 className="text-2xl font-bold mb-2 md:mb-8 font-serif">
          What I have been working on lately.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {pages.map((page) => (
            <Card key={page.id} page={page} />
          ))}
        </div>
      </section>
    </>
  );
}
