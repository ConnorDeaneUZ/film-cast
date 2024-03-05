type TCard = {
    Title: string
    Year: string,
    Genre: string,
    Rated: string
    Runtime: string,
    imdbRating: string
}


export default (card: TCard) => {
    let cardContents = {
        title: card.Title,
        year: card.Year,
        genre: card.Genre,
        rated: card.Rated,
        runtime: card.Runtime,
        rating: card.imdbRating
    }

    return cardContents
}
