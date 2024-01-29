

function SubNav({ onNavClick }) {
    return (
      <div className="scrollmenu">
        <a onClick={() => onNavClick('lemvig')}>I Lemvig</a>
        <a onClick={() => onNavClick('ulemvig')}>Udenfor Lemvig</a>
        <a onClick={() => onNavClick('grunden')}>På Grunden</a>
        <a onClick={() => onNavClick('vaerkstedet')}>I Værkstedet</a>
      </div>
    );
  }
  
  export default SubNav;