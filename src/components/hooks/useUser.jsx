import React, { useEffect, useState } from 'react'

const useUser = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(['Indra', 'Adha', "Muhammad"])
    }, [])

    const deleteUser = (userDelete) => {
        setUsers(users.filter((user) => user !== userDelete))
    }

    const addUser = (user) => {
        setUsers([...users, user])
    }

    return [users, deleteUser, addUser]
}

export default useUser