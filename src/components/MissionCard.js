import PropTypes from 'prop-types';
import './MissionCard.css';

function MissionCard({ name, year, country, destination }) {
  return (
    <article className="mission-card" data-testid="mission-card">
      <span className="mission-year" data-testid="mission-year">
        {year}
      </span>

      <h3 className="mission-name" data-testid="mission-name">
        {name}
      </h3>

      <p className="mission-country" data-testid="mission-country">
        {country}
      </p>

      <p className="mission-destination" data-testid="mission-destination">
        Destino:
        {' '}
        {destination}
      </p>
    </article>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
