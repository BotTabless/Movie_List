import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <MovieList api={topAnime}/>
      </section>
    </>
  )
}

export default Page