import Strings from "./Strings";
const StartPage = () => {
  return (
    <div>
      <h2>{Strings.welcomeHeading}</h2>
      <p>{Strings.welcomeText}</p>
    </div>
  );
};

export default StartPage;
