export default function LinkGroup({ group, groupNum }) {
  return (
    <div className="urlForms card">
      <h3 className="linkGroupTitle cardTitle">Link group {groupNum}</h3>
      {group.map((item, index) => (
        <div key={index} className="urlForm">
          <label className={item.className}>{item.label}</label>
          <input className={item.inputClassName} type={item.type} value={item.value} checked={item.checked} onChange={item.onChangeFunction} />
        </div>
      ))}
    </div>
  )
}