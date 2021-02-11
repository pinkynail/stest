import React from "react"
import './../App.css'
import cast from './Profile.Module.css'

const Profile = () => {
    return (
        <div className={cast.profile}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <div><img src='https://34travel.me/media/posts/5e1a25f3879e9-samara-pan.jpg'/>
            </div>
            <div>
                Ava+descr
            </div>
            <div>
                My Post
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;