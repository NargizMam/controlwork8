interface Quote {
    id: string;
    category: string;
    author: string;
    text: string;
}
interface QuoteApi {
    category: string;
    author: string;
    text: string;
}

interface QuotesList {
    [id: string]: Quote;
}
