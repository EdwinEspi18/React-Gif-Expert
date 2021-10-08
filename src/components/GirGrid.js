import React from 'react';
import { useFecthGifs } from '../hooks/useFecthGifs';
import GifGridItem from './GifGridItem';
const GirGrid = ({ category }) => {
  const { data: images, loading } = useFecthGifs(category);

  console.log(images, loading);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <li key={img.id}>
            <GifGridItem img={img} />
          </li>
        ))}
      </div>
    </>
  );
};

export default GirGrid;
