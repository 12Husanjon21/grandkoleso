import axios from 'axios'

const $api = axios.create({
	baseURL: 'http://195.26.240.163:4000',
})
export default $api