
export const getQuotesList = async ( count ) => {
    try {
        
        const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`);
        const quotes = await response.json();
        return quotes;

    } catch (error) {
        throw error;
    }
}

export const quoteDetail = async ( id ) => {
    try {
        
        const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=${id}`);
        const quote = await response.json();
        return quote;

    } catch (error) {
        throw error;
    }
}

