import React, {useState} from 'react';

const ResourceBook = () => {

      // State to control the sidebar
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const w3_open = () => {
    setSidebarVisible(true);
  };

  const w3_close = () => {
    setSidebarVisible(false);
  };
    return (
        <div>
            <style>
                {`
.w3-sidebar {
  z-index: 3;
  width: 250px;
  top: 43px;
  bottom: 0;
  height: inherit;
}
  `}
</style>

<div>

{/*Navbar*/}
<div className="w3-top">
  <div className="w3-bar w3-theme w3-top w3-left-align w3-large">
    <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" 
    onClick={w3_open}>
        <i className="fa fa-bars"></i></button>
    <a href="#first" className="w3-bar-item w3-button w3-theme-l1">Logo</a>
    <a href="#second" className="w3-bar-item w3-button w3-hide-small w3-hover-white">1. About</a>
    <a href="#last" className="w3-bar-item w3-button w3-hide-small w3-hover-white">2. Values</a>
    <a href="#first" className="w3-bar-item w3-button w3-hide-small w3-hover-white">3. News</a>
    <a href="#second" className="w3-bar-item w3-button w3-hide-small w3-hover-white">4. Contact</a>
    <a href="#last" className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white">5. Clients</a>
    <a href="#first" className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white">6. Partners</a>
  </div>
</div>


<nav 
  className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" 
  id="mySidebar"
  style={{ display: sidebarVisible ? 'block' : 'none' }}  // This controls visibility based on state
>
  {/* Close button for small screens */}
  <button 
    onClick={w3_close} 
    className="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" 
    title="Close Menu"
  >
    <i className="fa fa-remove"></i>
  </button>

  {/* Sidebar header */}
  <h4 className="w3-bar-item"><b>Menu</b></h4>

  {/* Sidebar links */}
  <a href="#first" className="w3-bar-item w3-button w3-hover-black">First</a>
  <a href="#second" className="w3-bar-item w3-button w3-hover-black">Second</a>
  <a href="#last" className="w3-bar-item w3-button w3-hover-black">Last</a>
</nav>


{/*Overlay effect when opening sidebar on small screens*/}
<div className="w3-overlay w3-hide-large" onClick={w3_close} style={{cursor:"pointer"}} 
title="close side menu" 
id="myOverlay"></div>


{/*--------------------------------------------------------*/}
{/*Main content: shift it to the right by 250 pixels when the sidebar is visible*/}

<div className="w3-main" style={{marginLeft:"250px"}}>
  <div className="w3-row w3-padding-64">
    <div className="w3-twothird w3-container" id='first'>
      <h1 className="w3-text-teal">Heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="w3-third w3-container">
      <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
      <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
    </div>
  </div>

  <div className="w3-row">
    <div className="w3-twothird w3-container" id='second'>
      <h1 className="w3-text-teal">Heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="w3-third w3-container">
      <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
      <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
    </div>
  </div>

  <div className="w3-row w3-padding-64">
    <div className="w3-twothird w3-container" id='last'>
      <h1 className="w3-text-teal">Heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="w3-third w3-container">
      <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
      <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
    </div>
  </div>

  {/*Pagination*/}
  <div className="w3-center w3-padding-32">
    <div className="w3-bar">
      <a className="w3-button w3-black" href="#section">1</a>
      <a className="w3-button w3-hover-black" href="#section">2</a>
      <a className="w3-button w3-hover-black" href="#section">3</a>
      <a className="w3-button w3-hover-black" href="#section">4</a>
      <a className="w3-button w3-hover-black" href="#section">5</a>
      <a className="w3-button w3-hover-black" href="#section">»</a>
    </div>
  </div>

  <footer id="myFooter">
    <div className="w3-container w3-theme-l2 w3-padding-32">
      <h4>Footer</h4>
    </div>

    <div className="w3-container w3-theme-l1">
      <p>Powered by 
        <a href="https://www.w3schools.com/w3css/default.asp">
        w3.css</a>
        </p>
    </div>
  </footer>

{/*END MAIN*/}
</div>
</div>
</div>
    );
};

export default ResourceBook;