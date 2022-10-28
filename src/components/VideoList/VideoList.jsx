import { List, Item } from './VideoList.styled';

const VideoList = ({ videos, onSelect }) => {
  return (
    <List>
      {videos.map(video => (
        <Item key={video.id} onClick={() => onSelect(video.link)}>
          {video.link}
        </Item>
      ))}
    </List>
  );
};

export default VideoList;
