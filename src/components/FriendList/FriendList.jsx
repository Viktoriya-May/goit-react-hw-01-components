import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { Container } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        < Container >
          {friends.map(({ id, isOnline, avatar, name }) => (
            <FriendListItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
          ))}
        </Container>
      );
    }

  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
 