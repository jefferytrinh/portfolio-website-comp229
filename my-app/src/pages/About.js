function About() {
  return (
    <>
    <h2>ABOUT ME</h2>
    
    <div className="card">
      <img src="otherstuff/StudentIDNoBarCode.jpg" width="60%" height="auto" className="center" alt="Jeffery Trinh card"/>
    </div>

    <div className="card">
      <h3>Quick Description</h3>
      <p>Hello, my name is Jeffery Trinh. I am from Toronto, Canada.</p>
      <p>I am interested in web development and design.</p>
    </div>

    <div className="card">
      <h3>Resume</h3>
      <p><a href="otherstuff/jefferytrinhresume.pdf" target="_blank">Download PDF</a></p>
    </div>
    </>
  );
}

export default About;