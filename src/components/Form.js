import React, { useState } from "react"
import DropComapies from "./DropCompanies"


const Form = ({ userData = {}, postUser, updateUser }) => {//recebe por desestruturação userData com valor padrão ,postUser e updateUser
	const [user, setUser] = useState({//define o valor inicial de user como um objeto javascript que recebe dados de userData
		name: userData.name ?? "",
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		companiesId: userData.companiesId ?? "0",
	})

	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })//espalhamento de user, mais um par chave valor sobrepondo o anterior, para definir o valor de  user
	}

	const submitUser = e => {
		e.preventDefault() // previne o comportanto padrão

		if (user.companiesId === "0") return

		if (userData.id) {//chama a função postUser ou updateUser dependendo se existe userData.id
			updateUser(userData.id, user)
		} else {
			postUser(user)
		}
	}

	return (//formulário em JSX
		<form onSubmit={submitUser} className='row'>//função submitUser irá lidar com os dados do formulário
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} />
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}//valor  dependendo do userData
			/>
		</form>
	)
}

export default Form
