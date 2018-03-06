import React, {Component} from 'react';
import '../fonts/iconfonts/iconfont.css'
import './common.scss';
import './Category_one.scss';
import {Link} from 'react-router-dom'
import * as apiUtils from '../utils/api_util'

class Category_one extends Component {

    componentDidMount() {
        this.category = this.props.match.params.category
        apiUtils.getAllNotesByCategory(this.category, data => {
            console.log(data)
        })
    }

    render() {
        const category = this.category

        return (
            <div className='category-one'>
                <Link to='/'>Home</Link>
                <h1>{category}</h1>
                <ul className="list-common">
                    <li className='list-header'>
                        <div className=''>序号</div>
                        <div className=''>标题</div>
                        <div className=''>作者</div>
                        <div className=''>评论数量</div>
                        <div className=''>当前得分</div>
                        <div className=''>操作</div>
                    </li>
                    <li className='list-tr'>
                        <div className=''>1</div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            <span className="iconfont icon-good"> </span>
                            <span className="iconfont icon-edit"> </span>
                            <span className="iconfont icon-delete"> </span>
                        </div>
                    </li>
                    <li className='list-tr'>
                        <div className=''>2</div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            <span className="iconfont icon-good"> </span>
                            <span className="iconfont icon-edit"> </span>
                            <span className="iconfont icon-delete"> </span>
                        </div>
                    </li>
                    <li className='list-tr'>
                        <div className=''>3</div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            hahas
                        </div>
                        <div className=''>
                            <span className="iconfont icon-good"> </span>
                            <span className="iconfont icon-edit"> </span>
                            <span className="iconfont icon-delete"> </span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Category_one

