import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '36802849-b7af5cd62cfcc85474a5247b9';

const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    // `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};

// const fetchLargeImage = async LargeImageURL => {
//   const { data } = await axios.get(LargeImageURL);

//   return data;
// };

export { fetchImages };
