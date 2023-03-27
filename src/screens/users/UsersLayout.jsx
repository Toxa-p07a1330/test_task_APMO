import UserRow from "./UserRow";

const UsersLayout = ({users}) => {
    return <table>
        {users.map(user => <UserRow user={user} key={user.id}/>)}
    </table>

}
export default UsersLayout