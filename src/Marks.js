import React, { Component } from 'react'
import './App.css';

const axios = require('axios');

const querystring = require('querystring');

export default class Marks extends Component  {

     constructor(props) {
        super(props)
        this.state = {
          name: '',
          roll: '',
          phy: 0,
          chem: 0,
          math: 0,
     
          percentage:0
          
          
        };
      }
    
    handleNameChange = (event) => {
        this.setState({
            name:event.target.value
        })
      }


     handleRollChange = (event) => {
        this.setState({
          roll:event.target.value
        })
      }
    
         handlePhyChange = (event) => {
        this.setState({
            phy:event.target.value ,
        
        })
      }

    
        handleChemChange = (event) => {
        this.setState({
            chem:event.target.value ,
           
        })
      }


          handleMathChange = (event) => {
        this.setState({
            math:event.target.value,
             
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();

        if( parseInt(this.state.phy) >100 || parseInt(this.state.chem) > 100 || parseInt(this.state.math) >100 ) {
            alert("Please Check the marks , each subject marks should be less than 100")
            return
        }


          alert("Submitted");
          axios.post( "http://localhost:8000/entermarks/" , querystring.stringify({ name: `${this.state.name}` , roll : `${this.state.roll}`
            , phy : `${this.state.phy}` , chem : `${this.state.chem}` , math : `${this.state.math}`
             }))
            .then(res => {  
                this.setState({
                    name: '',
                    roll: '',
                    phy: 0,
                    chem: 0,
                    math: 0,
                
                    percentage:0
                    
                })
 
                console.log( "Submitted" )
            })
            .catch(err => {
                console.log(err);
            });

      }


       render() {
    return (
        <div className="text-gray-600 body-font relative">
        
        <form onSubmit={this.handleSubmit}  >


        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Marks</h1>
 
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input value={this.state.name} onChange={this.handleNameChange} required type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label for="roll" className="leading-7 text-sm text-gray-600">Roll Number</label>
                    <input  value={this.state.roll} onChange={this.handleRollChange} required id="roll" name="roll" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label for="math" className="leading-7 text-sm text-gray-600">Marks in Mathematics</label>
                    <input value={this.state.math} onChange={this.handleMathChange} required type="number"   max="100"  id="math" name="math" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <br/>
                <div className="p-2 w-full">
                <div className="relative">
                    <label for="phy" className="leading-7 text-sm text-gray-600">Marks in Physics</label>
                    <input value={this.state.phy} onChange={this.handlePhyChange} required type="number"   max="100" id="phy" name="phy" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <br/>
                <div className="p-2 w-full">
                <div className="relative">
                    <label for="chem" className="leading-7 text-sm text-gray-600">Marks in Chemistry</label>
                    <input value={this.state.chem} onChange={this.handleChemChange} required  type="number"  max="100"  id="chem" name="chem" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>

                <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="font-bold leading-7 text-sm text-gray-600">Total Marks</label>
                    <input value={   parseInt(this.state.phy)  +  parseInt(this.state.chem)  +  parseInt(this.state.math)   } id="totalmarks" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly/>
                </div>
                </div>

                <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="font-bold leading-7 text-sm text-gray-600">Percentage </label>
                    <input value={   (parseInt(this.state.phy)  +  parseInt(this.state.chem)  +  parseInt(this.state.math) ) / 3 } id="percentage" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly/>
                </div>
                </div>


                <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
                </div>
 
            </div>
            </div>
        </div>
        </form>
        </div>
    )
}
}