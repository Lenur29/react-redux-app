const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getPosts = async (page: number) => {
  const response = await fetch(`${BASE_URL}posts?_page=${page}`);

  return response.json();
};
