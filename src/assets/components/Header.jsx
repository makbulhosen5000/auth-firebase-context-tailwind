import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut=()=>{
    logOut()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content sm:flex-col md:flex-row lg:flex-row">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        <Link to="/profile" className="btn btn-ghost normal-case text-xl">
          Profile
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              SignOut
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
