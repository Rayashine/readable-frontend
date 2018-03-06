import React, {Component} from 'react';
import './Category.scss';
import './common.scss';
import {Link} from 'react-router-dom'
import * as apiUtils from '../utils/api_util'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Category extends Component {

    componentDidMount() {
        apiUtils.getAllCategories(data => {
            this.props.setCategories({...data})
        })
        apiUtils.getAllNotes(data => {
            this.props.setNotes({notes: data})
        })
    }

    render() {
        const {categories, notes} = this.props.setterData
        console.log(notes)

        return (
            <div className='notes-list'>
                <ul className="list-common">
                    <li className='list-header'>
                        <div className=''>序号</div>
                        <div className=''>标题</div>
                        <div className=''>作者</div>
                        <div className=''>评论数量</div>
                        <div className=''>当前得分</div>
                        <div className=''>
                            分类
                            <span className="iconfont icon-filter"> </span>
                        </div>
                        <div className=''>操作</div>
                    </li>
                    {
                        notes.map((note, index) => (
                            <li className='list-tr' key={index}>
                                <div className=''>{index + 1}</div>
                                <div className='' title={note.title}>
                                    <Link to={`/` + note.category + `/` + note.id}>{note.title}</Link>
                                </div>
                                <div className=''>
                                    {note.author}
                                </div>
                                <div className=''>
                                    {note.commentCount}
                                </div>
                                <div className=''>
                                    {note.voteScore}
                                </div>
                                <div className=''>
                                    {note.category}
                                </div>
                                <div className=''>
                                    <span className="iconfont icon-good"> </span>
                                    <span className="iconfont icon-edit"> </span>
                                    <span className="iconfont icon-delete"> </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({setterData}) {
    return {
        setterData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCategories: (data) => dispatch(actions.set_categories_action(data)),
        setNotes: (data) => dispatch(actions.set_notes_action(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);
