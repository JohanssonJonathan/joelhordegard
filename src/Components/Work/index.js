import React, { Component } from "react";
import Header from "./Header"
import Videos from "./Videos"

class Home extends Component {

    state={
        hideHeader:false,
        iFrameVideo: false,
        index: null
    }

    showVideo = (iFrameVideo,index) => this.setState({ iFrameVideo, index })

    render(){

      const regexpWidth = /width="[0-9]+"/gm;
      const regexpHeight = /height="[0-9]+"/gm;
  
      const width =
        this.state.iFrameVideo && this.state.iFrameVideo.match(regexpWidth);
      const height =
        this.state.iFrameVideo && this.state.iFrameVideo.match(regexpHeight);
      const modifiedIFrameString =
        this.state.iFrameVideo &&
        this.state.iFrameVideo
          .replace(width[0], "")
          .replace(height[0], "")
          .replace("iframe", 'iframe class="big-video"');
  
      console.log('this.state.iframeVideo :', this.state.iframeVideo);
        return this.props.media.length > 0 && this.props.posts.length > 0 ? (
            <div className={this.state.hideHeader === false &&"container" } >
              {this.state.hideHeader === false && <Header />}
      
              <Videos
                media={this.props.media}
                title={this.props.posts}
                iFrameVideo={this.iFrameVideo}
                hideHeader={() => this.setState({ hideHeader: !this.state.hideHeader })}
              />
            </div>
          ) : (
            <div className={this.state.hideHeader === false &&"container"} style={{position:"relative"}}>
              {this.state.hideHeader === false && <Header />}

              <Videos
                media={this.props.dummyDataMedia}
                title={this.props.dummyDataPosts}
                iFrameVideo={this.iFrameVideo}
                hideHeader={() => this.setState({ hideHeader: !this.state.hideHeader })}
              />
            </div>
          );

    }
    
 
}

export default Home