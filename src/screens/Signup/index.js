import React, { useState } from "react";
import { Firebase, FirebaseContext } from "../../firebase";

const SignupPage = () => {};

const Signup = props => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const onSubmit = (userEmail, userPwd) => {};

  return (
    <FirebaseContext.Consumer>
      <div>
        <input onChange={e => setUserEmail(e.target.value)} value={userEmail} />
        <input onChange={e => setUserPwd(e.target.value)} value={userPwd} />
        <button onClick={() => onSubmit(userEmail, userPwd)}>어서오세요</button>
      </div>
    </FirebaseContext.Consumer>
  );
};

export default Signup;
