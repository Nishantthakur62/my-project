import { useState, useCallback } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text) => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }, []);

  return { isCopied, copyToClipboard };
};

export default useCopyToClipboard;
