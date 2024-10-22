import Product from "../components/Product"
import rocky from "../assets/rocky.jpg"
import ferrari from "../assets/ferrari.jpg"
import ford from "../assets/Ford.svg"
import moto_guzzi from "../assets/Moto_Guzzi.svg"

const Home = ()=>{
    return(
        <>
        <Product name="Rocky Bites" price={`N${150}`} description="Rocky Bites is one of the popular confectionaries in Nigeria right now. It has a sweet taste that almost everyone finsih two packs in a roll" imageUrl = {rocky}/>

        <Product name="Rocky Bites" price={`N${150}`} description="Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people." imageUrl = {ferrari}/>

        <Product name="Rocky Bites" price={`N${150000000}`} description="Ford Motor Co (Ford) is an automotive manufacturer. The company's primary activities include the production and sale of a wide range of vehicles, including trucks, sport utility vehicles, electric vehicles, commercial vans, cars, and luxury vehicles." imageUrl = {ford}/>

        <Product name="Rocky Bites" price={`N${150}`} description="Established in 1921 in Mandello del Lario, Italy, the company is noted for its historic role in Italy's motorcycling manufacture, its prominence worldwide in motorcycle racing, and industry innovations—including the first motorcycle centre stand, wind tunnel and eight-cylinder engine." imageUrl = {moto_guzzi}/>
        </>
    )
}
export default Home