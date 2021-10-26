import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import teams from './teams.json';
import TeamInfo from './components/TeamInfo';


class App extends React.Component {
  render() { 
    console.log(teams)
    return (
    <div className="container">
      <h1 className="text-uppercase text-center">Teams</h1>
        <div className="row justify-content-around"> 
          {teams.map(team=> <TeamInfo team={team} />)}
        </div>
    </div>
    )
  }
}

export default App;
