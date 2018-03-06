import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Category from './Category';
import Category_one from './Category_one'
import Note_detail from './Note_detail'

class Route_distribute extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Category}>
                </Route>
                <Route exact path='/:category' component={Category_one}>
                </Route>
                <Route path='/:category/:post_id' component={Note_detail}>
                </Route>
            </div>
        )
    }
}

export default Route_distribute

