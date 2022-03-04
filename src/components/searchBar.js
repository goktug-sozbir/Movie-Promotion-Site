import React from 'react'

class searchBar extends React.Component {

    state = {
        searchQuery: ''
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        return (

            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={(e) => this.setState({searchQuery: e.target.value})} 
                        type="text" 
                        className="form-control" 
                        placeholder="Search a movie"
                        value={this.state.searchQuery}
                        />
                    </div>
                </div>
            </form>

        )
    }
}

export default searchBar