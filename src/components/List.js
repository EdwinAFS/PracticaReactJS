import React, {Component} from 'react';

import Loading from './loading/Loading';
import Item from './Item';
import Add from './modal/Add';
import AddButton from './AddButton';

import { getQuotesList } from '../api'

class List extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isLoading: false,
            quotes: null,
            showAdd: false
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
    }

    async componentDidMount(){
        this.setState({
            isLoading: true
        });

        try {
            const quotes = await getQuotesList( 10 );
        
            this.setState({
                isLoading: false,
                quotes: quotes
            });
        } catch (error) {
            this.setState({
                isLoading: false,
                quotes: null
            });
        }
    }

    handleAdd( e ){
        e.preventDefault();
        this.setState({ showAdd: true});        
    }
    
    handleCloseAdd(reload){
        
        return ()=>{
            if (reload) {
                getQuotesList( 10 )
                .then( quotes => {
                    this.setState({
                        isLoading: false,
                        quotes: quotes,
                        showAdd: false
                    })
                })
                .catch( error => this.setState({
                    error,
                    isLoading: false,
                    showAdd: false
                }) );

            } else {
                this.setState({ showAdd: false});
            }
        }
    }

    render(){
        const { isLoading, quotes } = this.state;
        
        if( isLoading ) return (<Loading/>);

       return (
           <React.Fragment>
                <div className='container'>
                    <div className='grid-container'>
                        {
                            quotes && quotes.map( (quote, i)=>{
                                return (<Item key={i} data={{id : i, ...quote}}/>)
                            })
                        }
                    </div>
                </div>

                <Add toggle={ this.handleCloseAdd } showAdd = { this.state.showAdd }/>

                <AddButton onClickAdd={ this.handleAdd } />
                
           </React.Fragment>

       );
    }
}

export default List;