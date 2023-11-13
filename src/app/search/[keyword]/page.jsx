import { getAnimeResponse } from "@/libs/api-libs"
import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodeKeyword}...`} />
        <MovieList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page