"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NotionImage({ pageId, alt, className, initalUrl }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [expiryTime, setExpiryTime] = useState(null);

  const fetchNewUrl = async () => {
    // Only fetch new URL if current one is expired
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
    <Image src={imageUrl} alt={alt} fill className={className} priority />
  ) : (
    <div className="bg-orange-50 h-full" />
  );
}
