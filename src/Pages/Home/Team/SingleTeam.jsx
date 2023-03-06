import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const SingleTeam = ({team}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="">
          <img
            src={team.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{team.title}</h2>
          <h5>{team.expertis}</h5>
          <div className="card-actions flex text-3xl">
            <Link className="hover:text-red-600" to={team.facebook}><FaFacebookSquare></FaFacebookSquare></Link>
            <Link className="hover:text-red-600" to={team.twitter}><FaTwitterSquare></FaTwitterSquare></Link>
            <Link className="hover:text-red-600" to={team.linkedin}><FaLinkedin></FaLinkedin></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
