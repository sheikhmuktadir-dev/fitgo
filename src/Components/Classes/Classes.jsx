import { motion } from "framer-motion";
import Style from "./classes.module.css";
import { classesData } from "../../Data/Data";
import ClassesCard from "../Card/ClassesCard";
import CardSlider from "../Slider/CardSlider";

export default function Classes() {
  return (
    <section className={Style.classSection} id="classes">
      <div className="container">
        <motion.div
          className="centerHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="sectionSubtitle">Our Classes</div>
          <h2 className={Style.classTitle}>Fitness Classes For Every Goal</h2>
        </motion.div>

        <CardSlider>
          {classesData?.map((list, i) => (
            <ClassesCard
              key={i}
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
