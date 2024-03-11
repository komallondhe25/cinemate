import { useEffect,useState } from "react"

export const useFetch = (api, queryParam="") => {
    const [data, setData] = useState([]);

    const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryParam}`;

    useEffect(() => {
        async function getMovies() {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json.results)
          setData(json.results);
        }
        getMovies();
      }, [url]);

  return {data};
}
