import React from "react"
import {connect} from 'react-redux'
import {logOut} from './actions'

export const Profile = () => {
    return <div>Профиль</div>
}

export const ProfileWithAuth = connect(
    null,
    { logOut }
) (Profile)