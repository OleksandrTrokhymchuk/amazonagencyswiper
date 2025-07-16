import MainSwiper from "./components/mainSwiper/mainSwiper"

export default function Home() {
  return (
    <section
        className="bg-no-repeat bg-bottom bg-cover h-[755px]"
        style={{ backgroundImage: "url('/images/background.svg')" }}
      >
      <MainSwiper />
    </section>
  )
}