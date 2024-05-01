import React from 'react'
import { Link } from "react-router-dom";
import jyothsna_s_CV from '../assets/jyothsna_s_CV.pdf'

const CTA = () => {
  const onButtonClick = () => {
    let alink = document.createElement("a");
    alink.href = jyothsna_s_CV;
    alink.download = "jyothsna_s_CV.pdf";
    alink.click();
  };

  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden' />
        Let's build something together! </p>
        <Link className="btn" onClick={onButtonClick}>
            Download CV
        </Link>
        <Link to="/contact" className="btn">
            Contact
        </Link>

    </section>
  )
}

export default CTA