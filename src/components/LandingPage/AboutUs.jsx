import "./AboutUs.css";
import Card from "./Card";
function AboutUs() {
  // move this to a seperate file and instead of using the image url download it and store it locally
  const CardText = [
    {
      id: 1,
      title: "Who we are?",
      description:
        "At Qemer, we specialize in delivering innovative solutions across graphic design, web development, mobile app development, and full-stack development. Our successful projects have empowered clients to achieve their digital goals, showcasing our commitment to excellence. We equip our students with the skills needed to thrive in today’s tech-driven landscape.",
      imageSource:"/assets/who-we-are-image.jpg"
    },
    {
      id: 2,
      title: "Our Previous Work",
      description:
        "We have successfully completed a diverse range of projects, from cutting-edge mobile applications to dynamic websites and comprehensive graphic design solutions. Our portfolio reflects our dedication to quality and innovation, helping businesses enhance their online presence and achieve their goals. Each project showcases our expertise and commitment to delivering impactful results.",
      imageSource:"/assets/tech-image2.jpg"
    },
    {
      id: 3,
      title: "Achievements",
      description:
        "Our achievements include teaching hundreds of students, equipping them with the skills needed to excel in the tech industry. Each student success story showcases our commitment to quality, innovation, and impactful results.",
        imageSource:"/assets/achievements-image.webp"
    },
    {
      id: 4,
      title: "Learning Environment",
      description:
        "We provide a supportive and practical learning environment where students can collaborate on projects and gain hands-on experience. Our facilities are designed to help students develop the skills they need for success in the tech industry.,",
        imageSource:"/assets/learn-image.jpg"

      },
  ];
  return (
    <>
      <div className="card-container" id="about">
        {CardText.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            src={item.imageSource}
          />
        ))}
      </div>
      <div className="about-us-slogan">
        <h1>
        We aim to bridge the gap between academic knowledge and real-world application.        
        </h1>
      </div>
    </>
    
  );
}
export default AboutUs;
