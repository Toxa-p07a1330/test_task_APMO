const UserRow = ({user}) => {
    return <tr>
        <td>
            {JSON.stringify(user)}
        </td>
    </tr>
}
export default UserRow