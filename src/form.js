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
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.customerChangeHandler = this.customerChangeHandler.bind(this);
        this.numberChangeHandler = this.numberChangeHandler.bind(this);
        this.submitHandleEvent = this.submitHandleEvent.bind(this);

    }

    nameChangeHandler(event){
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }
    
    dateChangeHandler(event){
        event.preventDefault();
        this.setState({
            date:event.target.value
        })
    }

    emailChangeHandler(event){
        event.preventDefault();
        this.setState({
            email:event.target.value
        })

    }

    customerChangeHandler(event){
        event.preventDefault();
        this.setState({
            customer:event.target.value
        })
    }

    numberChangeHandler(event){
        event.preventDefault();
        this.setState({
            number:event.target.value
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

        }else{
            this.setState({
                name:"",
                date:"",
                email:"",
                customer:"",
                number:""
            })
    }

}

componentDidUpdate(nextProps, nextState){
    localStorage.setItem("user",JSON.stringify(nextState))
}
    render() {
        return (
            <div>
            <form className="top" onSubmit={this.submitHandleEvent}>
            
            <div className="form">  

            <div className="form_label">
                <label > Name </label>
                 <input type ="text" placeholder="Name" value = {this.state.name}
                 onChange = {this.nameChangeHandler}
                 /> 
            </div>

            <div className="form_label">
                <label> Date of Birth </label> 
                <input type ="date" placeholder="Date" value = {this.state.date}
                onChange ={this.dateChangeHandler}
                 />

            </div>

            <div className="form_label">
                <label> Mobile </label>
                <input type ="email" placeholder="Email address" value = {this.state.email}
                onChange ={this.emailChangeHandler} />

            </div>

            <div className="form_label">
                <label> Customer ID </label>
                <input type ="text" placeholder="Customer ID" value = {this.state.customer}
                onChange ={this.customerChangeHandler} /> 
            </div>

            <div className="form_label">
                <label> Phone number </label> 
                <input type ="number" placeholder="Phone number" value = {this.state.number}
                onChange ={this.numberChangeHandler} />
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