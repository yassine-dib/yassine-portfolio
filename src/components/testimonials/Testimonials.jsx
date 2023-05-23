import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ayoub Britishman",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "I had the pleasure of collaborating with Yassine Dib on a demanding web project, and they exceeded all expectations. he possess a deep understanding of frontend technologies and frameworks, and his attention to detail is remarkable.Yassine is a true professional, and I look forward to working with him again in the future.",
    },
    {
      id: 2,
      name: "Kmilia Norhan",
      title: "Co-Founder of Teneco",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Working with Yassine dib was an absolute pleasure. his attention to detail and expertise in HTML, CSS, and JavaScript brought our website to life. he is consistently delivered high-quality work, meeting deadlines and exceeding our expectations. I highly recommend Yassine for anyone seeking a talented and reliable frontend developer. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of VOLVO-CARES",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "I am beyond impressed with Yassine's skills and professionalism. he have an incredible eye for design and a deep understanding of user experience. Our website's user interface has greatly improved since we started working with Yassine. his code is clean, efficient, and easy to maintain. I couldn't be happier with the results.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
