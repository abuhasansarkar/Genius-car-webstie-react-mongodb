import React, { useEffect, useState } from "react";
import SingleTeam from "./SingleTeam";

const Team = () => {
     const [teams, setTeams] = useState([]);

     useEffect( () => {
      fetch("team.json")
      .then(res => res.json())
      .then(data => setTeams(data))
     }, [])
  return (
    <section className="py-10">
      <div className="sec-title text-center">
        <h3 className=" text-2xl font-bold mb-5 text-red-600">Team</h3>
        <h2 className="text-5xl mb-5 font-bold">Meet Our Team</h2>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
      </div>
      <div className="flex flex-1 gap-5 justify-between mt-5">
         {
          teams.map(team =>  <SingleTeam team={team} key={team.id}></SingleTeam>)
         }
      </div>
    </section>
  );
};

export default Team;
