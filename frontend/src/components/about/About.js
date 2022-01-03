import React from "react";

const About = () => {
  return (
    <div id="about">
      <div class="container py-5">
        <div class="row text-center text-white">
          <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Our Team</h1>
          </div>
        </div>
      </div>
      <div id="cards">
        <div class="col-xl-4 col-sm-10 mb-5">
          <div class=" rounded shadow-sm pb-5" id="bg">
            <img
              src="/images/shayan.jpeg"
              alt=""
              class="img-fluid  mb-3  shadow-sm"
              id="image"
            />
            <div id="text">
              <h4 class="mb-0 text-white">Shayn Iqbal Khan Niazi</h4>
              <span class="text-white text-uppercase text-white text-muted">
                3811 FBAS/BSSE/F18
              </span>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-sm-10 mb-5">
          <div class="rounded shadow-sm pb-5" id="bg">
            <img
              src="/images/umair.jpeg"
              alt=""
              width="150"
              class="img-fluid  mb-3  shadow-sm"
              id="image"
            />
            <div id="text">
              <h4 class="mb-0 text-white">Umair Khalid</h4>
              <span class="medium text-uppercase text-muted">
                3833 FBAS/BSSE/F18
              </span>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-sm-10 mb-5">
          <div class=" rounded shadow-sm pb-5" id="bg">
            <img
              src="/images/haider.jpeg"
              alt=""
              width="150"
              height="150"
              class="img-fluid mb-3  shadow-sm"
              id="image"
            />
            <div id="text">
              <h4 class="mb-0 text-white">Haider Naeem</h4>
              <span class="text-white text-uppercase text-muted">
                3767 FBAS/BSSE/F18
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
