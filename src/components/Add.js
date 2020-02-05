import React, { Component } from "react";
import PropTypes from "prop-types";

class Add extends Component {
  	constructor(props){
		super(props);
		
		this.state = {
			title: '',
			url: '',
			description: '',
			showSending: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  	handleChange( input ){
		return ( e ) => {		
			this.setState({
				[input]: e.target.value
			});
		}
	}

	validation(form){
        if(form.title.length > 0 &&  form.url.length > 0 && form.description.length > 2){
            return true;
        } else {
            return false;
        }
    }

	handleSubmit( e ){
		e.preventDefault();
		const {onClose} = this.props;

		if(this.validation(this.state)){
			this.setState({showSending:true});			
            onClose(true)();
        }else{
            this.setState({
                hasError:true
            });
		}
		
	}

  render() {
    const { onClose } = this.props;
    const { title, url, description, hasError, showSending } = this.state;

    return (
    	<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={onClose(false)}> &times; </span>
				<h2> Crear nuevo Vídeo </h2>

				{ showSending && (<span className="success"> Enviando .... </span> )}
				{ hasError && (<div className="error"> Some fields are empty or contain an wrong values. </div>) }
				
				<form>
					<label>Título</label>
					<input type="text" value={title} onChange={this.handleChange("title")} minLength="3" maxLength="200" required/>
					
					<label>Url</label>
					<input type="text" value={url} onChange={this.handleChange("url")} minLength="3" maxLength="200" required/>
					
					<label>Descripción</label>
					<textarea value={description} onChange={this.handleChange("description")} required />
					
					<input type="submit" onClick={this.handleSubmit} value="Submit" disabled={showSending}/>
				</form>
			</div>
      	</div>
    );
  }
}

Add.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Add;
