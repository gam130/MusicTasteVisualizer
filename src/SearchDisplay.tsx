import React, {Component} from "react";

interface SearchDisplayProps {
    imgList: any[]
}

interface SearchDisplayState {

}

class SearchDisplay extends Component<SearchDisplayProps, SearchDisplayState> {

    constructor(props: any) {
        super(props);
    }


    render() {
        return(
            <div>
                <img src={this.props.imgList[0]} alt={"result 1"} />
                <img src={this.props.imgList[1]} alt={"result 2"} />
                <img src={this.props.imgList[2]} alt={"result 3"} />
                <img src={this.props.imgList[3]} alt={"result 4"} />
                <img src={this.props.imgList[4]} alt={"result 5"} />
                <img src={this.props.imgList[5]} alt={"result 6"} />
            </div>
        )
    }
}

export default SearchDisplay
