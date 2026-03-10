import Style from "./classes.module.css";
import { classesData } from "../../Data/Data";
import ClassesCard from "../Card/ClassesCard";
import CardSlider from "../Slider/CardSlider";

export default function Classes() {
  return (
    <section className={Style.classSection} id="classes">
      <div className="container">
        <div className="centerHeading">
          <div className="sectionSubtitle">Our Classes</div>
          <h2 className={Style.classTitle}>Fitness Classes For Every Goal</h2>
        </div>

        <CardSlider>
          {classesData?.map((list, i) => (
            <ClassesCard
              key={list.title || i}
              title={list.title}
              image={list.image}
              icon={list.icon}
              para={list.para}
              targetProgress={list.targetProgress}
            />
          ))}
        </CardSlider>
      </div>
    </section>
  );
}
