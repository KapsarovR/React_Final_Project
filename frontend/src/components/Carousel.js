import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/GettyImages-899401040.jpg"
      />
      <p className="legend">Coffee</p>
    </div>
    <div>
      <img
        alt=""
        src="https://th.bing.com/th/id/R.0ded2cf76c44a16fa0ab2a34778391b0?rik=SYzfb2Gc9qpZRQ&pid=ImgRaw&r=0"
      />
      <p className="legend">Apples</p>
    </div>
    <div>
      <img
        alt=""
        src="https://th.bing.com/th/id/R.4f089df3777e1cd39bd45d1c75c62bcf?rik=spdC0ic5z4M0Wg&pid=ImgRaw&r=0"
      />
      <p className="legend">Chocolate</p>
    </div>
    <div>
      <img
        alt=""
        src="https://th.bing.com/th/id/R.89eec1ec741873539540b89cc33faa58?rik=%2bCGqP3P8VWF3Kw&riu=http%3a%2f%2fimages.tritondigitalcms.com%2f6616%2fsites%2f265%2f2017%2f06%2f16055555%2fbroccoli.jpg&ehk=LqWpSFM9Hn6FcUgOWTfzn%2bG64vM7UEth4eDmzflomHg%3d&risl=&pid=ImgRaw&r=0"
      />
      <p className="legend">Broccoli</p>
    </div>
  </Carousel>
);
