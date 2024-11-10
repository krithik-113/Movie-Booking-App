import React, { Fragment, useEffect, useState } from "react";
import {
  getUserBookings,
  getUserDetails,
} from "../api-helpers/api-helpers";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteBooking } from "../api-helpers/api-helpers";

const UserProfile = () => {
  const [bookings, setBookings] = useState("");
  const [user, setUser] = useState()
  useEffect(() => {
    getUserBookings()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
    getUserDetails()
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    deleteBooking(id)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <Box width={"100%"} display={"flex"}>
     
        <Fragment>
        {user && <Box
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"30%"}
          padding={3}
        >
          <AccountCircleIcon
            sx={{ fontSize: "20rem", textAlign: "center", ml: 3 }}
          />
          <Typography
            padding={1}
            width={"auto"}
            textAlign={"center"}
            border={"1px solid #ccc"}
            borderRadius={6}
          >
            Name: {user.name}
          </Typography>
          <Typography
            marginTop={3}
            padding={1}
            width={"auto"}
            textAlign={"center"}
            border={"1px solid #ccc"}
            borderRadius={6}
          >
            Email: {user.email}
          </Typography>
        </Box>}
        {bookings && <Box width={"70%"} display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h3"
            fontFamily={"verdana"}
            textAlign={"center"}
            padding={2}
          >
            Bookings
          </Typography>
          <Box
            margin={"auto"}
            display={"flex"}
            flexDirection={"column"}
            width={"80%"}
          >
            <List>
              {bookings.map((booking, index) => {
               
                return (
                  <ListItem
                    sx={{
                      bgcolor: "#00d386",
                      color: "white",
                      textAlign: "center",
                      margin: 1,
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie _id : {booking.movie}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Seat : {booking.seatNumber}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Date : {new Date(booking.date).toDateString()}
                    </ListItemText>
                    <IconButton onClick={() => handleDelete(booking._id)} color="error">
                      <DeleteForeverIcon color="red" />
                    </IconButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>}
        </Fragment>
    
    </Box>
  );
};

export default UserProfile;
