export default function Home({ changePage }) {
  return (
    <>
      <h1 className="get-started">Home page</h1>
      <a onClick={() => changePage('settings')}>Settings</a>
    </>
  )
}