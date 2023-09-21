// data structures to store my movie and tv series info
const movies = [
  {
    title: "The Girl With The Dragon Tattoo",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg",
    genre: "action"
  },
  {
    title: "Birdbox",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png",
    genre: "horror"
  },
  {
    title: "Saw",
    imageUrl:
      "https://m.media-amazon.com/images/I/91PKG11r2sL._AC_UF1000,1000_QL80_.jpg",
    genre: "horror"
  },
  {
    title: "Insidious",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTQyNGY5ZGQtN2E1MC00ZDhkLWJiYWMtMTFjODAwMDFmZDRhXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg",
    genre: "horror"
  },
  {
    title: "The Equalizer",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_FMjpg_UX1000_.jpg",
    genre: "action"
  },
  {
    title: "P.S. I Love You",
    imageUrl:
      "https://m.media-amazon.com/images/I/81w+NT8-2HL._AC_UF1000,1000_QL80_.jpg",
    genre: "romance"
  },
  {
    title: "Dear John",
    imageUrl:
      "https://i0.wp.com/the-art-of-autism.com/wp-content/uploads/2023/03/Dear-John.jpg?fit=683%2C1024&ssl=1",
    genre: "romance"
  },
  {
    title: "Eat Pray Love",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5NDkyNzkyM15BMl5BanBnXkFtZTcwNDQyNDk0Mw@@._V1_.jpg",
    genre: "romance"
  },
  {
    title: "Mamma Mia! Here We Go Again",
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/9fbeb7779d87586b7c600200f5355c2e9a0dc4038950eb1716a428fa0ce3337a.jpg",
    genre: "romance"
  },
  {
    title: "Ace Ventura Pet Detective",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmVhNmFmOGYtZjgwNi00ZGQ0LThiMmQtOGZjMDUzNzJhMGIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: "comedy"
  },
  {
    title: "Jackass 4.5",
    imageUrl:
      "https://occ-0-681-1001.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbpKSOhO09MZtZr--ErGSHrne19_LsejHnvS2p45MrmppahHaYkqMQQl4mTax5Qp3R7wVzfI4ZHNaiZi9bVWvvvQZxtMJgIiELD1.jpg",
    genre: "comedy"
  },
  {
    title: "Bridesmaids",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_FMjpg_UX1000_.jpg",
    genre: "comedy"
  }
];

