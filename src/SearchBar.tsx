import React, {Component} from "react";
import SearchDisplay from "./SearchDisplay";

interface SearchBarProps {

}

interface SearchBarState {
    value: string
    imgList: any[]
}

const LASTFM_API : string = `${process.env.REACT_APP_LASTFM_API}`

class SearchBar extends Component<SearchBarProps, SearchBarState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: "",
            imgList: []
        }
    }

    onGoClick = async() => {
        try {
            let response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.search&album=" +
            this.state.value + "&api_key=" + LASTFM_API + "&limit=6&format=json");
            if (!response.ok) {
                alert("Error retrieving data: Bad response from server");
                return;
            }
            let parsed = await response.json();
            let imageList = new Array(6)
            for (let i = 0; i < 6; i++) {
                imageList[i] = parsed.results.albummatches.album[i].image[2]['#text']
            }
            console.log(parsed.results.albummatches.album[0].image[2]['#text'])
            this.setState({
                imgList: imageList
            })
        } catch (e) {
            alert("Error retrieving data: exception thrown");
        }
    }

    onInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value
        });
    }


    render() {
        return (
            <div>
                <div>
                    <input
                        type={"text"}
                        id={"album-search"}
                        placeholder={"Search for albums"}
                        value={this.state.value}
                        onChange={this.onInputText}
                    />
                    <button className={"search-btn"} onClick={this.onGoClick}>Go!</button>
                </div>
                <div>
                    <SearchDisplay imgList={this.state.imgList} />
                </div>
            </div>


        )
    }

}

export default SearchBar
