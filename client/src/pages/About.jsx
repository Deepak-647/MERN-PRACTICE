import { useAuth } from "../store/auth";
const About = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome , {user ? user.username : `User`}</h1>
    </div>
  );
};

export default About;
