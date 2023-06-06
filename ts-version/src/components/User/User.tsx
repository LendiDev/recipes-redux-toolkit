import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const User = () => {
  const { isLoading, error, user } = useTypedSelector((state) => state.users);
  const { getUserById } = useActions();

  return (
    <div>
      <button
        onClick={() => {
          getUserById(1);
        }}
      >
        Get user
      </button>
      {isLoading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : user?.name ? (
        <h1>User: {user.name}</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default User;
