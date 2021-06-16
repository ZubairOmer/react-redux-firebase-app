import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='container grid md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <ProjectList />
                </div>
                <div>
                    <Notification />
                </div>
            </div>
        )
    }
}
