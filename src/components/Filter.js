import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter" >
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort" value={this.props.sort} onChange={this.props.sortProducts}>
                   Order {" "}
                     <select>
                         <option value="lowest">Lowest</option>
                         <option value="highest">Highest</option>
                     </select>
                </div>
                <div className="filter-size" value={this.props.size} onChange={this.props.filterProducts}>
                    Filter {" "}
                    <select>
                        <option value="">All</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>

                </div>
            </div>
        )
    }
}
