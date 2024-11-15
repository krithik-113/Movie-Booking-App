import React from "react";
import AuthForm from "./AuthForm";
import { sendAdminAuthRequest } from "../../api-helpers/api-helpers";
import { adminActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
 const onResReceived = (data) => {
   console.log(data);
   dispatch(adminActions.login());
   localStorage.setItem("adminId", data.id);
   localStorage.setItem('token', data.token)
   navigate('/')
 };
  const getData = (data) => {
    console.log("admin", data);
    sendAdminAuthRequest(data.inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;
