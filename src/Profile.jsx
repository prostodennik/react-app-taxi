import React from "react"
import { withAuth } from './AuthContext'

export const Profile = () => {
    return <div>Профиль</div>
}

export const ProfileWithAuth = withAuth(Profile)