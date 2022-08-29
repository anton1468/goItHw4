import React, {useEffect, useState} from 'react';
import Contacts from "./Contacts";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";

const key = process.env.REACT_APP_API_KEY

const AppFunc = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('cat');

  useEffect(() => {
    setLoader(true);
    fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => response.json())
      .then(data => {
        if(page > 1) {
         return setImages((prevState => {
           return prevState.concat(data.hits)
         }))
        }
        setImages(data.hits)
      })
      setLoader(false)
  },[search, page])


  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const handleSubmit = (e, value) => {
    e.preventDefault()
    setPage(1)
    setSearch(value)
  }

  return(
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        margin: "0 auto",
      }}
    >
      <Contacts/>
      <SearchBar handleSubmit={handleSubmit} />
      {images && <ImageGallery images={images}  />}
      {loader && <Loader/> }
      {images && <Button handleLoadMore={handleLoadMore}/>}
    </div>
  );
}

export default AppFunc;
