import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../App.css";

const Dashbord = () => {
  const navigation = useNavigate();

  const [logout, setLogout] = React.useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigation("/");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Do you want to logout now?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes',
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire('Succesfully Logout!', '', 'success');
            localStorage.removeItem("auth");
            setLogout(true);
        } 
    })
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashbord;
