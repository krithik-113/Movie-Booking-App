import axios from "axios";

export const getAllMovies = async () => {
  const res = await axios.get("/movie").catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const data = await res.data;
  return data;
};

export const sendUserAuthRequest = async (data, signup) => {
  const res = await axios
    .post(`/users/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));
  if (res.status !== 200 && res.status !== 201) {
    return console.log("Unexpected Error Occurred");
  }
  const resData = await res.data;
  return resData;
};

export const sendAdminAuthRequest = async (data) => {
  const res = await axios
    .post("/admin/login", {
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const newRes = await res.data;
  return newRes;
};

export const newBooking = async (data) => {
  const res = await axios
    .post("/booking", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log);
  if (res.status !== 201) {
    return console.log("Unexpected Error");
  }
  const newRes = await res.data;
  return newRes;
};

export const getUserBookings = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios
    .get(`/users/bookings/${id}`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const newRes = await res.data;
  return newRes;
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/users/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const newRes = await res.data;
  return newRes;
};

export const deleteBooking = async (id) => {
  const res = await axios
    .delete(`/booking/${id}`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const newRes = await res.data;
  return newRes;
};

export const addMovie = async (data) => {
  const res = await axios.post("/movie",{
      title: data.inputs.title,
      description: data.inputs.description,
      releaseDate: data.inputs.releaseDate,
      actors: data.actors,
      posterUrl: data.inputs.posterUrl,
      featured: data.inputs.featured,
      admin: localStorage.getItem("adminId"),
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  ).catch(err => console.log(err))
  if (res.status !== 201) {
    return console.log('Unexpected Error')
  }
  const newRes = await res.data 
  return newRes
};

export const adminDetails = async () => {
  const adminId = localStorage.getItem('adminId')
  const res = await axios.get(`/admin/${adminId}`).catch(err => console.log(err))
  if (res.status !== 200) {
    return console.log('Unexpected Error Occured')
  }
  const newRes = await res.data 
  return newRes
}
