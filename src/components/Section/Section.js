import PropTypes from "prop-types";
import styles from './Section.module.css';


const Section = ({children, title})=>{
    return(
        <div className={styles.section}>
          <h1 className={styles.title}>{title}</h1>
          {children}
        </div>
    )
}
Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  
   };

export default Section;