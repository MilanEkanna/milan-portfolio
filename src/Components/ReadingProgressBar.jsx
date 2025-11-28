// components/ReadingProgressBar.jsx
import { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = Math.max(window.scrollY, 0);
      const windowHeight = window.innerHeight;
      
      // Use the *larger* of body or documentElement height (covers more edge cases)
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );

      const maxScroll = docHeight - windowHeight;
      const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollPercent(Math.min(100, Math.max(0, percent))); // Clamp 0–100
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-50 bg-[#452829]">
      <div
        className="h-full bg-white transition-all duration-50 ease-in"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;