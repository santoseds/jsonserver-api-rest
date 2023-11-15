import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table"

import { httpHelper } from "../helpers/httpHelper"

const CrudUser = () => {
	const [users, setUsers] = useState(null)//valor null para users

	const url = "http://localhost:5000/users"
	const api = httpHelper()

	useEffect(() => {//executa a funçao getUsers apenas na primeira renderização
		getUsers()
	}, [])

	const postUser = user => {
		api
			.post(`${url}`, { body: user })// utiliza api post  com then  para lidar com a Promise de resposta, catch para lidar com uma resposta de  erro
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`)
			.then(res => {
				setUsers(res)
			})
			.catch(err => console.log(err))
	}

	if (!users) return null

	return (
		<>
			<h3>New user</h3>
			<Form postUser={postUser} />
			<div className='all-users'>
				<h3>All users</h3>
				<Table //componente <Table> recebe dados com a utilizaão de props
					users={users}
					setUsers={setUsers}
					postUser={postUser}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
			</div>
		</>
	)
}

export default CrudUser
