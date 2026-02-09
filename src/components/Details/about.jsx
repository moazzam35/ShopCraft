import React from 'react';
import './infopage.css';
import { FaHeart ,FaRocket } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { RiShining2Fill } from "react-icons/ri";
function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <h1>About ShopCraft</h1>
          <p>Your trusted destination for quality products since 2020</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="about-container">
          <div className="story-grid">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600" alt="Our Story" />
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, ShopCraft began with a simple mission: to provide high-quality products 
                that enhance everyday life. What started as a small online boutique has grown into a 
                trusted destination for thousands of customers worldwide.
              </p>
              <p>
                We believe in the power of great design, quality craftsmanship, and exceptional customer 
                service. Every product we offer is carefully selected to meet our high standards of 
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="about-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><RiShining2Fill style={{color : 'gold'}} /></div>
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every product is carefully vetted to ensure it meets our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaEarthAfrica style={{color : 'blue'}} /></div>
              <h3>Sustainability</h3>
              <p>We are committed to sustainable practices and partnering with eco-conscious brands.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaHeart style={{color : 'red'}} /></div>
              <h3>Customer Care</h3>
              <p>Your satisfaction is our priority. We are here to support you every step of the way.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaRocket style={{color : 'orange'}} /></div>
              <h3>Innovation</h3>
              <p>We constantly evolve to bring you the latest trends and innovations in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="about-container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAaVBMVEX///8WFhbn5+cAAAAMDAzf39/8/PwtLS35+fkTExPw8PD09PTJycnt7e3j4+MICAhTU1PAwMA4ODheXl5LS0ukpKTV1dVpaWmamppCQkK6urp7e3uFhYWvr68oKCgzMzMfHx9xcXGPj48LL//ZAAAEL0lEQVR4nO2aiZKqMBBFgSAmIKCyCOpT9P8/8gHivpDp3DBYkzNTs9VU5VRX00m6sRzre3AsY6sLY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6uPv23r3f/mvfk3IvjYBrMiKZfLMjkufLAs2tZZHFiN67px832+xsYCasuzlDFhXxCMpUUAzAekbZ6w2L5HxCzNYQvAbOvwZYzZL2Cs4JAlLGBsg+I2B+7iyzYoXZjtW9kmvFvPguQuyjb7IFvrHiGLoGzzj7J1MqwRq4Bsg/nLB+xKXAWAZUC2n5L2nLqAZTC2k/Kxzj7nwg5RdiG2/3ryoA0u4kFD2HqpjO0cEBaEbSQhW5eF2ThsZRKhDm42DtuDnO1BfTtD2O57K0JDPFU/LSBsp66MrWCjsOW7vq2hs1XfzgC2wVfZflcmWHspW7cah20iV8Hm46hghZwt4KCAsM3lbBfjsA1sicR195Nx2EqlAuQ4DrHN+yuuqACJgLH1Nr3BZXP1ZVD3smjZk7mCRYBlUDf0viMuqKGAsfV6zrhsBbmgw3o1YfL+ki4gd7IGWB/MWb2NLktRXVdc/zbcvI6uYCvIE9YA7DbzzH32FYwdMTnbgLOtT1jRobrvjrusSvKRdvJrZscl60YPImas2i5gffEGqG0dRO4sto1wzX67iKCuumaR3A9wyXrD35ycdk8Sj/LZDfmkDfH4njIvyIukEqcZ5JnYFXZS5AFKF2TrL477ZmIqbHGDXX+4rC0NISTCEFueJexpDHlXduN55quvo2rbxms9fbGJPW1py+zXb+heO92V636wMlcd8ilnQraTup83sKpQDK+SrWcFG7nAnsObqEVXxdazJmnvoOwhvHulQZSCrWc5MsOcB90yV4iuSmxDuXbdg+40JC+oYuu/v9t8ji59p1Cw3ZJkm+FOMLztmijbTs6Gto12Pyhd99AbN1RbLjfSexNcapucajuzf1ZoH3T/0XKBZutxWj3oECyhlTFibGcqsqfgDmhL2RfubBPSLZNmG/7wePCEYKQpBM1Wbub0MbikMQTNVjUR6sPjbjDbSUneGa7BpewQJNu1UExbm1gVSLaZciLUtpuBbL0jwnY1kG2gckY4E88JDQaKbdj3jqUMbkp4zCi2Tir1klKPbUnYH0i2S4TtknD7JWaCqwwrB8oEa5FOlSmHqree50yUiSiTnr/ZyR8GY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPHbbezVcswHebT3DO2y+8+bn7G2gFdduL4ongAR7w5rOzVxZXfdeuk+3kfD+scTqan33fb62vvr/1PtiNLe9k/ZNrVNP5drrBKGxbX37OhbNzxzkdGtOz7a+9a3cjfcneawpfAD5q8Ap2NUMWgw6zO+jD2OrD2OrD2Orjy2z/A8duM/OnpFOqAAAAAElFTkSuQmCC" alt="Team Member" />
              <h3>Sarah Johnson</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAaVBMVEX///8WFhbn5+cAAAAMDAzf39/8/PwtLS35+fkTExPw8PD09PTJycnt7e3j4+MICAhTU1PAwMA4ODheXl5LS0ukpKTV1dVpaWmamppCQkK6urp7e3uFhYWvr68oKCgzMzMfHx9xcXGPj48LL//ZAAAEL0lEQVR4nO2aiZKqMBBFgSAmIKCyCOpT9P8/8gHivpDp3DBYkzNTs9VU5VRX00m6sRzre3AsY6sLY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6uPv23r3f/mvfk3IvjYBrMiKZfLMjkufLAs2tZZHFiN67px832+xsYCasuzlDFhXxCMpUUAzAekbZ6w2L5HxCzNYQvAbOvwZYzZL2Cs4JAlLGBsg+I2B+7iyzYoXZjtW9kmvFvPguQuyjb7IFvrHiGLoGzzj7J1MqwRq4Bsg/nLB+xKXAWAZUC2n5L2nLqAZTC2k/Kxzj7nwg5RdiG2/3ryoA0u4kFD2HqpjO0cEBaEbSQhW5eF2ThsZRKhDm42DtuDnO1BfTtD2O57K0JDPFU/LSBsp66MrWCjsOW7vq2hs1XfzgC2wVfZflcmWHspW7cah20iV8Hm46hghZwt4KCAsM3lbBfjsA1sicR195Nx2EqlAuQ4DrHN+yuuqACJgLH1Nr3BZXP1ZVD3smjZk7mCRYBlUDf0viMuqKGAsfV6zrhsBbmgw3o1YfL+ki4gd7IGWB/MWb2NLktRXVdc/zbcvI6uYCvIE9YA7DbzzH32FYwdMTnbgLOtT1jRobrvjrusSvKRdvJrZscl60YPImas2i5gffEGqG0dRO4sto1wzX67iKCuumaR3A9wyXrD35ycdk8Sj/LZDfmkDfH4njIvyIukEqcZ5JnYFXZS5AFKF2TrL477ZmIqbHGDXX+4rC0NISTCEFueJexpDHlXduN55quvo2rbxms9fbGJPW1py+zXb+heO92V636wMlcd8ilnQraTup83sKpQDK+SrWcFG7nAnsObqEVXxdazJmnvoOwhvHulQZSCrWc5MsOcB90yV4iuSmxDuXbdg+40JC+oYuu/v9t8ji59p1Cw3ZJkm+FOMLztmijbTs6Gto12Pyhd99AbN1RbLjfSexNcapucajuzf1ZoH3T/0XKBZutxWj3oECyhlTFibGcqsqfgDmhL2RfubBPSLZNmG/7wePCEYKQpBM1Wbub0MbikMQTNVjUR6sPjbjDbSUneGa7BpewQJNu1UExbm1gVSLaZciLUtpuBbL0jwnY1kG2gckY4E88JDQaKbdj3jqUMbkp4zCi2Tir1klKPbUnYH0i2S4TtknD7JWaCqwwrB8oEa5FOlSmHqree50yUiSiTnr/ZyR8GY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPHbbezVcswHebT3DO2y+8+bn7G2gFdduL4ongAR7w5rOzVxZXfdeuk+3kfD+scTqan33fb62vvr/1PtiNLe9k/ZNrVNP5drrBKGxbX37OhbNzxzkdGtOz7a+9a3cjfcneawpfAD5q8Ap2NUMWgw6zO+jD2OrD2OrD2Orjy2z/A8duM/OnpFOqAAAAAElFTkSuQmCC" alt="Team Member" />
              <h3>Michael Chen</h3>
              <p>Head of Product</p>
            </div>
            <div className="team-member">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAaVBMVEX///8WFhbn5+cAAAAMDAzf39/8/PwtLS35+fkTExPw8PD09PTJycnt7e3j4+MICAhTU1PAwMA4ODheXl5LS0ukpKTV1dVpaWmamppCQkK6urp7e3uFhYWvr68oKCgzMzMfHx9xcXGPj48LL//ZAAAEL0lEQVR4nO2aiZKqMBBFgSAmIKCyCOpT9P8/8gHivpDp3DBYkzNTs9VU5VRX00m6sRzre3AsY6sLY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6uPv23r3f/mvfk3IvjYBrMiKZfLMjkufLAs2tZZHFiN67px832+xsYCasuzlDFhXxCMpUUAzAekbZ6w2L5HxCzNYQvAbOvwZYzZL2Cs4JAlLGBsg+I2B+7iyzYoXZjtW9kmvFvPguQuyjb7IFvrHiGLoGzzj7J1MqwRq4Bsg/nLB+xKXAWAZUC2n5L2nLqAZTC2k/Kxzj7nwg5RdiG2/3ryoA0u4kFD2HqpjO0cEBaEbSQhW5eF2ThsZRKhDm42DtuDnO1BfTtD2O57K0JDPFU/LSBsp66MrWCjsOW7vq2hs1XfzgC2wVfZflcmWHspW7cah20iV8Hm46hghZwt4KCAsM3lbBfjsA1sicR195Nx2EqlAuQ4DrHN+yuuqACJgLH1Nr3BZXP1ZVD3smjZk7mCRYBlUDf0viMuqKGAsfV6zrhsBbmgw3o1YfL+ki4gd7IGWB/MWb2NLktRXVdc/zbcvI6uYCvIE9YA7DbzzH32FYwdMTnbgLOtT1jRobrvjrusSvKRdvJrZscl60YPImas2i5gffEGqG0dRO4sto1wzX67iKCuumaR3A9wyXrD35ycdk8Sj/LZDfmkDfH4njIvyIukEqcZ5JnYFXZS5AFKF2TrL477ZmIqbHGDXX+4rC0NISTCEFueJexpDHlXduN55quvo2rbxms9fbGJPW1py+zXb+heO92V636wMlcd8ilnQraTup83sKpQDK+SrWcFG7nAnsObqEVXxdazJmnvoOwhvHulQZSCrWc5MsOcB90yV4iuSmxDuXbdg+40JC+oYuu/v9t8ji59p1Cw3ZJkm+FOMLztmijbTs6Gto12Pyhd99AbN1RbLjfSexNcapucajuzf1ZoH3T/0XKBZutxWj3oECyhlTFibGcqsqfgDmhL2RfubBPSLZNmG/7wePCEYKQpBM1Wbub0MbikMQTNVjUR6sPjbjDbSUneGa7BpewQJNu1UExbm1gVSLaZciLUtpuBbL0jwnY1kG2gckY4E88JDQaKbdj3jqUMbkp4zCi2Tir1klKPbUnYH0i2S4TtknD7JWaCqwwrB8oEa5FOlSmHqree50yUiSiTnr/ZyR8GY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPHbbezVcswHebT3DO2y+8+bn7G2gFdduL4ongAR7w5rOzVxZXfdeuk+3kfD+scTqan33fb62vvr/1PtiNLe9k/ZNrVNP5drrBKGxbX37OhbNzxzkdGtOz7a+9a3cjfcneawpfAD5q8Ap2NUMWgw6zO+jD2OrD2OrD2Orjy2z/A8duM/OnpFOqAAAAAElFTkSuQmCC" alt="Team Member" />
              <h3>Emily Davis</h3>
              <p>Customer Success</p>
            </div>
            <div className="team-member">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAaVBMVEX///8WFhbn5+cAAAAMDAzf39/8/PwtLS35+fkTExPw8PD09PTJycnt7e3j4+MICAhTU1PAwMA4ODheXl5LS0ukpKTV1dVpaWmamppCQkK6urp7e3uFhYWvr68oKCgzMzMfHx9xcXGPj48LL//ZAAAEL0lEQVR4nO2aiZKqMBBFgSAmIKCyCOpT9P8/8gHivpDp3DBYkzNTs9VU5VRX00m6sRzre3AsY6sLY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6uPv23r3f/mvfk3IvjYBrMiKZfLMjkufLAs2tZZHFiN67px832+xsYCasuzlDFhXxCMpUUAzAekbZ6w2L5HxCzNYQvAbOvwZYzZL2Cs4JAlLGBsg+I2B+7iyzYoXZjtW9kmvFvPguQuyjb7IFvrHiGLoGzzj7J1MqwRq4Bsg/nLB+xKXAWAZUC2n5L2nLqAZTC2k/Kxzj7nwg5RdiG2/3ryoA0u4kFD2HqpjO0cEBaEbSQhW5eF2ThsZRKhDm42DtuDnO1BfTtD2O57K0JDPFU/LSBsp66MrWCjsOW7vq2hs1XfzgC2wVfZflcmWHspW7cah20iV8Hm46hghZwt4KCAsM3lbBfjsA1sicR195Nx2EqlAuQ4DrHN+yuuqACJgLH1Nr3BZXP1ZVD3smjZk7mCRYBlUDf0viMuqKGAsfV6zrhsBbmgw3o1YfL+ki4gd7IGWB/MWb2NLktRXVdc/zbcvI6uYCvIE9YA7DbzzH32FYwdMTnbgLOtT1jRobrvjrusSvKRdvJrZscl60YPImas2i5gffEGqG0dRO4sto1wzX67iKCuumaR3A9wyXrD35ycdk8Sj/LZDfmkDfH4njIvyIukEqcZ5JnYFXZS5AFKF2TrL477ZmIqbHGDXX+4rC0NISTCEFueJexpDHlXduN55quvo2rbxms9fbGJPW1py+zXb+heO92V636wMlcd8ilnQraTup83sKpQDK+SrWcFG7nAnsObqEVXxdazJmnvoOwhvHulQZSCrWc5MsOcB90yV4iuSmxDuXbdg+40JC+oYuu/v9t8ji59p1Cw3ZJkm+FOMLztmijbTs6Gto12Pyhd99AbN1RbLjfSexNcapucajuzf1ZoH3T/0XKBZutxWj3oECyhlTFibGcqsqfgDmhL2RfubBPSLZNmG/7wePCEYKQpBM1Wbub0MbikMQTNVjUR6sPjbjDbSUneGa7BpewQJNu1UExbm1gVSLaZciLUtpuBbL0jwnY1kG2gckY4E88JDQaKbdj3jqUMbkp4zCi2Tir1klKPbUnYH0i2S4TtknD7JWaCqwwrB8oEa5FOlSmHqree50yUiSiTnr/ZyR8GY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPY6sPHbbezVcswHebT3DO2y+8+bn7G2gFdduL4ongAR7w5rOzVxZXfdeuk+3kfD+scTqan33fb62vvr/1PtiNLe9k/ZNrVNP5drrBKGxbX37OhbNzxzkdGtOz7a+9a3cjfcneawpfAD5q8Ap2NUMWgw6zO+jD2OrD2OrD2Orjy2z/A8duM/OnpFOqAAAAAElFTkSuQmCC" alt="Team Member" />
              <h3>David Martinez</h3>
              <p>Operations Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="about-container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Products</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-item">
              <h3>4.8/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;