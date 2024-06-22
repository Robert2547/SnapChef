import React from 'react'
import { useLogout } from '../../hooks/useLogout'

const LogoutBtn = () => {
    const {loading, logout} = useLogout();
  return (
    <div>
        {!loading ? (
            <button onClick={logout} className="btn btn-danger">
                Logout
            </button>
        ) : (
            <button className="btn btn-danger" disabled>
                <span className="spinner-border spinner-border-sm"></span>
                Logging out...
            </button>
        )}
    </div>
  )
}

export default LogoutBtn