import { API_URL_PEOPLE } from "../constants/api.constant";

export const getAllCharacter = async (): Promise<CharacterDataType[]> => {
  const res = await fetch(API_URL_PEOPLE);
  const resJson: CharactersResponse = await res.json();
  const editedCharacterList = resJson.results.map(character => {
    console.log(".................. character", character);

    return {
      id: Number(
        character.url
          .split("/")
          .filter(Boolean)
          .pop()
      ),
      name: character.name,
      gender: character.gender,
      homeworld: character.homeworld,
      height: character.height,
      birth_year: character.birth_year,

      mass: character.mass,
      hair_color: character.hair_color,
      skin_color: character.skin_color,
      eye_color: character.eye_color,
      films: character.films,
      species: character.species,
      vehicles: character.vehicles,
      starships: character.starships,
      created: character.created,
      edited: character.edited,
      url: character.url
    };
  });
  return editedCharacterList;
};

export const getSingleCharacter = async (
  id: number
): Promise<CharacterDetailType> => {
  const res = await fetch(`${API_URL_PEOPLE}${id}/`);
  const character: CharacterResponse = await res.json();

  const resSpecies = character.species.map(url =>
    fetch(url)
      .then(data => data.json())
      .then((c: SpeciesResponse) => c.name)
  );
  const resStarships = character.starships.map(url =>
    fetch(url)
      .then(data => data.json())
      .then((c: StarshipsResponse) => c.name)
  );
  const resVehicles = character.vehicles.map(url =>
    fetch(url)
      .then(data => data.json())
      .then((c: VehiclesResponse) => c.name)
  );
  const resFilms = character.films.map(url =>
    fetch(url)
      .then(data => data.json())
      .then((c: FilmResponse) => c.title)
  );
  const species = await Promise.all(resSpecies);
  const starships = await Promise.all(resStarships);
  const vehicles = await Promise.all(resVehicles);
  const films = await Promise.all(resFilms);

  const editedCharacterList = {
    id: Number(
      character.url
        .split("/")
        .filter(Boolean)
        .pop()
    ),
    name: character.name,
    gender: character.gender,
    homeworld: character.homeworld,
    height: character.height,
    birth_year: character.birth_year,
    mass: character.mass,
    hair_color: character.hair_color,
    skin_color: character.skin_color,
    eye_color: character.eye_color,
    films: films,
    species: species,
    vehicles: vehicles,
    starships: starships,
    created: character.created,
    edited: character.edited,
    url: character.url
  };
  return editedCharacterList;
};

export type MovieDataType = {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
};

export type CharacterItemType = {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  home_world: string;
  gender: string;
};

export type MovieDetailType = {
  title: string | null;
  director: string | null;
  producer: string | null;
  description: string | null;
  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
};

export type CharDetailType = {
  title: string | null;
  birth_year: string | null;
  gender: string | null;
  description: string | null;
  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
};

export type CharacterDetailType = {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type FilmsResponse = {
  count: number;
  next: number | null;
  previos: number | null;
  results: FilmResponse[];
};

export type FilmResponse = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterDataType = {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharactersResponse = {
  count: number;
  next: number | null;
  previos: number | null;
  name: string | "";
  results: CharacterResponse[];
};

export type CharacterResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type homeworldResponse = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type PlanetsResponse = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type StarshipsResponse = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type VehiclesResponse = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type SpeciesResponse = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
