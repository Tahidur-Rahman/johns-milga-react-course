import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const Loading = () => (
  <div>
    <h1>Loading...</h1>
  </div>
);
const Error = () => (
  <div>
    <h1>Error...</h1>
  </div>
);
const Users = ({ user }) => (
  <div>
    <h1>{user}...</h1>
  </div>
);

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("name");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.status >= 200 && response.status <= 299
          ?response.json()
          : setLoading(false);
        setError(true);
        throw new Error(response.statusText);
      })
      .then((user) => {
        console.log(user);
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  // if(loading) return <Loading />
  // if(error)return <Error />
  // return <Users user={user} />
  return loading ? <Loading /> : error ? <Error /> : <Users user={user} />;
};

export default MultipleReturns;
