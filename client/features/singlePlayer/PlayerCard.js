import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./playerCard.css";

function PlayerCard({ player }) {
  return (
    <Link to={`/players/${player.id}`}>
      <div
        className="playerCard"
        style={{
          backgroundImage: `url(/${player.img})`,
        }}
        draggable={false}
      >
        <h2 className="playerCardInfo">{player.name}</h2>
        <h2 className="playerCardInfo">{player.teamAbbr}</h2>
      </div>
    </Link>
  );
}



export default PlayerCard;
