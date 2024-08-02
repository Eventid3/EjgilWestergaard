
function OmSubNav({ onNavClick }) {
    return (
      <div className="scrollmenu">
        <a onClick={() => onNavClick('heine')}>Heine Sand</a>
        <a onClick={() => onNavClick('lars')}>Lars Ebbensgaard</a>
        <a onClick={() => onNavClick('elof')}>Elof Westergaard</a>
        <a onClick={() => onNavClick('tak')}>Tak til</a>
      </div>
    );
  }
  
  export default OmSubNav;