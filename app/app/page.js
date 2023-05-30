import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My first portfolio</title>
  <link rel="shortcut icon" href="./images/favicon1.ico" type="image/x-icon" />
  {/* swiper css */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
  {/* box icons */}
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  {/* custom css */}
  <link rel="stylesheet" href="./css/my portfolio.css" />
  {/* header design */}
  <header className="header">
    <a href="#" className="logo">myPortfolio.</a>
    <nav className="navbar">
      <a href="#home" className="active">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="bx bx-moon" id="darkMode-icon" />
    <div className="bx bx-menu" id="menu-icon" />
  </header>
  {/* home section design */}
  <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, I am</h3>
      <h1>Stas Palagniy</h1>
      <p>A universal designer and a skillful layout designer - meet the perfect specialist! 
        Creativity and technical skill in one person. Thanks to them, your projects will be realized with unsurpassed harmony and elegance.</p>
      <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=100010646688094" target="”_blank”"><i className="bx bxl-facebook" /></a>
        <a href="https://twitter.com/" target="”_blank”"><i className="bx bxl-twitter" /></a>
        <a href="https://www.instagram.com/j4ystay_xd/" target="”_blank”"><i className="bx bxl-instagram-alt" /></a>
        <a href="https://www.linkedin.com/in/j4ystay-xd-undefined-194b4a276/" target="”_blank”"><i className="bx bxl-linkedin" /></a>
      </div>
      <a href="https://docs.google.com/document/d/1-dM5ouisTqBNW-19HmOqfE6RqDcrs29_kovuSBzHEO0/edit?usp=sharing" target="”_blank”" className="btn">Download CV</a>
    </div>
    <div className="profession-container">
      <div className="profession-box">
        <div className="profession" style={{"--i":"0"}}>
          <i className="bx bx-laptop" />
          <h3>Front End Developer</h3>
        </div>
        <div className="profession" style={{"--i":"1"}}>
          <i className="bx bxl-figma" />
          <h3>UX/UI Designer</h3>
        </div>
        <div className="profession" style={{"--i":"2"}}>
          <i className="bx bx-camera" />
          <h3>Photographer</h3>
        </div>
        <div className="profession" style={{"--i":"3"}}>
          <i className="bx bx-video-recording" />
          <h3>Videographer</h3>
        </div>
        <div className="circle" />
      </div>
      <div className="overlay" />
    </div>
    <div className="home-img">
      <img src="./images/homee.png" alt />
    </div>
  </section>
  {/* About section */}
  <section className="about" id="about">
    <div className="about-img">
      <img src="./images/aboutme.jpg" alt />
    </div> 
    <div className="about-content">
      <h2 className="heading">About <span>Me</span></h2>
      <h3>Hi, I'm here to help with your next project!</h3>
      <p>My name is Stanislav and I'm here to help you solve your problems. 
        I have 2 years of experience in UX/UI, and I can also build websites, develop in HTML, CSS, JS. 
        Below you can see my work.  My work is different from others because of the unusual approach and all the work is done with the soul, as well as the design of the site meets modern trends and creativity.</p>
      <a href="https://www.canva.com/design/DAE28JbsqjU/FRZK8K0MeKi8TX4ML9S3bQ/view?utm_content=DAE28JbsqjU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="”_blank”" className="btn">Read More</a>
    </div>
  </section>
  {/* Services section */}
  <section className="services" id="services">
    <h2 className="heading">My <span>Services</span></h2>
    <div className="services-container">
      <div className="services-box">
        <i className="bx bx-code-alt" />
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laborum natus necessitatibus soluta quasi itaque commodi ducimus pariatur. 
          Blanditiis delectus quidem quod!</p>
        <a href="https://www.w3schools.com/whatis/" target="”_blank”" className="btn">Read More</a>
      </div>
      <div className="services-box">
        <i className="bx bx-video-plus" />
        <h3>Video recording</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laborum natus necessitatibus soluta quasi itaque commodi ducimus pariatur. 
          Blanditiis delectus quidem quod!</p>
        <a href="https://webcamera.io/" target="”_blank”" className="btn">Read More</a>
      </div>
      <div className="services-box">
        <i className="bx bxs-paint" />
        <h3>Graphic Designing</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laborum natus necessitatibus soluta quasi itaque commodi ducimus pariatur. 
          Blanditiis delectus quidem quod!</p>
        <a href="https://www.figma.com/files/recent?fuid=886570153721124825" target="”_blank”" className="btn">Read More</a>
      </div>
    </div>
  </section>
  {/* portfolio section */} 
  <section className="portfolio" id="portfolio">
    <h2 className="heading">Latest <span>Project</span></h2>
    <div className="portfolio-container">
      <div className="portfolio-box">
        <img src="./images/portfolio11.png" alt />
        <div className="portfolio-layer">
          <h4>Funny 404 error</h4>
          <p>A project that you can use on your websites. Funny, beautiful madness.</p>
          <a href="https://codepen.io/StanislavJ4Y/pen/wvYbKWb" target="”_blank”"><i className="bx bx-link-external" /></a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="./images/portfolio12.png" alt />
        <div className="portfolio-layer">
          <h4>Calculator</h4>
          <p>A simple calculator to help you calculate something also contains two themes of light and theme. Simple, harmonious, functional.</p>
          <a href="https://codepen.io/StanislavJ4Y/pen/XWxwmaR" target="”_blank”"><i className="bx bx-link-external" /></a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="./images/portfolio13.png" alt />
        <div className="portfolio-layer">
          <h4> </h4>
          <p>This game will help you to stagnate your knowledge of colors, as well as their code, especially useful for designers. Simple, interesting, good.</p>
          <a href="https://codepen.io/StanislavJ4Y/pen/oNaRjGd" target="”_blank”"><i className="bx bx-link-external" /></a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="./images/portfolio14.png" alt />
        <div className="portfolio-layer">
          <h4>Ai chess</h4>
          <p>An interesting game of chess with artificial intelligence is the best way to spend time when you have no one to play with..</p>
          <a href="https://codepen.io/StanislavJ4Y/pen/gOBJaXy" target="”_blank”"><i className="bx bx-link-external" /></a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="./images/portfolio15.png" alt />
        <div className="portfolio-layer">
          <h4>2048</h4>
          <p>It's just a fun game that you'll never get bored with.</p>
          <a href="https://codepen.io/StanislavJ4Y/pen/vYVwNdQ" target="”_blank”"><i className="bx bx-link-external" /></a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="./images/portfolio16.png" alt />
        <div className="portfolio-layer">
          <h4> </h4>
          <p> If you don't have a Rubik's Cube, but want to assemble it, you can do it virtually.</p>
          <a href="https://codepen.io/StanislavJ4Y/pen/oNaRjyM" target="”_blank”"><i className="bx bx-link-external" /></a>
        </div>
      </div>
    </div>
  </section>
  {/* testimonial design */}
  <div className="testimonial-container">
    <h2 className="heading">Valuable <span> Testimonial</span></h2>
    <div className="testimonial-wrapper">
      <div className="testimonial-box mySwiper">
        <div className="testimonial-content swiper-wrapper">
          <div className="testimonial-slide swiper-slide">
            <img src="./images/testimonial1.jpg" alt />
            <h3>Markus Taylor</h3>
            <p>I am pleased to provide feedback on this excellent platform that has truly exceeded
              my expectations. From the moment 
              I started using their services, 
              I was impressed with their professionalism, 
              efficiency and commitment to delivering exceptional results.
            </p>
          </div>
          <div className="testimonial-slide swiper-slide">
            <img src="./images/testimoniall2.jpg" alt />
            <h3>Emma Maroon</h3>
            <p>Working with Palagniy has been an absolute pleasure. 
              He is very responsive, attentive to detail and genuinely interested in the success of his clients. 
              His level of professionalism is commendable as he consistently meets deadlines 
              and exceeds expectations with his exceptional work.
            </p>
          </div>
          <div className="testimonial-slide swiper-slide">
            <img src="./images/testimonial3.jpg" alt />
            <h3>Zig Howard</h3>
            <p>In addition, the quality of the content created 
              by the Palagniy team is second to none. 
              Every piece they have written for me has been polished, 
              well thought out and tailored to my specific needs. 
              They have an innate ability to understand the essence of a message 
              and convey it in a concise yet impactful way, leaving a lasting impression on readers.
            </p>
          </div>
        </div>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
      </div>
    </div>
  </div>
  {/* contact section */}
  <section className="contact" id="contact">
    <h2 className="heading">Contact <span>Me!</span> </h2>
    <form action="https://www.canva.com/design/DAFkS8uSvEQ/ps9BAcuOp5EDby1Q3voG6g/view?utm_content=DAFkS8uSvEQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="”_blank”">
      <div className="input-box">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div className="input-box">
        <input type="number" placeholder="Mobile Number" />
        <input type="text" placeholder="Email Subject" />
      </div>
      <textarea name id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
      <input type="submit" defaultValue="Send Message" className="btn" />
    </form>
  </section>
  {/* footer design */}
  <footer className="footer">
    <div className="footer-text">
      <p>Copyright © 2023 by Palagniy Stas | Student of State University of the Telecommunications. </p>
    </div>
    <div className="footer-iconTop">
      <a href="#home"><i className="bx bx-up-arrow-alt" /></a>
    </div>
  </footer>
  {/* scroll reveal */}
  {/* swiper js */}
  {/* custom js  */}
</div>
)}