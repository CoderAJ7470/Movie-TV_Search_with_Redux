import React, {Component} from "react";

import "../CSS/Favorites.css";
const notAvailableImage = require("../Images/NotAvailable.png");

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.setState({
      data: JSON.parse(localStorage.getItem("movies"))
    })

    console.log("Parsed data is", this.state.data);
    // console.log("Title is ", this.state.data[0].title);
  }

  render() {
    return (
      <div className="favorites">
        <h1>
          My Favorites
        </h1>
        <>
          {this.showFavorites(this.state.data)}
        </>
      </div>
    );
  }

  showFavorites = () => {
    console.log("got called");
    return (
        <div className="details">
        {this.state.data && this.state.data.map((element) => {
          return (
            <>
              <div>
                {element.poster !== "N/A" ? (
                  <img src={element.poster} alt={element.title} />
                ) : (
                  <img src={notAvailableImage} alt={element.title} />
                )}
              </div>
              <div className="specs">
                <p><strong>Title:</strong> {element.title}</p>
                <p><strong>Released:</strong> {element.releaseYear}</p>
                <p><strong>Actors:</strong> {element.actors}</p>
                <p><strong>Plot:</strong> {element.plot}</p>
                <p><strong>Directed By:</strong> {element.directedBy}</p>
                <p><strong>Written By:</strong> {element.writtenBy}</p>
                <p><strong>Genre:</strong> {element.genre}</p>
                <p><strong>DVD Release:</strong> {element.dvdRelease}</p>
                <p><strong>Production:</strong> {element.productionHouse}</p>
                <p><strong>Rating:</strong> {element.rating}</p>
              </div>
            </>
          )
        })}
      </div>
    )
  }
}

export default Favorites;