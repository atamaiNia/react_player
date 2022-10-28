import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;

    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {url && !isVideoLoaded && <h2>Загружаємо відео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
