import './Register.scss';

function Register() {
  return (
    <div className="register sections">
        <div className="signup">
            <h1>Sign Up</h1>
            <form>
                <label>
                    <span>Nickname</span>
                    <input type="text" placeholder='Enter your nickname...' required/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" placeholder='Enter your email...' required/>
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" placeholder='Enter your password...' required/>
                </label>
                <button>Sign up</button>
            </form>
        </div>
        <div className="signin">
            <h1>Sign In</h1>
            <form>
                <label>
                    <span>Email:</span>
                    <input type="email" placeholder='Enter your email...' required/>
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" placeholder='Enter your password...' required/>
                </label>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Register
