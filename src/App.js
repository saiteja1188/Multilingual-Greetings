import {Component} from 'react'

import Tabs from './components/Tabs'
import FilterDetails from './components/FilterDetails'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
  }

  clickTabItem = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  getFilterDisplayImg = () => {
    const {activeTab} = this.state
    console.log(activeTab)
    const filterDisplayImg = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTab,
    )
    return filterDisplayImg
  }

  render() {
    const {activeTab} = this.state
    const filterDisplayImg = this.getFilterDisplayImg()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-menu">
          {languageGreetingsList.map(tabDetails => (
            <Tabs
              key={tabDetails.id}
              tabDetails={tabDetails}
              isActive={activeTab === tabDetails.id}
              clickTabItem={this.clickTabItem}
            />
          ))}
        </ul>
        {filterDisplayImg.map(eachDetails => (
          <FilterDetails key={eachDetails.id} eachFilter={eachDetails} />
        ))}
      </div>
    )
  }
}

export default App
