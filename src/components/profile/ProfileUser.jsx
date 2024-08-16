export default function ProfileUser({user}){
    console.log('user', user)
    return(
        <div className="profile-card">
            <h1>User</h1>
            {user && 
                <div className="user">
                    <label><b>Name:</b> {user.name}</label>
                    <label><b>Email:</b> {user.email}</label>
                </div>}
            
        </div>
    )
}