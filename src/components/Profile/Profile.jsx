import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css'

const Profile = (props) => {
  return <div>
    <div>
      <img id={p.content_image} src='https://www.renaultgroup.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg' alt='' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;