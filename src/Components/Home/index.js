import React, { Component } from "react";
import Header from "./Header"
import Videos from "./Videos"

class Home extends Component {

    state={
        hideHeader:false
    }
    render(){
        return this.props.media.length > 0 && this.props.posts.length > 0 ? (
            <div className={this.state.hideHeader === false &&"container" }>
              {this.state.hideHeader === false && <Header />}
      
              <Videos
                media={this.props.media}
                title={this.props.posts}
                hideHeader={() => this.setState({ hideHeader: !this.state.hideHeader })}
              />
            </div>
          ) : (
            <div className={this.state.hideHeader === false &&"container"}>
              {this.state.hideHeader === false && <Header />}
              <Videos
                media={this.props.dummyDataMedia}
                title={this.props.dummyDataPosts}
                hideHeader={() => this.setState({ hideHeader: !this.state.hideHeader })}
              />
            </div>
          );

    }
    
 
}

export default Home