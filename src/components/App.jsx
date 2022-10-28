import { Component } from 'react';
import Player from './Player';
import VideoList from './VideoList';
import videos from '../videos.json';
import { Title } from './App.styled';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;
    const { selectVideo } = this;
    return (
      <div>
        <Title>Selected video: {selectedVideo}</Title>
        <VideoList videos={videos} onSelect={selectVideo} />
        <Player url={selectedVideo} />
      </div>
    );
  }
}
