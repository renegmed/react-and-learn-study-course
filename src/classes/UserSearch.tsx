import { Component } from 'react';

interface User {
    name: string; 
    age: number;
}
interface UserSearchProps {  // contains a list of users
    users: User[]
}

interface UserSearchState {
    name: string; 
    user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {  // initial user searched state
        name: '',
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;  // if true, use is found return user else false return undefined
        });

        this.setState({user: foundUser}); 
    };

    render() {
        const { name, user } = this.state;
        return(
            <div>
            User Search
            <input value={this.state.name} 
                onChange={e => this.setState({name: e.target.value })} />
            <button onClick={this.onClick}>Find User</button>
            <div>
                {user && user.name} 
                {user && user.age} 
            </div>
            </div>

        );
    }
}

export default UserSearch;