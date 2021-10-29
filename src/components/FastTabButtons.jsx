import SettingsIcon from "./SettingsIcon";

export default function FastTabButtons({ state, changePage }) {

  const handleClick = (group) => {
    chrome.runtime.sendMessage({
      id: 'tabs',
      groupId: group,
      isPinned: state.groupTwoIsPinned
    });
  }

  return (
    <div className="card flex-center">
      <button onClick={() => handleClick('groupOne')}>Launch 1</button>
      <button onClick={() => handleClick('groupTwo')}>Launch 2</button>
      <button onClick={() => handleClick('groupThree')}>Launch 3</button>
      <SettingsIcon changePage={changePage} />
    </div>
  )
}