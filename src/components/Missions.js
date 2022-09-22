import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
        <div>
          {missions.map((item, index) => (<MissionCard
            Key={ index }
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destinations={ item.destination }
          />))}
        </div>
      </>
    );
  }
}

export default Mission;
