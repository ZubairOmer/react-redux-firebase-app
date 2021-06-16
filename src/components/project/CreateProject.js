import React, { Component } from 'react'

export default class CreateProject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '', content: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ title: '', content: '' })
    }

    handleChange = e => {
        const { id, value } = e.target;
        this.setState({ [id]: value })
    }

    render() {
        return (
            <div className='container p-14 px-36 flex flex-col'>
                <form onSubmit={this.handleSubmit}>
                    <h5 className='text-2xl font-semibold p-4 text-gray-700'>Create New Project</h5>
                    <div className="p-4 w-3/5">
                        <label className='opacity-75' htmlFor="title">Title :</label>
                        <input className='w-full border-b-2 border-gray-300 py-0.5 outline-none' type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="p-4 w-3/5 flex flex-col">
                        <label className='opacity-75' htmlFor="content">Project Content :</label>
                        <textarea className='text-gray-500 p-3 border-2 mt-6 border-gray-300' id="content" rows='4' defaultValue='write your project content here...' />
                    </div>
                    <div className="w-3/5 p-4 mx-auto">
                        <button className='py-2 px-4 bg-gray-500 text-white focus:outline-none' type='submit'>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
