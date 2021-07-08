import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies : []
  }

  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading : false }) // movies === movies : movies
  } // axios가 끝날때까지 wait 한다는 의미, async를 쓰지 않으면 wait를 쓰지 못함

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (
           <div className="loader">
             <span className="loader__text">Loading...</span>
           </div>
          ) : ( 
            <div className="movies">
              {movies.map(movie => {
                return (
                  <Movie
                   key={movie.id}
                   year={movie.year}
                   title={movie.title}
                   summary={movie.summary}
                   poster={movie.medium_cover_image}
                   genres={movie.genres}
                  />
                )
              })}
            </div>
          )
        }
      </section>
    )
  }
}

export default App;


// const foodILinke = [
//   {
//     id:1,
//     name:"Kimchi",
//     image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4aBRBEMc36CPZmEg84X40wEsDI%26pid%3DApi&f=1",
//     rating: 5
//   },
//   {
//     id:2,
//     name:"Samgyeopsal",
//     image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1tL_ZyhkuVIYOgryAAWXEAHaE8%26pid%3DApi&f=1",
//     rating: 4
//   },
//   {
//     id:3,
//     name:"Bibimbap",
//     image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aGCxQ0LoBWyRfpMpDZMRqgHaD4%26pid%3DApi&f=1",
//     rating : 4.5
//   }
// ]

// function Food({name, image, rating}) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={image} alt={name} />
//     </div>
//   )
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {foodILinke.map(dish => (
//         <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

// constructor(props) {
//   super(props)
//   this.state = {
//     count : 0
//   }
// }

// add = () => {
//   this.setState(
//     current => ({ count: current.count + 1})
//   )
// };
// minus = () => {
//   this.setState(
//     current => ({ count: current.count - 1})
//   )
// };
// componentDidMount() {
//   console.log("component rendered"); // 처음 render된 component임을 알려줌, render 이후 실행
// }
// componentDidUpdate() {
//   console.log("I just update") // setState 호출로 component가 다시 render될 때 render 이후 실행
// }
// componentWillUnmount() {
//   console.log("Goodbye") // component를 떠날 때 실행
// }
// render() {
//   console.log("I'm rendering");
//   return (
//     <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//   )
// };