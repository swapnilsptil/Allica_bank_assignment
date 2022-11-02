import { CharacterDetailType, MovieDetailType } from "../helpers/api";

// export const MOVIE_DETAIL_MOCK_DATA: MovieDetailType = {
//   title: 'Something Title',
//   director: 'Jonny Sins',
//   producer: 'Jonny Stark',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores fugit nostrum quaerat voluptatem dicta id dolorum modi dignissimos eum, magni alias, voluptate culpa tempora unde quos architecto assumenda eligendi.',
//   characters: ['Nikkar', 'Saitama', 'Genos', 'Yoda'],
//   films: ['Earth', 'EA-45', 'Youranus'],
//   species: ['Cat', 'Dog'],
//   starships: [],
//   vehicles: ['Car', 'Fly'],
// };

export const CHARACTER_DETAIL_MOCK_DATA: CharacterDetailType = {
  id: 1,
  name: "Luke Skywalker",
  height: "111",
  mass: "187",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "Revenge of the Sith"
  ],
  species: [],
  vehicles: ["Snowspeeder", "Imperial Speeder Bike"],
  starships: ["X-wing", "Imperial shuttle"],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-09T13:50:51.644000Z",
  url: "https://swapi.dev/api/people/1/"
};
