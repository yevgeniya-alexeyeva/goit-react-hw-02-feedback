import PropTypes from "prop-types";

const Section = (props) => {
  const { title, children } = props;
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
