// Library
import React from "react";

// Constants
import { ImageList, SearchBar } from "../../../constants/components";
import { Mountain, Beach, Bird, Food } from "../../../constants/images";

// CSS
import '../../../style/Home.css'

export default function Home() {
  let initialState = {
    search: "",
    currentImages: "mountain",
    imagesArray: { mountain: Mountain, beach: Beach, bird: Bird, food: Food }
  };
  const buttonList = ['mountain', 'beach', 'bird', 'food'];

  const [state, setState] = React.useState(initialState);

  const handleChange = event => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSearch = (event, fieldValue) => {
    event.preventDefault();
    if(fieldValue){
      setState({
        ...state,
        search: fieldValue,
        currentImages: fieldValue.toLowerCase()
      });
    }
  };

  const handleButtonChange = (event, fieldValue) => {
    event.preventDefault();
    setState({
      ...state,
      search: "",
      currentImages: fieldValue.toLowerCase()
    });
  };

  const { search, currentImages, imagesArray } = state;

  return (
    <div className="home" id="home">
      <SearchBar
        value={search}
        onChange={handleChange}
        onClick={(e) => handleSearch(e, search)}
      />
      <div className="button-list">
        {buttonList.map(btn => {
          return (
            <div key={btn} className="optionBtn">
              <button 
                className={currentImages == btn ? 'selected' : ''} 
                onClick={(e) => handleButtonChange(e, btn)} 
              >
                {btn}
              </button>
            </div>
          )
        })}
      </div>
      <ImageList list={imagesArray[currentImages] || []} title={currentImages} />
    </div>
  );
}
