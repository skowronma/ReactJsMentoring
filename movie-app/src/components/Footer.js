import React from 'react';

export default function Footer(props){
  return (
    <footer className="footer">
      <div className="footerText">{props.displaytext}</div>
    </footer>
  )
}
