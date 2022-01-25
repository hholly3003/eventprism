import React from "react";
import HomeBar from "../components/Homebar";
import "../styles/Aboutpage.css";

const Aboutpage = () => {
  return (
    <div className="about-container">
      <HomeBar text="Login" href="/login" />
      <div className="main">
        <h1 className="main-heading">
          We Never Stop Learning from this Journey
        </h1>
        <div className="main-points">
          <div className="main-point-title">
            <h3>Point #1</h3>
          </div>
          <div className="main-point-info">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget egestas purus. Purus sit amet luctus
              venenatis lectus magna fringilla urna. Tellus id interdum velit
              laoreet id. Faucibus turpis in eu mi bibendum neque egestas
              congue. Erat velit scelerisque in dictum non consectetur a. Ornare
              lectus sit amet est placerat in egestas erat. Integer feugiat
              scelerisque varius morbi. Lectus nulla at volutpat diam. Nunc
              pulvinar sapien et ligula ullamcorper. Pellentesque nec nam
              aliquam sem. Dui accumsan sit amet nulla facilisi morbi tempus
              iaculis urna. Ac ut consequat semper viverra nam libero justo
              laoreet sit. Amet nulla facilisi morbi tempus iaculis urna.{" "}
            </p>
          </div>
          <div className="main-point-title">
            <h3>Point #2</h3>
          </div>
          <div className="main-point-info">
            <p>
              {" "}
              Est placerat in egestas erat imperdiet sed euismod nisi porta. Mi
              eget mauris pharetra et ultrices neque ornare aenean euismod.
              Montes nascetur ridiculus mus mauris vitae ultricies leo integer
              malesuada. Sed ullamcorper morbi tincidunt ornare massa eget
              egestas purus. Porta non pulvinar neque laoreet. Vulputate
              dignissim suspendisse in est ante in nibh. Turpis massa tincidunt
              dui ut ornare lectus sit. Vestibulum morbi blandit cursus risus
              at. Varius morbi enim nunc faucibus a pellentesque sit amet.
              Libero volutpat sed cras ornare arcu. Elementum nisi quis eleifend
              quam. Amet mattis vulputate enim nulla aliquet porttitor lacus.
              Quis ipsum suspendisse ultrices gravida dictum fusce.{" "}
            </p>
          </div>
          <div className="main-point-title">
            <h3>Point #3</h3>
          </div>
          <div className="main-point-info">
            <p>
              {" "}
              Sagittis id consectetur purus ut faucibus. Diam maecenas sed enim
              ut sem viverra aliquet eget sit. Diam phasellus vestibulum lorem
              sed. Purus sit amet volutpat consequat mauris nunc. Suscipit
              tellus mauris a diam maecenas. Nunc id cursus metus aliquam
              eleifend mi in nulla posuere. Adipiscing elit ut aliquam purus.
              Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Nec
              nam aliquam sem et tortor consequat. Id velit ut tortor pretium.
              Dignissim enim sit amet venenatis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
