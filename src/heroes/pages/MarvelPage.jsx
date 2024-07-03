import React, { useState, useEffect } from 'react';
import { HeroList } from '../components';

const TypeWriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return (
    <h1 id="marvel">{displayedText}</h1>
  );
};

export const MarvelPage = () => {
  return (
    <>
      <TypeWriter text="Marvel Comics" speed={70} />
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
}
