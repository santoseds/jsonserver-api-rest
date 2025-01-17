export const httpHelper = () => {
	const customFetch = async (url, options = {}) => {//funçao assíncrona recebe dois parâmetros
		const defaultMethod = "GET"
		const defaultHeaders = { // define dafaultHeadrs
			"Content-Type": "application/json",
			Accept: "application/json",
		}
		const controller = new AbortController()
		options.signal = controller.signal

		options.method = options.method || defaultMethod
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

		setTimeout(() => {
			controller.abort()
		}, 3000)

		try {
			const response = await fetch(url, options)//aguarda resposta para continuar a execução
			return await response.json()
		} catch (err) {
			return err
		}
	}

	const get = (url, options = {}) => customFetch(url, options)

	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}

	return {//retorna as funções para realizar CRUD
		get,
		post,
		put,
		del,
	}
}
