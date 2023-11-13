import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <MovieList api={topAnime}/>
      </section>
      {/* anime rekomendasi */}
      <section>
        <Header title="Rekomendasi" linkTitle="Lihat Semua" linkHref="/populer" />
        <MovieList api={recommendedAnime}/>
      </section>
    </>
  )
}

export default Page