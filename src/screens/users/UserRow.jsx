const UserRow = ({user}) => {
    return <tr>
        <td>{user.id}</td>
        <td>{user.access?"+":"-"}</td>
        <td>{user.name ?? "-"}</td>
        <td>{user.lastName ?? "-"}</td>
        <td>{user.email ?? "-"}</td>
        <td>{user.birthDate ? new Date(user.birthDate).toLocaleDateString() : "-"}</td>
    </tr>
}
export default UserRow