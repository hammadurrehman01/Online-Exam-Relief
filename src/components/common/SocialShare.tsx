"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type SocialShareProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
};

const SocialShare = ({ imageUrl, title, description }: SocialShareProps) => {
  const pathname = usePathname() || "/";
  const [url, setUrl] = useState("");

  useEffect(() => {
    const BASE_URL = window.location.href;
    setUrl(BASE_URL);
  }, []);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}${pathname}`,
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${url}${pathname}`,
    twitter: `https://twitter.com/share?url=${url}${pathname}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${url}${pathname}&media=${imageUrl}&description=${description}`,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={`${url}${pathname}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div className="mt-12 flex items-center justify-center gap-4">
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Share on Facebook" />
        </a>
        <a href={shareLinks.linkedIn} target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="Share on LinkedIn" />
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Share on Twitter" />
        </a>
        <a
          href={shareLinks.pinterest}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pinterest.png" alt="Share on Pinterest" />
        </a>
      </div>
    </>
  );
};

export default SocialShare;
