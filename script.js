// List of movies
let movies = [
    {
        title: "Fight Club",
        rating: 4,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rating: 10,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rating: 3,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rating: 7,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rating: 2,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rating: 8,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rating: 1,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rating: 9,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rating: 5,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rating: 6,
        id: "tt0050083"
    }
]

window.onload = function() {
    let sortedMovies;

    document.getElementById("sort-by-id").addEventListener("click", sortById);
    document.getElementById("sort-by-title").addEventListener("click", sortByTitle);
    document.getElementById("sort-by-rating").addEventListener("click", sortByRating);
  
    // Display Movies list
    displayMovies(movies);
}

function sortById() {
    sortedMovies = sortMoviesByAttrA(movies, 'id')
    displayMovies(movies);
    
}

function sortByTitle() {
    sortedMovies = sortMoviesByAttrA(movies, 'title')
    displayMovies(movies);
    
}

function sortByRating() {
    sortedMovies = sortMoviesByAttr(movies, 'rating')
    displayMovies(movies);
    
}


//Display list of movies in a table
 
function displayMovies(movies){
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rating</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rating + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


function sortMoviesByAttr(movies, sortAttr){
  for (let j = 0; j < movies.length - 1; j++) {

    let max_obj = movies[j];
    let max_location = j;

    let max = getMaxMovieObject(movies, j, sortAttr);
    max_obj = max.max_obj;
    max_location = max.max_index;

    // swap the first and the last
    movies[max_location] = movies[j]
    movies[j] = max_obj
}

return movies;
}



function getMaxMovieObject(movies, start, sortAttr){

  let max_obj = movies[start];
  let max_location = start

  for (let i = start; i < movies.length; i++) {
      if (movies[i][sortAttr] > max_obj[sortAttr]) {
          max_obj = movies[i]
          max_location = i
      }
  }
  return {max_obj: max_obj, max_index: max_location}
}


function sortMoviesByAttrA(movies, sortAttr){
    for (let j = 0; j < movies.length - 1; j++) {
  
      let max_obj = movies[j];
      let max_location = j;
  
      let max = getMaxMovieObjectA(movies, j, sortAttr);
      max_obj = max.max_obj;
      max_location = max.max_index;
  
      // swap the first and the last
      movies[max_location] = movies[j]
      movies[j] = max_obj
  }
  
  return movies;
  }
  
  
  
  function getMaxMovieObjectA(movies, start, sortAttr){
  
    let max_obj = movies[start];
    let max_location = start
  
    for (let i = start; i < movies.length; i++) {
        if (movies[i][sortAttr] < max_obj[sortAttr]) {
            max_obj = movies[i]
            max_location = i
        }
    }
    return {max_obj: max_obj, max_index: max_location}
  }





