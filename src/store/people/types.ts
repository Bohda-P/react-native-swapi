export interface People {
  next: string
  count: number
  results: PeopleResult[]
  previous: any
}

export interface PeopleResult {
  vehicles: string[]
  homeworld: string
  height: string
  gender: string
  name: string
  eye_color: string
  birth_year: string
  films: string[]
  edited: string
  species: string[]
  url: string
  skin_color: string
  starships: string[]
  mass: string
  created: string
  hair_color: string
  selected?: boolean;
}