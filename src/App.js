import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api.js";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const imageList = await searchImages(searchTerm);
    setImages(imageList);
  };

  return (
    <div className="section">
      <h1>Text To Image</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