const tvSeries = [
  {
    title: "Lupin",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDdlNGMyZjktYzM0Yi00ZWE3LTk0NTEtMmU1OWIxNmU4OWQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: "drama"
  },
  {
    title: "Killing Eve",
    imageUrl: "https://flxt.tmsimg.com/assets/p15086357_b_v13_ao.jpg",
    genre: "drama"
  },
  {
    title: "Top Boy",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfn0t1JQPTG0qN12mO36QBjQntqonABIxnnjKKC8fSEHdIWQdNiZ-oEtWELrImGA8RzdzCaJpjqLDjviPDJrdW0Pj19dt8QVp6zZ-ux8NBo_PaZLmcp7nndkIQd1TUv4c_q7-A.jpg?r=ee2",
    genre: "drama"
  },
  {
    title: "Breaking Bad",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    genre: "drama"
  },
  {
    title: "Ozark",
    imageUrl:
      "https://resizing.flixster.com/3ko6zO6791p1QPOXHUI2eCwmHXQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==",
    genre: "drama"
  },
  {
    title: "Peaky Blinders",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
    genre: "drama"
  },
  {
    title: "Narcos",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Narcos_season_1.png",
    genre: "drama"
  },
  {
    title: "Love is Blind",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNmRiMjVjYzgtZDk4Ny00MGRlLWJjYWUtNTk4ZmUxYWY1N2Y1XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
    genre: "reality"
  },
  {
    title: "Selling Sunset",
    imageUrl:
      "https://resizing.flixster.com/ihJQtJDnbMoesRvwPtCHzLPAkZU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjQ3MjI0Ny53ZWJw",
    genre: "reality"
  },
  {
    title: "The Mole",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTdlZTliMGYtMzYxZS00ZGMxLWEyYTEtN2Q5ODhkODY3MGNlXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
    genre: "reality"
  },
  {
    title: "Come Dine with me",
    imageUrl:
      "https://api.betaseries.com/pictures/shows?key=72ede40de1b2&id=27019&width=250&height=376",
    genre: "reality"
  },
  {
    title: "Superstore",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzM2OWM1MTUtNmNhYy00ZDJlLTgyYWQtOWY3ZmVjYjNiN2U4XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
    genre: "comedy"
  },
  {
    title: "Peep Show",
    imageUrl: "https://flxt.tmsimg.com/assets/p274645_b_v13_af.jpg",
    genre: "comedy"
  },
  {
    title: "The Office",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/24/TheOfficeUSSeason3Cover.jpg",
    genre: "comedy"
  },
  {
    title: "Schitts Creek",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
    genre: "comedy"
  },
  {
    title: "Community",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_.jpg",
    genre: "comedy"
  },
  {
    title: "Street Food Asia",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjI5NmJjY2MtNDFlZi00ZjZjLTk0ZjAtMjEyYjFkMTUwMzY4XkEyXkFqcGdeQXVyNjI4ODE4Mjk@._V1_FMjpg_UX1000_.jpg",
    genre: "documentary"
  },
  {
    title: "Get Smart with Money",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjEwMjRjZjItMWQzMy00OWEyLTg2MmUtMGFmYjRmMzZjNDc4XkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_.jpg",
    genre: "documentary"
  },
  {
    title: "Live to 100",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXMYS1jrAGL8qpxHNNfCbAeH5YGtxzGHd2cIT0gEtdQTUPlNeoJGqF6-SFypN15HEmTzqSOzYo6nav3yE5a9uUrmGC6EAZq6AelkbSWRXhsOzyavnltHVVw_wrqkRDq264WAkQ.jpg?r=877",
    genre: "documentary"
  },
  {
    title: "The Last Dance",
    imageUrl:
      "https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/dw34f8edfd/wp-content/uploads/2023/04/last_dance_1_feed.jpg",
    genre: "documentary"
  },
  {
    title: "The Tiger King",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Tiger_King%2C_Murder%2C_Mayhem_and_Madness_publicity_image.jpg/200px-Tiger_King%2C_Murder%2C_Mayhem_and_Madness_publicity_image.jpg",
    genre: "documentary"
  },
  {
    title: "Derry Girls",
    imageUrl:
      "https://pics.filmaffinity.com/Derry_Girls_TV_Series-448454269-large.jpg",
    genre: "comedy"
  },
  {
    title: "The IT crowd",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE5MThjMzAtNWVmNC00YThkLTlmNzktMTM3Yzk4YTZhMTgwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genre: "comedy"
  },
  {
    title: "Fresh Meat",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZGVhOTQ4YTktM2JkMy00MDlmLWI0NmQtMmUxMWU4MWJmNTExXkEyXkFqcGdeQXVyNjg0NTcxMTg@._V1_.jpg",
    genre: "comedy"
  },
  {
    title: "Ratched",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDJiZGE5NzYtZGU3Zi00NDQwLWFhMjAtNTM0MDM2ZTljMjAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: "drama"
  },
  {
    title: "Maid",
    imageUrl:
      "https://resizing.flixster.com/PNL2_RSM32WTsVdpPm5hmDL9eVU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMjg1OGRiYTgtODYwMy00ZWUxLTg5ZTctZDA3MDA0MTYyZmEwLmpwZw==",
    genre: "drama"
  },
  {
    title: "Black Mirror",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genre: "sci-fi"
  },
  {
    title: "Manifest",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
    genre: "sci-fi"
  },
  {
    title: "You",
    imageUrl:
      "https://resizing.flixster.com/g81COrwvWE7pqUEIVL0271ZsFT4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjVhYWZjMGMtY2I4MS00ZWE2LWE5NTEtNTVlZDRjMDE3ZGU1LmpwZw==",
    genre: "drama"
  }
];

//Declaring my variables, referencing them from my .html file

const startButton = document.getElementById("startButton");
const outputHeader = document.getElementById("mainHeader");
const entryContainer = document.getElementById("entryContainer");
const filmOrTvShowsForm = document.getElementById("filmOrTvShows");
const movieRadio = document.querySelector(
  'input[name="filmOrTvShow"][value="movie"]'
);
const tvRadio = document.querySelector(
  'input[name="filmOrTvShow"][value="tv"]'
);
const movieForm = document.getElementById("movieForm");
const tvForm = document.getElementById("tvForm");
const submitMovieGenreButton = document.getElementById(
  "submitMovieGenreButton"
);
const submitTvGenreButton = document.getElementById("submitTvGenreButton");
const loadingPage = document.getElementById("loadingPage");
const loadingImage = document.getElementById("rubiks");
const resultBox = document.querySelector(".resultBox");
const resultTitle = resultBox.querySelector(".resultTitle");
const resultImage = resultBox.querySelector(".resultImage");
const links = document.getElementById("links");
const startOverButton = document.getElementById("startOverButton");

