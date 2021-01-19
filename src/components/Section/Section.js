import PropTypes from "prop-types";

const Section = ({children, title})=>{
    return(
        <div>
          <h1>{title}</h1>
          {children}
        </div>
    )
}
Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  
   };

export default Section;