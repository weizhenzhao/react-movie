import React from 'react'

import styles from '../../css/movieitem.scss'
import { Rate } from 'antd';

export default class MovieItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return <div className="box">
            <img src={this.props.pic_url} alt={this.props.movieName} className="img" ></img>
            <h4>电影名称:{this.props.movieName}</h4>
            <Rate disabled defaultValue={2} />
        </div>
    }

}