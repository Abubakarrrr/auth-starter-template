
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const { currentUser, loading } = useSelector(state => state.user)
    console.log(currentUser)
    if (loading) {
        return <div>Loading...</div>
    }

    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
