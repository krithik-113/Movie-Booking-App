import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieItem from "./Movies/MovieItem";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";

const HomePage = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getAllMovies().then(data=>setMovies(data.movies)).catch(err=>console.log(err))
    }, [])
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={"80%"} height={"60vh"} padding={2}>
        <img
          src="https://media5.bollywoodhungama.in/wp-content/uploads/2024/01/Kanguva-1.jpg"
          alt="Bramastra"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {movies?.slice(0, 4).map((item, index) => (
          <MovieItem
            id={item._id}
            title={item.title}
            releaseDate={item.releaseDate}
            posterUrl={item.posterUrl}
            key={index}
          />
        ))}
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
