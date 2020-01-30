import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { quoteDetail } from '../api'
import Loading from './Loading';

class Detail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            quote: null,
            error: null
        }
    }
    async componentDidMount(){
        try {
            const { id } = this.props.match.params;
            this.setState({ isLoading: true });
            
            const quote = await quoteDetail( id );

            this.setState({ quote: quote[1], isLoading: false});

        } catch (error) {
            this.setState({ error: error, isLoading: false});
        }
    }

    render(){
        const {isLoading, quote, error} = this.state;
        
        if(error) return ( <p className='error'>{error.message}</p>);
        if(isLoading) return ( <Loading message={`Cargando Frase ...`}/> );

        return (
            <React.Fragment>
                <div className="grid-item">
                    <h3>Frase: </h3>
                    <p className='preview-quote'>{quote}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter( Detail );