// Function for username validation
function isValidUsername(username) {
  return username.trim().length > 0;
}

// while loop to ensure valid user input
function getUsernameWithLoop() {
  var username = document.getElementById("myText").value;
  while (!isValidUsername(username)) {
    username = prompt("Please enter a valid username:");
  }
  return username;
}

//adding event listeners and changing displays of elements upon click
startButton.addEventListener("click", function () {
  const username = getUsernameWithLoop();
  console.log("Start button clicked. Username:", username);

  outputHeader.textContent =
    "Hello " + username + ", let's find you something to watch";
  entryContainer.style.display = "none";
  startButton.style.display = "none";
  filmOrTvShowsForm.style.display = "block";
});

movieRadio.addEventListener("change", function () {
  outputHeader.style.display = "none";
  movieForm.style.display = "block";
  tvForm.style.display = "none";
});

tvRadio.addEventListener("change", function () {
  outputHeader.style.display = "none";
  movieForm.style.display = "none";
  tvForm.style.display = "block";
});

// Function to select a random item from an array (can be used for both movies and tvSeries)

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function displayResultWithDelay(title, imageUrl) {
  outputHeader.style.display = "none";
  entryContainer.style.display = "none";
  startButton.style.display = "none";
  filmOrTvShowsForm.style.display = "none";
  movieForm.style.display = "none";
  tvForm.style.display = "none";
  links.style.display = "none";
  startOverButton.style.display = "none";

  // Display the loading image
  loadingPage.style.display = "block";

  //built in timeout feature for my image display delay. 2000 milliseconds === 2 secs
  setTimeout(function () {
    // Hide the loading image
    loadingImage.style.display = "none";
    loadingPage.style.display = "none";

    // Show result
    resultTitle.textContent = title;
    resultImage.src = imageUrl;
    resultImage.alt = title;

    resultBox.style.display = "block";
    links.style.display = "block";
    startOverButton.style.display = "block";
  }, 2000);
}

// More form validation and storing information to console
submitMovieGenreButton.addEventListener("click", function (event) {
  event.preventDefault();
  //new variable
  const selectedGenres = Array.from(
    document.querySelectorAll('#movieForm input[type="checkbox"]:checked')
  ).map((input) => input.value);
  console.log("Selected movie genres:", selectedGenres);

  if (selectedGenres.length === 0) {
    alert("Please select at least one genre.");
    return;
  }

  // new variable to filter movies based on selected genres
  const filteredMovies = movies.filter((movie) =>
    selectedGenres.includes(movie.genre)
  );

  if (filteredMovies.length === 0) {
    alert("No movies found for the selected genres.");
    return;
  }

  // Get random movie from the filtered list
  const randomMovie = getRandomItem(filteredMovies);

  // Display result
  displayResultWithDelay(randomMovie.title, randomMovie.imageUrl);
});

//same method for TvGenre form
submitTvGenreButton.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedGenres = Array.from(
    document.querySelectorAll('#tvForm input[type="checkbox"]:checked')
  ).map((input) => input.value);

  if (selectedGenres.length === 0) {
    alert("Please select at least one genre.");
    return;
  }

  const filteredTVSeries = tvSeries.filter((series) =>
    selectedGenres.includes(series.genre)
  );

  if (filteredTVSeries.length === 0) {
    alert("No TV series found for the selected genres.");
    return;
  }

  const randomTVSeries = getRandomItem(filteredTVSeries);

  displayResultWithDelay(randomTVSeries.title, randomTVSeries.imageUrl);
});

// Event listener for the "Start Over" button. Clears all previous results and hides elements
startOverButton.addEventListener("click", function () {
  const resultTitle = document.querySelector(".resultTitle");
  const resultImage = document.querySelector(".resultImage");
  resultTitle.textContent = "";
  resultImage.src = "";
  resultImage.alt = "";
  const resultBox = document.querySelector(".resultBox");
  resultBox.style.display = "none";
  movieForm.style.display = "none";
  tvForm.style.display = "none";
  links.style.display = "none";
  startOverButton.style.display = "none";

  // start at the film or tv shows question, with radio buttons and checkboxes unchecked
  filmOrTvShowsForm.style.display = "block";
  movieRadio.checked = false;
  tvRadio.checked = false;

  const movieGenreCheckboxes = document.querySelectorAll(
    '#movieForm input[type="checkbox"]'
  );
  movieGenreCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  const tvGenreCheckboxes = document.querySelectorAll(
    '#tvForm input[type="checkbox"]'
  );
  tvGenreCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
