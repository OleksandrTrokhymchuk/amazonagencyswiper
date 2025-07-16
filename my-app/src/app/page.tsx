import MainSwiper from "./components/mainSwiper/mainSwiper"

export default function Home() {
  return (
    <main  className="bg-no-repeat bg-bottom bg-cover h-[755px]"
          style={{ backgroundImage: "url('/images/background.svg')" }} >
      <section
         className="max-w-[1360px] mx-auto px-24 "
          >
        <MainSwiper/>
      </section>
    </main>
  )
}