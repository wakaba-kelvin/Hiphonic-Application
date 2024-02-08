import React from 'react'
import NavIcon from '../NavIcon';
import SearchIcon from '../../assets/search-circle.png'

import './VideoHeader.scss'




const VideoHeader = () => {
  return (
 
      <div className='group-page-header'>
      <div className="group-page-title">
        <h2>Video</h2>
      </div>
      <div className="group-page-icon">
        <NavIcon url={SearchIcon}/>
      </div>
    </div>

  )
}

export default VideoHeader;
