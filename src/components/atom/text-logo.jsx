import { Link } from 'react-router-dom';

const TextLogo = () => {
  return (
    <div className="logo-item">
      <Link to="/" className="text-logo">
        Kalel's Portfolio
      </Link>
    </div>
  );
};

export default TextLogo;