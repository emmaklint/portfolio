import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const worksDatabaseId = process.env.NOTION_WORKS_DATABASE_ID;

export default notion;
