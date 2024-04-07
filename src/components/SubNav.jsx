

function SubNav({ onNavClick }) {
    return (
      <div className="scrollmenu">
        <a onClick={() => onNavClick('lemvig')}>I Lemvig</a>
        <a onClick={() => onNavClick('ulemvig')}>Udenfor Lemvig</a>
        <a onClick={() => onNavClick('haven')}>I Haven</a>
        <a onClick={() => onNavClick('grunden')}>På Grunden</a>
        <a onClick={() => onNavClick('atalieret')}>I Atalieret</a>
      </div>
    );
  }
  
  export default SubNav;