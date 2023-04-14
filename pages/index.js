
import Link from 'next/link'

export default function Home(props){
    return (
        <div>
            <h1>Welcome!</h1>
            <p>
                Fergus tite
            </p>
            <p>The weather: {props.forecast}</p>
            <Link href ="/about">Visit About page</Link>
        </div>
    )
}
export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()
    


    
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
    }
}
}