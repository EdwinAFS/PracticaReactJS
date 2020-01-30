import React, {Component} from 'react';
import Loading from './Loading';
import Item from './Item';
import { getQuotesList } from '../api'

class List extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isLoading: false,
            quotes: null
        }
    }

    async componentDidMount(){
        this.setState({
            isLoading: true
        });

        const quotes = await getQuotesList( 10 );
        
        this.setState({
            isLoading: false,
            quotes: quotes
        })
    }

    render(){
        const { isLoading, quotes } = this.state;
        if( isLoading ){
            return (<Loading message="Cargando ..."/>);
        }

       return (
            <div className='container'>
                <div className='grid-container'>
                    {
                        quotes && quotes.map( (quote, i)=>{
                            return (<Item key={i} data={{id : i, ...quote}}/>)
                        })
                    }
                </div>
            </div>
       );
    }
}

export default List;