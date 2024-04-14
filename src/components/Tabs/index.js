import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails
  const buttonClass = isActive ? 'button active' : 'button'

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  return (
    <li className="tab-item">
      <button type="button" className={buttonClass} onClick={onClickTabItem}>
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
