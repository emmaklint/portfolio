import Image from "next/image";

const Text = ({ text }) => {
  if (!text) return null;

  return text.map((value, i) => {
    const {
      annotations: { bold, italic, strikethrough, underline, code },
      text,
    } = value;

    const classes = [
      bold ? "font-semibold" : "",
      italic ? "italic" : "",
      strikethrough ? "line-through" : "",
      underline ? "underline" : "",
      code ? "font-mono bg-gray-100 rounded px-1" : "",
    ].join(" ");

    return (
      <span key={i} className={classes}>
        {text.content}
      </span>
    );
  });
};

const Block = ({ block }) => {
  const { type } = block;

  switch (type) {
    case "paragraph":
      return (
        <p className="mb-4">
          <Text text={block.paragraph.rich_text} />
        </p>
      );

    case "heading_1":
      return (
        <h1 className="mb-2 text-3xl font-bold font-serif">
          <Text text={block.heading_1.rich_text} />
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="mb-3 text-2xl font-bold font-serif">
          <Text text={block.heading_2.rich_text} />
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="mb-1 text-xl font-bold font-serif">
          <Text text={block.heading_3.rich_text} />
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li className="mb-1 list-disc ml-4">
          <Text text={block.bulleted_list_item.rich_text} />
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="mb-1 list-decimal ml-4">
          <Text text={block.numbered_list_item.rich_text} />
        </li>
      );

    case "image":
      const imageUrl = block.image.file?.url || block.image.external?.url;
      return (
        <div className="my-6 relative h-96">
          <Image
            src={imageUrl}
            alt={block.image.caption?.[0]?.plain_text || "Image"}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );

    case "callout":
      return (
        <div className="my-4 p-4 bg-orange-10 0 rounded-lg flex">
          <div className="mr-4">{block.callout.icon?.emoji}</div>
          <div>
            <Text text={block.callout.rich_text} />
          </div>
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-4 pl-4 border-l-4 border-gray-300 italic">
          <Text text={block.quote.rich_text} />
        </blockquote>
      );

    default:
      return <p className="text-red-500">Unsupported block type: {type}</p>;
  }
};

export default function NotionRenderer({ blocks }) {
  if (!blocks) return null;

  let currentListItems = [];
  const renderedBlocks = [];

  blocks.forEach((block, i) => {
    if (
      block.type === "bulleted_list_item" ||
      block.type === "numbered_list_item"
    ) {
      currentListItems.push(block);

      // If next block is not a list item or this is the last block
      if (
        !blocks[i + 1] ||
        (blocks[i + 1].type !== "bulleted_list_item" &&
          blocks[i + 1].type !== "numbered_list_item")
      ) {
        // Render the accumulated list items
        const listType = block.type === "bulleted_list_item" ? "ul" : "ol";
        renderedBlocks.push(
          <listType key={`list-${i}`} className="my-4">
            {currentListItems.map((item, j) => (
              <Block key={item.id || j} block={item} />
            ))}
          </listType>
        );
        currentListItems = [];
      }
    } else {
      renderedBlocks.push(<Block key={block.id || i} block={block} />);
    }
  });

  return <div className="notion-content">{renderedBlocks}</div>;
}
