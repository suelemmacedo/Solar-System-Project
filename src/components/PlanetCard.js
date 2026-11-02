import PropTypes from 'prop-types';
import './PlanetCard.css';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div className="planet-card" data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>

      <img src={planetImage} alt={`Planeta ${planetName}`} />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
