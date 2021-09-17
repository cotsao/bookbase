import { useEffect, useState } from 'react'
const axios = require('axios');
function Nav() {
    const [bookSearch, setbookSearch] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const searchUrl = `http://openlibrary.org/search.json?title=${searchText}`
        const loadSearch = async () => {
            const response = await axios.get(searchUrl)
                .catch(function (error) {
                    console.log(error);
                });
            setbookSearch(response.data.docs)
        }
        if (searchText.length > 0) {
            loadSearch()
        }

    }, [searchText]);
    const onChangeHandler = (text) => {
        setsearchText(text)
        let matches = []
        let matchShort = []
        if (searchText.length > 0) {
            matches = bookSearch.filter(book => {
                const sanitized = book.title.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
                return book.title.toLowerCase().replace(/[^a-zA-Z0-9]/g,'').match(sanitized)
            })
            console.log("matches for " + searchText)
            console.log(matches)
            matchShort = matches.slice(0, 10)
            /* console.log(matchShort) */
            setSuggestions(matches)
        }
       
    }
    const onSuggestHandler = (text) => {
        setsearchText(text)
        setSuggestions([])
    }
    return (
        <header>
            <nav>
                <ul>
                    <li>bookbase</li>
                    <input type="text"
                        onChange={e => onChangeHandler(e.target.value)}
                        value={searchText}
                        onBlur={() => {
                            setTimeout(() => {
                                setSuggestions([])
                            }, 100)
                        }}
                    />
                    {suggestions && suggestions.map((suggestion, i) =>
                        <div key={i}
                            onClick={() => onSuggestHandler(suggestion.title)}
                        >{suggestion.title}</div>)}
                    <li>signup</li>
                    <li>login</li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav