import {Component} from 'react';
import PropTypes from 'prop-types';

class BaseRenderer extends Component {
  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  getVideoUrl() {
    if(!this.state.mediaItem) return "";
    const params = [];
    if(this.state.audioChannel!==undefined) {
      params.push("audioChannel=" + this.state.audioChannel);
    }
    if(this.state.videoChannel!==undefined) {
      params.push("videoChannel=" + this.state.videoChannel);
    }
    return "/ply/"+this.state.mediaItem.id+"/"+this.state.seek+"?"+params.join("&");
  }
}


BaseRenderer.propTypes = {
  mediaItem: PropTypes.object,
  onProgress: PropTypes.func,
  seek: PropTypes.number,
  audioChannel:PropTypes.number,
  videoChannel:PropTypes.number,
  subtitle:PropTypes.string,
  volume:PropTypes.number,
  paused:PropTypes.bool,
  onVolumeChange:PropTypes.func
};

BaseRenderer.defaultProps = {
  seek:0,
  volume:1,
  paused:false
};

export default BaseRenderer;
