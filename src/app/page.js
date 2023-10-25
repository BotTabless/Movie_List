import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

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