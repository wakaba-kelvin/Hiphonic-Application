import React from 'react'
import NavIcon from '../NavIcon';
import SearchIcon from '../../assets/search-circle.png'
import Button from '../shared/Button'
import Plus from '../../assets/plus.png'
import './GroupHeader.scss'


const GroupHeader = () => {
  return (
 
      <div className='group-page-header'>
      <div className="group-page-title">
        <h2>Groups</h2>
      </div>
      <div className="group-page-icon">
        <NavIcon url={SearchIcon}/>
        <Button  btnicon={Plus} msg="Create New Group" />
      </div>
    </div>

  )
}

export default GroupHeader;
