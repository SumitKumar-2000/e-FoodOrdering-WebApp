import React from 'react'
import '../userpreview/userpreview.css'
import MoodCollectionCard from './moodcollectioncard'
// import LoadingBar from 'react-top-loading-bar'
import { Link } from 'react-router-dom'

const moodCollection = [
  {
    id: '1',
    title: 'Order Online',
    coverImg: 'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
  },
  {
    id: '2',
    title: 'Dining Out',
    coverImg: 'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
  },
  {
    id: '3',
    title: 'Nightlife and Clubs',
    coverImg: 'https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
  }
]

const UserPreview = () => {

  const userInfo = localStorage.getItem('userInfo')
  // const [progress,setProgress] = useState(0);

  return (
    <>
      {/* <LoadingBar
      style={{height:'2px'}}
      color='#f11946'
      progress={progress}
    /> */}
      <div className="user-preview">
        <div className="user-auth ">
          <div className="auth-box">
            {!userInfo ? (
              <div className="auth-text cur-pointer">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className='auth-text cur-pointer'>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Home
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="background-intro absolute-center"></div>
        <div className="info">
          <div className="logo cur-pointer"> e!</div>
          <div className="info-tag">
            Discover The Best Food, Restaurants & Cafes
          </div>
        </div>

        <div className="collection-varient max-width">
          {moodCollection.map((item) => {
            return <MoodCollectionCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default UserPreview