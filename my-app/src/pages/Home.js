function Home() {
  return (
    <>
      <h2>HOME</h2>
      
      <div class="card">
      <img src="otherstuff/jefferytrinhlogo.png" width="60%" height="auto" class="center" alt="Jeffery Trinh logo"/>
    </div>

    <div class="card">
      <h3>Welcome</h3>
      <p>Welcome to my portfolio website.</p>
      <p>Click the above menus to navigate.</p>
    </div>

    <div class="card">
      <h3>Mission Statement</h3>
      <p>Creating websites - because my parents want me to do something with my life.</p>
    </div>
    </>
  );
}

export default Home;

// also for some reason when doing stuff like <img src="example.png">, you have to add "/" near the end like <img src="example.png"/> otherwise it will not work.