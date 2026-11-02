import { useState } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

function Mission() {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Todos');
  const [selectedDestination, setSelectedDestination] = useState('Todos');

  const countries = [...new Set(missions.map((mission) => mission.country))].sort(
    (a, b) => a.localeCompare(b, 'pt-BR'),
  );

  countries.unshift('Todos');

  const destinations = [...new Set(missions.map((mission) => mission.destination))].sort(
    (a, b) => a.localeCompare(b, 'pt-BR'),
  );

  destinations.unshift('Todos');

  const filteredMissions = missions.filter((mission) => {
    const matchesName = mission.name.toLowerCase().includes(search.trim().toLowerCase());

    const matchesCountry =
      selectedCountry === 'Todos' || mission.country === selectedCountry;

    const matchesDestination =
      selectedDestination === 'Todos' || mission.destination === selectedDestination;

    return matchesName && matchesCountry && matchesDestination;
  });

  const hasActiveFilters =
    search.trim() !== '' ||
    selectedCountry !== 'Todos' ||
    selectedDestination !== 'Todos';

  const clearFilters = () => {
    setSearch('');
    setSelectedCountry('Todos');
    setSelectedDestination('Todos');
  };

  return (
    <section id="missoes" className="missions-section" data-testid="missions">
      <Title headline="Missões" />

      <div className="missions-filters">
        <input
          type="search"
          className="missions-search"
          placeholder="Buscar missão..."
          aria-label="Buscar missão pelo nome"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          className="missions-filter"
          aria-label="Filtrar por país"
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          className="missions-filter"
          aria-label="Filtrar por destino"
          value={selectedDestination}
          onChange={(event) => setSelectedDestination(event.target.value)}
        >
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>

      <div className="missions-results">
        <p>
          {filteredMissions.length}{' '}
          {filteredMissions.length === 1 ? 'missão encontrada' : 'missões encontradas'}
        </p>

        <button
          type="button"
          className="clear-filters"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
        >
          Limpar filtros
        </button>
      </div>

      {filteredMissions.length > 0 ? (
        <div className="missions-grid">
          {filteredMissions.map((mission) => (
            <MissionCard
              key={mission.name}
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
            />
          ))}
        </div>
      ) : (
        <div className="missions-empty">
          <p>Nenhuma missão encontrada.</p>
          <p>Tente alterar a busca ou os filtros selecionados.</p>
        </div>
      )}
    </section>
  );
}

export default Mission;
