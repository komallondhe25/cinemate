import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export const MovieList = ({api, title}) => {
  const {data: movies} = useFetch(api);
  useDocumentTitle(title);
  return (
    <main>
      <section className="py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
        
        </div>
      </section>
    </main>
  );
};
