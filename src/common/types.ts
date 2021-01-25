interface ApiWrapperOf<T> {
  status: number;
  value: T;
}

interface Joke {
  id: string;
  text: string;
  joke_url: string;
  icon_url: string;
}

export interface JokeCategoriesDTO extends ApiWrapperOf<string[]> {}
export interface JokeDTO extends ApiWrapperOf<Joke> { }
