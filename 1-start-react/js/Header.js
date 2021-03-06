import React as "react";
import Title from "./Header/Title";
export default class Header extends React.Component{

    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    rander(){
        return (
            <div>
                <Title title={this.props.title} />
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }

}