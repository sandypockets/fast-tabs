import SettingsIcon from "./SettingsIcon";

export default function FastTabButtons({ changePage }) {
  return (
    <div className="card flex-center">
      <button>Launch 1</button>
      <button>Launch 2</button>
      <button>Launch 3</button>
      <SettingsIcon changePage={changePage} />
    </div>
  )
}