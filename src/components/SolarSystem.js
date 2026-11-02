import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

function SolarSystem() {
  return (
    <section id="planetas" className="solar-system" data-testid="solar-system">
      <Title headline="Planetas" />

      <div className="planets-grid">
        {[...planets]
          .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
          .map((planet) => (
            <PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />
          ))}
      </div>
    </section>
  );
}

export default SolarSystem;
