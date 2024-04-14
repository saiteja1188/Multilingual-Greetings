import './index.css'

const FilterDetails = props => {
  const {eachFilter} = props
  const {imageUrl, imageAltText} = eachFilter

  return (
    <li className="list-item">
      <img className="image" src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default FilterDetails
