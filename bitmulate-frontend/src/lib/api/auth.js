import axios from 'axios'

export const checkEmail = (email) => {
    axios.get('v1.0/auth/check-email/' + email)
}