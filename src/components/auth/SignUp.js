import React, { Component } from 'react'

export default class SignUp extends Component {
   constructor(props) {
      super(props)

      this.state = {
         email: '', password: '', firstName: '', lastName: ''
      }
   }

   handleSubmit = e => {
      e.preventDefault();
      this.setState({ email: '', password: '', firstName: '', lastName: '' })
   }

   handleChange = e => {
      const { id, value } = e.target;
      this.setState({ [id]: value })
   }

   render() {
      return (
         <div className='container p-14 px-36 flex flex-col'>
            <form onSubmit={this.handleSubmit}>
               <h5 className='text-2xl font-semibold p-4 text-gray-700'>Sign Up</h5>
               <div className="p-4 w-3/5">
                  <label className='opacity-75' htmlFor="email">Email :</label>
                  <input className='w-full border-b-2 border-gray-300 py-0.5 outline-none' type="email" id="email" onChange={this.handleChange} />
               </div>
               <div className="p-4 w-3/5">
                  <label className='opacity-75' htmlFor="password">Password :</label>
                  <input className='w-full border-b-2 border-gray-300 p-0.5 outline-none' type="password" id="password" onChange={this.handleChange} />
               </div>
               <div className="p-4 w-3/5">
                  <label className='opacity-75' htmlFor="firstName">First Name :</label>
                  <input className='w-full border-b-2 border-gray-300 py-0.5 outline-none' type="text" id="firstName" onChange={this.handleChange} />
               </div>
               <div className="p-4 w-3/5">
                  <label className='opacity-75' htmlFor="lastName">Last Name :</label>
                  <input className='w-full border-b-2 border-gray-300 py-0.5 outline-none' type="text" id="lastName" onChange={this.handleChange} />
               </div>

               <div className="w-3/5 p-4 mx-auto">
                  <button className='py-2 px-4 bg-gray-500 text-white focus:outline-none' type='submit'>SignUp</button>
               </div>
            </form>
         </div>
      )
   }
}
