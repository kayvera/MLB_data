import React from "react";
import "./MLBStandings.styles";

const MLBStandings = () => {
  return (
    <div className="Card">
      <div className="StandingInfo">
        <h1>MLB Standings</h1>
        <div className="StandingsTable">
          <tr>
            <td> </td>
            <td> </td>
            <td>W</td>
            <td>L</td>
            <td>PCT</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </div>
      </div>
    </div>
  );
};

export default MLBStandings;
