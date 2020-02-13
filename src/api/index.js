import data  from "./data.json";

export const getQuotesList = async ( count ) => {
    try {
        /* const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`);
        const quotes = await response.json(); */
        return data;

    } catch (error) {
        throw error;
    }
}

export const quoteDetail = async ( id ) => {
    try {
        
        const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=${id}`, {
            mode: 'no-cors'
        });
        const quote = await response.json();
        return quote;

    } catch (error) {
        throw error;
    }
}

export const addQuote = async ( id ) => {
    try {
        
        const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=${id}`, {
            mode: 'no-cors'
        });
        const quote = await response.json();
        return quote;

    } catch (error) {
        throw error;
    }
}

