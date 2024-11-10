import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import {Link, useNavigate} from "react-router-dom"
import React from 'react'
import { useSelector } from 'react-redux';

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate()
  const handleNavigate = () => {
    if (!isUserLoggedIn) {
      navigate("/auth")
    } else {
      navigate(`/booking/${id}`);
    }
  }
  return (
    <Card
      sx={{
        margin: 1,
        width: 250,
        height: "450px",
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width={"100%"} src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
      { !isAdminLoggedIn && <Button
          variant="contained"
          fullWidth
          LinkComponent={Link}
          onClick={handleNavigate}
          sx={{
            margin: "auto",
            bgcolor: "#2b2d42",
            ":hover": { bgcolor: "#121217" },
          }}
          size="small"
        >
          Book
        </Button>}
      </CardActions>
    </Card>
  );
}

export default MovieItem;