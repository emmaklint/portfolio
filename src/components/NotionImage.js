"use client";

import { useState, useEffect } from "react";

export default function NotionImage({ pageId, alt, className, initialUrl }) {
  const [imageUrl, setImageUrl] = useState(initialUrl);
  const [expiryTime, setExpiryTime] = useState(null);

  const fetchNewUrl = async () => {
    if (imageUrl && (!expiryTime || new Date(expiryTime) > new Date())) {
      return;
    }
    try {
      const response = await fetch(`/api/notion-image?pageId=${pageId}`);
      const data = await response.json();
      console.log("API response:", data);
      setImageUrl(data.url);
      setExpiryTime(data.expiry);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchNewUrl();
  }, [pageId]);

  useEffect(() => {
    if (!expiryTime) return;
    const timeToExpiry = new Date(expiryTime) - new Date();
    const timer = setTimeout(fetchNewUrl, timeToExpiry);
    return () => clearTimeout(timer);
  }, [expiryTime, pageId]);

  return imageUrl ? (
    <img src={imageUrl} alt={alt} className={className} />
  ) : (
    <div className="bg-orange-50 h-full" />
  );
}
