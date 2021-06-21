import React, { createContext, Component } from 'react'
import axios from 'axios'

export const UserContext = createContext();

class UserContextProvider extends Component {

  state = {
    isAuthenticated: false,
    user: {}
  }

  componentDidMount() {
    /*
    1. fetch the user from the backend by calling endpoint eg : /user
    2. set the user in state
    */

    const getData = async () => {
      try {
        const { data } = await axios.get("/user");
        if (data.error) return;
        const { currentUser } = data;
        this.setState({ user: currentUser })
        this.setState({ isAuthenticated: true })
      } catch (error) {
        console.log(error)
      }
    }

    getData();

  }

  render() {
    console.log("fetching user")
    const { children } = this.props;

    return (
      <UserContext.Provider value={{ ...this.state }} >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContextProvider;