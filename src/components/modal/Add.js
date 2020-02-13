import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Add extends Component {
  	constructor(props){
		super(props);
		
		this.state = {
			title: '',
			url: '',
			description: '',
			showSending: false,
			modal: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  	handleChange( input ){
		return ( e ) => {		
			this.setState({ [input]: e.target.value });
		}
	}

	validation(form){
        return (form.title.length > 0 &&  form.url.length > 0 && form.description.length > 2);
    }

	handleSubmit( e ){
		e.preventDefault();

		const { toggle } = this.props;

		if( this.validation(this.state) ){
			this.setState({ showSending: true });			
            toggle( true );
        }else{
            this.setState({ hasError:true });
		}
		
	}

	render() {
		const { toggle, showAdd } = this.props;
		const { title, url, description, hasError, showSending } = this.state;
		const close = <span className="close" onClick={toggle(false)}> &times; </span>;


		return (
			<div>				
				<Modal isOpen={showAdd} toggle={toggle(false)} >
					<ModalHeader toggle={toggle(false)} close={close}>Crear nuevo Vídeo</ModalHeader>

					<ModalBody>
						{ showSending && (<span className="success"> Enviando .... </span> )}
						{ hasError && (<div className="error"> Algunos campos están vacíos o contienen valores incorrectos. </div>) }
						
						<form>
							<label>Título</label>
							<input type="text" value={title} onChange={this.handleChange("title")} minLength="3" maxLength="200" required/>
							
							<label>Url</label>
							<input type="text" value={url} onChange={this.handleChange("url")} minLength="3" maxLength="200" required/>
							
							<label>Descripción</label>
							<textarea value={description} onChange={this.handleChange("description")} required />
							
							<input type="submit" onClick={this.handleSubmit} value="Submit" disabled={showSending}/>
						</form>
					</ModalBody>

					<ModalFooter>
						<Button color="primary" onClick={this.handleSubmit}>Do Something</Button>{' '}
						<Button color="secondary" onClick={toggle(false)}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

Add.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default Add;
