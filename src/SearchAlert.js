import React, { Component } from 'react'

export default class SearchAlert extends Component {
    render() {
        return (

            <div>
                <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
                
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                         
                            
                            Name : {this.props.namestudent} &nbsp;, TotalMarks :  {this.props.totalmarks} &nbsp; , Percentage: {this.props.percentagemarks}
                        </th>
                        
                       
                         
                        
                    </tr>
                    </thead>
        
                </table>
                </div>

            </div>
            </section>
            </div>
 
 
 
        )
    }
}
