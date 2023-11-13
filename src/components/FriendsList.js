import { Friend } from "./Friend";

export const FriendsList = ({ initFriends, onSelect, selectedFriend }) => {
  return (
    <ul>
      {initFriends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};
