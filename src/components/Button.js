import React from 'react';
import { Link} from "react-scroll";


export default function Button({text, className, to}){


  return(
    <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={900}
        className={className}
    >
      <p>{text}</p>
    </Link>
  );

}