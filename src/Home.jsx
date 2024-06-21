import bgimage from "/img/Forside/Ejgil Westergaard.jpg"

function Home(){
    return <div className="bg-container">
    <img 
    src={bgimage} 
    alt="Ejgil Vestergaard ved skulptur" 
    className="background-image" 
    />
    <div className="headline">
    <h1>STENENS BEVÆGELSE</h1>  
    <h2>Ejgil Westergaard</h2>
    </div>
    </div>
}

export default Home