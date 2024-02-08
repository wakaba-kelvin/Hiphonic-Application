import React from 'react'
import './Bottom.scss'
import CenterBody from '../layout/CenterBody'

const Bottom = () => {
  return (
    <div className='below-image'>
      <div className="bottom-top">
      <div className="pro">
        Angela Lee <br />
        @angela
      </div>
      <div className="navs">
        <div className="posts">
          <h3 className='dim-header'>POSTS</h3><br />
          683
        </div>
        <div className="posts">
          <h3 className='dim-header'>FRIENDS</h3><br />
          5.7K
        </div>
        <div className="posts">
          <h3 className='dim-header'>PHOTOS</h3><br />
          296
        </div>
        <div className="posts">
          <h3 className='dim-header'>LIKES</h3><br />
          10.7K
        </div>
      </div>
      </div>

      <CenterBody/>
    </div>
  )
}

export default Bottom