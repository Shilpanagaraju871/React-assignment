import React, { useState } from 'react';
import showPwdImg from './hide-password.png';
import hidePwdImg from './show-password.png';

function App() {

  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="App">
        <h3>  Show and hide password  </h3>

      <div className="pwd-container">
        <div>
        <input name="email" type="email" placeholder='Enter mail id' />
        </div>
        <div className='pwd-container1'>
        <br/>
        <input
          name="pwd"
          placeholder="Enter Password"
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <img alt='showorhide' title={isRevealPwd ? "Hide password" : "Show password"}  src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState) }
        />
        <button>Login</button>
      
        </div>
        
      </div>

    </div>
  );
}

export default App;