import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Search = ({api}) => {
  const [searchParam] = useSearchParams();
  const queryParam = searchParam.get("q");
  const {data: movies} = useFetch(api, queryParam);
  useDocumentTitle(`Search result for ${queryParam}`)
  return (
    <main>
      <section className="py-3">
        <p className="text-gray dark:text-slate-50 text-2xl ">{movies.length > 0 ? `Result found for ${queryParam}` : `No result found ${queryParam}`}</p>
      </section>
      <section className="py-7">
        <div className="flex flex-wrap justify-start">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
        
        </div>
      </section>
    </main>
  )
}
