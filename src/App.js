import './App.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (      
    <div classname="Portfolio" class="overflow-hidden font-monospace position-relative" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
      
    <div id="line"></div>
    <div id="line2"></div>
      
      <div id="top_page" class="vh-100">
        <nav class="navbar navbar-expand-md fixed-top">
          <div class="navbar-header ps-5">
            <a id="nav_name" class="navbar-brand" href="#">Anton Kristiansson</a>
            <a id="nav_name_mobile" class="navbar-brand" href="#">Anton</a>
          </div>
          <button class="navbar-toggler navbar-dark me-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar"> 
            <ul class="nav">
              <li class="nav-item px-4">
                <a class="nav-link active px-0" href="#About">&lt;About /&gt;</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link px-0" href="#Projects">&lt;Projects /&gt;</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link px-0" href="#Contact">&lt;Contact /&gt;</a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="Home" class="vh-100 container-fluid d-flex align-items-center justify-content-center">
          <div>
            <div id="hello_name_container">              
              <span id="hello_text">Hello, my name is </span>
              <span id="my_name"></span>
              <div id="my_titles" class="text-center">Web Developer & UX-Designer</div>            
            </div>
            <div class="mt-5 text-center">
              <a id="CV" class="btn me-5" href='CV_2023.pdf' download>Download CV</a>
              <a class="me-2" href="https://www.linkedin.com/in/antonuxd/" target="_blank">
                  <img id="linkedin" src='linkedin_white.png'></img>
              </a>
              <a href="https://github.com/AntonKristiansson" target="_blank">
                <img id="github" src='github_white.png'></img>
              </a>
            </div>            
            <a id="down_container" href="#About" class="text-decoration-none"><div class="mb-3" id="go_down"></div>Scroll</a>
          </div>
        </div>
      </div>
      <div id="About" class="container-fluid text-center">
        <div class="container py-5">
          <div class="container pb-4">
            <h2 class="pb-3 fs-1">About</h2>        
            <p class="fs-5">I'm a detail-oriented problem solver with a strong drive, which sometimes comes at a cost of late nights and high electricity bills, but all worth it in the end when you finally find that perfect solution. I also like being creative and productive, both during work but also in my free time where i enjoy programming, working out, crafting and learning new skills.</p>
          </div>
          <h3 class="pt-5 pb-4 fs-2">Tech</h3>
          <div class="pb-2 container d-flex flex-wrap justify-content-around">
            <div class="skills_container">
              <img src='html.png' class="skills_icon p-2"></img>
              <p>HTML</p>
            </div>
            <div class="skills_container">
              <img src='css.png' class="skills_icon p-2"></img>
              <p>CSS</p>
            </div>
            <div class="skills_container">
              <img src='javascript.png' class="skills_icon p-2"></img>  
              <p>Javascript</p>  
            </div>   
            <div class="skills_container">
              <img src='typescript.png' class="skills_icon p-2"></img>
              <p>Typescript</p>
            </div>
            <div class="skills_container">           
              <img src='react.png' class="skills_icon p-2"></img>
              <p>React</p>
            </div>
            <div class="skills_container">          
              <img src='bootstrap.png' class="skills_icon p-2"></img>
              <p>Bootstrap</p>
            </div>
          </div>

          <h3 class="pt-5 pb-4 fs-2">Tools</h3>
          <div class="container d-flex flex-wrap justify-content-around">
            <div class="skills_container">
              <img src='github11.png' class="skills_icon p-2"></img>
              <p>Github</p>
            </div>
            <div class="skills_container">
              <img src='vscode.png' class="skills_icon p-2"></img>
              <p>VS Code</p>
            </div>
            <div class="skills_container">
              <img src='npm.png' class="skills_icon p-2"></img>  
              <p>NPM</p>  
            </div>
            <div class="skills_container">
              <img src='jira.png' class="skills_icon p-2"></img>  
              <p>Jira</p>  
            </div>   
            <div class="skills_container">
              <img src='confluence.png' class="skills_icon p-2"></img>
              <p>Confluence</p>
            </div>
            <div class="skills_container">           
              <img src='figma.png' class="skills_icon p-2"></img>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>      

      <div id="Projects" class="container-fluid">
        <div class="py-5 px-0 container">
          <h2 id="projects_title" class="text-center pb-5 fs-1">Projects</h2>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div id="card" class="card h-100 text-center rounded-bottom-5">
                <div id="card_img_container" class="position-relative">
                  <img id="card_img" src="quickshop_prnt.png" class="card-img-top" alt="..."></img>                  
                  <div class="text-start tech_used">
                    <span id="html" class="badge rounded-pill me-2">HTML</span>
                    <span id="css" class="badge rounded-pill me-2">CSS</span>
                    <span id="javascript" class="badge rounded-pill me-2">Javascript</span>
                    <span id="react" class="badge rounded-pill me-2">React</span>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Quickshop</h5>
                  <p class="card-text">Icon library website for the company Quickshop, where users can download the approved SVG icons. This project also includes a Filter and Search function and page routing using React Router.</p>
                </div>                
                <div id="card_footer">
                  <a id="live_site" class="btn me-3" href="https://antonkristiansson.github.io/Quickshop/" target="_blank">Live Site</a>
                  <a id="code" class="btn" href="https://github.com/AntonKristiansson/Quickshop" target="_blank">&lt;Code /&gt;</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div id="card" class="card h-100 text-center rounded-bottom-5">
                <div id="card_img_container" class="position-relative">
                  <img id="card_img" src="notescalc_prnt3.png" class="card-img-top" alt="..."></img>
                  <div class="text-start tech_used">
                    <span id="html" class="badge rounded-pill me-2">HTML</span>
                    <span id="css" class="badge rounded-pill me-2">CSS</span>
                    <span id="typescript" class="badge rounded-pill me-2">Typescript</span>
                    <span id="react" class="badge rounded-pill me-2">React</span>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">NotesCalc</h5>
                  <p class="card-text">Productivity website with a fully functional calculator and notes taking. Notes can be deleted and edited after creation and also offer color-coding. All notes are saved to Localstorage to have them saved.</p>                  
                </div>                
                <div id="card_footer">
                  <a id="live_site" class="btn me-3" href="https://antonkristiansson.github.io/NotesCalc/" target="_blank">Live Site</a>
                  <a id="code" class="btn" href="https://github.com/AntonKristiansson/NotesCalc" target="_blank">&lt;Code /&gt;</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div id="card" class="card h-100 text-center rounded-bottom-5">
                <div id="card_img_container" class="position-relative">
                  <img id="card_img" src="mbartworks_prnt.png" class="card-img-top" alt="..."></img>
                  <div class="text-start tech_used">
                    <span id="html" class="badge rounded-pill me-2">HTML</span>
                    <span id="css" class="badge rounded-pill me-2">CSS</span>
                    <span id="javascript" class="badge rounded-pill me-2">Javascript</span>
                    <span id="react" class="badge rounded-pill me-2">React</span>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">MB Artworks</h5>
                  <p class="card-text">Portfolio website for the artist Maya Byström. A free-form image layout of the designers work. Website includes a modal pop-up when clicking an image to enlarge it and click-outside to close it. Contact section uses the EmailJS API to send emails.</p>                  
                </div>                
                <div id="card_footer">
                  <a id="live_site" class="btn me-3" href="https://mbartworks.netlify.app/" target="_blank">Live Site</a>
                  <a id="code" class="btn" href="https://github.com/AntonKristiansson/artbybystrom" target="_blank">&lt;Code /&gt;</a>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>

      <div id="Contact" class="container-fluid pb-5">
        <div class="container">
          <h2 class="py-5 text-center fs-1">Contact me</h2> 

          {/*
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send"a />
          </form>
          */}

          <form ref={form} onSubmit={sendEmail}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control input-focus-box-shadow" id="exampleFormControlTextarea1" rows="3" placeholder="Write me a message..."></textarea>
            </div>
            <button id="send_email" type="submit" class="btn" value="Send">Send Email</button>
          </form>


      </div>
    </div>
    
    </div>
  );
}

export default App;
