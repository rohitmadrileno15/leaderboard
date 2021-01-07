import React, { Component } from 'react'
import SearchAlert from './SearchAlert'

import SearchNav from './SearchNav'

export default class LeaderBoard extends Component {

 constructor() {
        super()
        this.state = {
                total : [],
                searchval : "",
                all_names:[],
                isVisible: false,
                all_results:[]
                 
        }

  
    }
 handleSearchChange = (event) => {
        this.setState({
            searchval:event.target.value
        })
 }

 changeVisibility = ( e1 , e2  ) => {
    this.setState({
       isVisible:e1,
       all_results:e2
    } , () => console.log(this.state.isVisible))
 }

 searchfunc = ( ) => {
     var temp_name = this.state.searchval
     const temp_arr1 =[]
 
     var i ;
     for (i = 0; i < this.state.all_names.length ; i++) {
        
        var temp_var =  this.state.all_names[i][0].toLowerCase().indexOf( temp_name.toLowerCase())
       
       if(temp_var>-1){

           temp_arr1.push(this.state.all_names[i])

       }

      
    }
    console.log(temp_arr1)
    this.changeVisibility(true , temp_arr1)
   
  

    alert(
        "Match Found with the name(s) of " + 
        temp_arr1.map( p => (
            p[0]
    ))
    )

 

 }


 
 componentDidMount() {

     console.log("Component Did Mount")
  
        const response = fetch('http://localhost:8000/marks').then(response => response.json())
            .then(result => {
                
                this.setState({ total : result.data_to_send })
                
                const temp_arr = []

                this.state.total.map( p => ( 
                    temp_arr.push([ p.fields.student_name , p.fields.student_roll_number , p.fields.phy_marks , p.fields.chem_marks , p.fields.math_marks , p.fields.total_marks , p.fields.percentage ])
                    ))
                
                this.setState({ all_names : temp_arr     })

                // this.state.total.map(name => (
                //   console.log(name) 
                // // )) 

                // console.log(this.state.all_names)
       
            });

      


}


    render() {
        return (




            <div className="container mx-auto px-4">
                <br/>
                
                <h1 className="text-xl font-medium">LeaderBoard</h1>

                <br/>

                
                     <br/>
  
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-1 w-1/2">
                            <div class="relative">
                               
                                <input value={this.state.searchval} onChange={this.handleSearchChange} placeholder="Enter Name Here" type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div class="p-2 w-1/2">
                            <div class="absolute">
                                <button onClick={this.searchfunc} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Search
                                </button>

                                    
                            </div>
                            </div>
 
                             
                        </div>
                        </div>
              <br/>

              {this.state.isVisible ?<SearchNav/> :null}
              
              {this.state.isVisible ?
              
              this.state.all_results.map( e => (
                  <SearchAlert namestudent={e[0]} totalmarks={e[5]} percentagemarks={e[6]} />
              )) : null }
                

                 <br/>
                <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Roll Number
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Physics Marks
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Chemistry Marks
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Math Marks
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total Marks
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Percentage
                            </th>

                            </tr>
                        </thead>


                         


                  {this.state.total.map( p => (

                      <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                               
                                <div className="ml-4">
                                    <div className="text-left text-sm font-medium text-gray-900">
                                   {p.fields.student_name}
                                    </div>
                                    
                                </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">

                                <span className="text-left px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {p.fields.student_roll_number}
                                </span>
                                
                               
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap">

                                <div className="text-left text-sm text-gray-900">
                                  {p.fields.phy_marks}</div>

                                
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                               <div className="text-left text-sm text-gray-900">
                                {p.fields.chem_marks}</div>
                            </td>

                            <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                               <div className="text-left text-sm text-gray-900">
                                 {p.fields.math_marks}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="text-indigo-600 text-left text-sm text-gray-900">
                               {p.fields.total_marks} </div>
                            
                            
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="text-indigo-600 text-left text-sm text-gray-900">
                             {p.fields.percentage}</div>
                            </td>

                            </tr>

             
                        </tbody>
                
                
                
                ))}
                            
                        

                        
                        </table>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}
