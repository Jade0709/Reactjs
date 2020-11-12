import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            
                <div className="filter">
                    <div className="filter-result">
                        {this.props.count} Products
                    </div>
                    <div className="filter-sort">
                        Order
                        <select value={this.props.sort} 
                                onChange={this.props.sortProducts}>
                            <option>Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>

                    <div className="filter-size">
                        Filter {" "}    
                        <select value={this.props.size} 
                                onChange={this.props.filterProducs}>
                            <option value="">All</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            
                            
                        </select>
                    </div>
                </div>
            
        )
    }
}
export default Filter
