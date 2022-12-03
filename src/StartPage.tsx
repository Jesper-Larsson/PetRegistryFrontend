import Strings from "./Strings";
const StartPage = () => {
  return (
    <div>
      <h1>{Strings.welcomeHeading}</h1>
      <p>{Strings.welcomeText}</p>
    </div>
  );
};

export default StartPage;
