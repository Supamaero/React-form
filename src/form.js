import React from 'react';


class Form extends React.Component {
    userData;
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            date:"",
            email:"",
            customer:"",
            number:""
             
        }  
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    

    submitHandleEvent(event){
        alert(`${this.state.name} ${this.state.number} ${this.state.customer} ${this.state.date} ${this.state.email}`);
        event.preventDefault();
    }


    //React life cyle
componentDidMount(){
    this.userData=JSON.parse(localStorage.getItem("user"));
    
    if (localStorage.getItem("user")){
        this.setState({
            name:this.userData.name,
            date:this.userData.date,
            email:this.userData.email,
            customer:this.userData.customer,
            number:this.userData.number
        })
    }
}

componentDidUpdate(nextProps, nextState){

}


    render() {
        
        return (
            <div>
            <form className="top" onSubmit={this.submitHandleEvent}>
            
            <div className="form">  

            <div className="form_label">
                <label > Name </label>
                 <input name="name" type ="text" placeholder="Name" value = {this.state.name}
                 onChange = {this.handleChange}
                 /> 
            </div>

            <div className="form_label">
                <label> Date of Birth </label> 
                <input name="date" type ="date" placeholder="Date" value = {this.state.date}
                onChange ={this.handleChange}
                 />

            </div>

            <div className="form_label">
                <label> Mobile </label>
                <input  name="email" type ="email" placeholder="Email address" value = {this.state.email}
                onChange ={this.handleChange} />

            </div>

            <div className="form_label">
                <label> Customer ID </label>
                <input name="customer" type ="text" placeholder="Customer ID" value = {this.state.customer}
                onChange ={this.handleChange} /> 
            </div>

            <div className="form_label">
                <label> Phone number </label> 
                <input name="number" type ="number" placeholder="Phone number" value = {this.state.number}
                onChange ={this.handleChange} />
            </div>
            
            </div>

            <div className = "bottom"> 
                  <button className="button_right" onClick={this.submit}>Submit </button> 
             </div>
        </form>
                
            </div>
        )
    }
}



export default Form;