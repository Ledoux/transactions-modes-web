import React, { Component } from 'react'

import ModeItem from '../items/ModeItem'

class ModesBar extends Component {
  render () {
    const { history,
      modes,
      selectedMode
    } = this.props
    const lastItemIndex = modes && (modes.length - 1)
    // FIND THE INDEX OF THE MATCHING MODE
    const selectedIndex = Math.max(0, selectedMode && modes.map(({name}) =>
      name === selectedMode.name)
      .indexOf(true))
    return (<div className='modes-bar flex'>
      <div className='modes-bar__slider' style={{
          left: `${selectedIndex * 4.25}rem`
        }}/>
      {
        modes && modes.map((mode, index) => {
          const isFirst = index === 0
          const isLast = index === lastItemIndex
          return (<div
            className='modes-bar__item'
            key={index}
          >
            <ModeItem
              history={history}
              isFirst={isFirst}
              isLast={isLast}
              isSelected={selectedIndex === index}
              {...mode}
            />
          </div>)
        })
      }
    </div>)
  }
}

export default ModesBar