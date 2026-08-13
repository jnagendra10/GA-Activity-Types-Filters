import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h6>{title}</h6>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
