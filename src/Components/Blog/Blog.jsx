import BlogCard from "../Card/BlogCard";
import Style from "./blog.module.css";
import { blogData } from "../../Data/Data";
import CardSlider from "../Slider/CardSlider";

export default function Blog() {
  return (
    <section className={Style.blogSection} id="blog">
      <div className="container">
        <div className="centerHeading">
          <div className="sectionSubtitle">Our News</div>
          <h2>Latest Blog Feed</h2>
        </div>

        <div className={Style.blogCardGrid}>
          {blogData?.map((blog, i) => {
            return (
              <BlogCard
                key={blog.id || i}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                description={blog.description}
              />
            );
          })}
        </div>

        {/* Mobile Slider */}
        <div className={Style.blogMobile}>
          <CardSlider duration={4500}>
            {blogData?.map((blog, i) => (
              <BlogCard
                key={blog.id || i}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </CardSlider>
        </div>
      </div>
    </section>
  );
}
