import reactImg from '../assets/react-core-concepts.png';
import './Header.css';

export const reactDescriptions = ['Fundamental','Cruicial','Core']
export function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
export const Header = () => {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
};