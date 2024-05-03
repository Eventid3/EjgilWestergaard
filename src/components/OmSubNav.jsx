
function OmSubNav({ onNavClick }) {
    return (
      <div className="scrollmenu">
        <a onClick={() => onNavClick('heine')}>Henie Sand</a>
        <a onClick={() => onNavClick('lars')}>Lars Ebbensgaard</a>
        <a onClick={() => onNavClick('elof')}>Elof Westergaard</a>
      </div>
    );
  }
  
  export default OmSubNav;