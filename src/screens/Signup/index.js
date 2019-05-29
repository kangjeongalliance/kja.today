import React, { useState } from "react";

const Signup = props => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const onSubmit = (userEmail, userPwd) => {};

  return (
    <div>
      <input onChange={e => setUserEmail(e.target.value)} value={userEmail} />
      <input onChange={e => setUserPwd(e.target.value)} value={userPwd} />
      <button onClick={() => onSubmit(userEmail, userPwd)}>어서오세요</button>
    </div>
  );
};

export default Signup;
