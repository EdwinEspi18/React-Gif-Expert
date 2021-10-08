import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GirGrid from './components/GirGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  /* const handleAdd = () => {
    setCategories([...categories, 'GOT']);
  }; */
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GirGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
