export default function PageButtons({ subPage, setSubPage }) {

  const handleClick = (destination) => {
    if (subPage === destination) {
      setSubPage('groups')
    } else {
      setSubPage(destination)
    }
  }

  return (
    <div className="card flex-center">
      <button onClick={() => handleClick('groupOne')}>Edit Group 1</button>
      <button onClick={() => handleClick('groupTwo')}>Edit Group 2</button>
      <button onClick={() => handleClick('groupThree')}>Edit Group 3</button>
    </div>
  )
}