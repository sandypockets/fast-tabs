export default function Settings({ changePage }) {
  return (
    <>
      Choose which URLs you'd like to edit.
      <a onClick={() => changePage('home')}>Home</a>
    </>
  )
}