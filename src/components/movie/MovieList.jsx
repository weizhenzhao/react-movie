import React from 'react'


//导入loading组件
import { Spin, Alert } from 'antd';

//导入fetch-jsonp
import fetchJSONP from 'fetch-jsonp'
import fetchJsonp from 'fetch-jsonp'

import Item from 'antd/lib/list/Item'
import MovieItem from './MovieItem.jsx'


export default class MovieList extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            movies: [], //电影列表
            nowPage: parseInt(props.match.params.page) || 1,//当前展示第几页的数据
            pageSize: 14,
            total: 0, //当前电影分类下，总共有多少条数据
            isloading: true,//数据是否正在加载，如果为true,表示正在加载数据
            cityid: parseInt(props.match.params.cityid) || 3,
            dtype: props.match.params.dtype,
            key: props.match.params.key
        }
    }



    loadMovieListByTypeAndPage = () => {
        //开始获取数据的索引
        // const start = this.state.pageSize * (this.state.nowPage - 1)
        // const url = 'http://v.juhe.cn/movie/movies.today?cityid=' + this.state.cityid + '&dtype=' + this.state.dtype + '&key=' + this.state.key

        // //根据电源类型和电影的页码，获取电影数据

        // //fetch 有跨域限制
        // // fetch('http://v.juhe.cn/movie/movies.today?cityid=3&dtype=json&key=ff55df4f0a2e6df7f2cced306fb4912d')
        // //     .then(
        // //         response => response.json()
        // //     ).then(data => {
        // //         console.log(data)
        // //     })


        // fetchJSONP(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         console.log(data.result.length)
        //         this.setState({
        //             isloading: false,
        //             movies: data.result,
        //             total: data.result.length,
        //             movieType: this.props.match.params.type //保存一下，要获取的电影的类型
        //         })
        //     })
        const data = require('../dataS/hot_movie.json')
        setTimeout(() => {
            this.setState({
                isloading: false,
                movies: data.result,
                total: data.result.length,
                movieType: this.props.match.params.type
            })
        }, 1000)
    }

    componentWillMount() {
        this.loadMovieListByTypeAndPage()
        // setTimeout(() => {
        //     //假设1秒以后，数据回来了
        //     this.setState({
        //         isloading: false//当数据获取回来之后，把isloading加载中，设置为false
        //     })
        // }, 1000)

        // fetch('http://v.juhe.cn/movie/movies.today')
        //     .then(response => {//当使用fetch API获取数据的时候，第一个.then中，获取不到数据
        //         //第一个.then中拿到的是一个Response对象，我们可以调用response.json()得到一个新的promise
        //         //console.log(response)
        //         return response.json()
        //     })
        //     .then(
        //         data => {
        //             console.log(data);
        //         }
        //     )


    }

    //组件将要接收新属性
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.match)
        //每当地址栏变化的时候，重置state中的参数项，重置完毕之后，我们可以重新发起数据请求了
        this.setState({
            isloading: true,//又要重新加载电影数据了
            nowPage: parseInt(nextProps.match.params.page),//要获取第几页的数据
            movieType: nextProps.match.params.type,//电影类型
            total: 0
        }, function () {
            this.loadMovieListByTypeAndPage()
        })
    }

    render() {
        return <div>
            {this.renderList()}
        </div>

    }

    renderList = () => {
        if (this.state.isloading) {
            //正在加载中
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影列表，精彩内容马上呈现"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        } else {
            //加载完成
            return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.movies.map(item => {
                    return <MovieItem {...item} key={item.movieId}></MovieItem>
                })}

            </div>
        }
    }
}


//在React 中，可以使用fetch API来获取数据
//fetch API是基于Promise封装的
