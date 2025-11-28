import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // find the paragraph element (or use the root itself)
    const p = root.querySelector('p') || root;

    // Create split by words (not chars)
    const split = new SplitText(p, {
      type: 'words',
      wordsClass: 'scramble-word' // each word -> element with this class
    });

    // ensure words don't break mid-word and act as inline-block
    split.words.forEach(w => {
      w.classList.add('will-change-transform');
      // set dataset to original text for scramble target
      w.setAttribute('data-content', w.textContent.trim());
      // prevent the browser from breaking that word
      w.style.whiteSpace = 'nowrap';
      w.style.display = 'inline-block';
    });

    const handleMove = e => {
      split.words.forEach(word => {
        const { left, top, width, height } = word.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(word, {
            overwrite: true,
            duration: Math.max(0.08, duration * (1 - dist / radius)),
            scrambleText: {
              text: word.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
          });
        }
      });
    };

    root.addEventListener('pointermove', handleMove);
    return () => {
      root.removeEventListener('pointermove', handleMove);
      try { split.revert(); } catch (err) { /* ignore */ }
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`m-[4vw] max-w-[800px] font-mono text-[clamp(18px,4vw,20px)] text-[#452829] font-bold ${className}`}
      style={style}
    >
      <p>
        {children}
      </p>
    </div>
  );
};

export default ScrambledText;
