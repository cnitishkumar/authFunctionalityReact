import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'

const Login = props => {
  const {history} = props

  const onClickLoginBtn = async () => {
    const loginApi = 'https://apis.ccbp.in/login'

    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApi, options)

    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1 className="heading">Please Login</h1>
      <button type="button" onClick={onClickLoginBtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
