import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount() {
        console.log("Child Component Did Mount")

        //API Call -> Here
        const data = await fetch("https://api.github.com/users/VooDooIsT");
        const json = await data.json()

        this.setState({
            userInfo: json
        })

    }

    componentDidUpdate() {
            console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render() {

        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="m-4 ">
                <img src={avatar_url}  className="rounded-full shadow-lg w-[100px]"/>
                <h2 className="font-bold py-4 text-lg">Name: {name}</h2>
                <h3 className="text-sm font-semibold">Location: {location}</h3>
                <h4 className="text-sm font-light">Contact: @voodooist</h4>
            </div>
        )
    }
}

export default UserClass;
