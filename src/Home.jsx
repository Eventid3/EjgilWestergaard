import bgimage from "/img/Forside/Ejgil Westergaard.jpg"

function Home(){
    return <div className="bg-container">
    <img 
    src={bgimage} 
    alt="Ejgil Vestergaard ved skulptur" 
    className="background-image" 
    /></div>
}

export default Home