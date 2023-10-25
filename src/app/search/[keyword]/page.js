import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"

const Page = async ({ params }) => {
  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${keyword}...`} />
        <MovieList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page