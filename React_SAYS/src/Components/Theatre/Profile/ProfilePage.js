import React from 'react'
import PPCss from './ProfilePage.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ProfilePage = () => {
    return (
        <div
            style={{
                background: 'url("https://c1.wallpaperflare.com/preview/330/534/353/seat-chair-theatre-dark.jpg")',
                backgroundSize: 'cover', // Adjust this based on your needs
                height: '100vh'
            }}
        >
            <button className={PPCss.backtohomebtn}>Back to home</button>



            <div className={PPCss.maindiv}>

                <div className={PPCss.profilepage} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // Add other styles as needed
                }}>
                    <h1 className={PPCss.profileheading}>Profile</h1>
             
                  

                </div>
            </div>


        </div>
    )
}

export default ProfilePage
