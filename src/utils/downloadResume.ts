import type React from 'react';

/**
 * Download Sachin Yadav's official resume PDF.
 * Uses robust multi-stage download logic:
 * 1. Programmatic Blob download (fast, seamless in-page)
 * 2. Fallback to direct anchor navigation with target="_blank" (guaranteed to work in sandboxed iframes)
 */
export async function downloadResumePdf(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  try {
    const response = await fetch('/api/resume/download');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Sachin_Yadav_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);
  } catch (error) {
    console.warn('Blob download encountered an issue, triggering direct download fallback:', error);
    const directLink = document.createElement('a');
    directLink.href = '/api/resume/download';
    directLink.download = 'Sachin_Yadav_Resume.pdf';
    directLink.target = '_blank';
    directLink.rel = 'noopener noreferrer';
    document.body.appendChild(directLink);
    directLink.click();
    setTimeout(() => {
      if (document.body.contains(directLink)) {
        document.body.removeChild(directLink);
      }
    }, 1000);
  }
}
