import { useState, useEffect } from 'react';

export default function usePageContent(pageName, defaultContent = {}) {
  const [content, setContent] = useState(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetch(`/api/cms/content/${pageName}`)
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return;
        if (data && data.contentData) {
          try {
            const parsed = JSON.parse(data.contentData);
            // Merge parsed with default content so we don't lose structure if empty
            setContent({ ...defaultContent, ...parsed });
          } catch (e) {
            console.error(`Failed to parse content for ${pageName}`, e);
            setContent(defaultContent);
          }
        } else {
          setContent(defaultContent);
        }
      })
      .catch(err => {
        console.error(`Failed to fetch content for ${pageName}`, err);
        if (isMounted) setContent(defaultContent);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [pageName]); // Added dependency on pageName, removed stringified defaultContent

  return { content, isLoading };
}
