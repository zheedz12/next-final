import Link from 'next/link'
export default function about(props){
    return (
        <div>
            <h1>About!</h1>
            <p>
                Fergus sobrang juts
            </p>
            <p>I have {props.repoCount} public repos on PornHub.</p>
            <Link href ="/">Visit About page</Link>
        </div>
    )
}
export async function getStaticProps() {
    const response = await fetch("https://api.github.com/users/learnwebcode")
    const data = await response.json()
  
    return {
      props: {
        repoCount: data.public_repos
      },
      revalidate: 10
    }
  }