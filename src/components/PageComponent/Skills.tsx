import SectionTitle from "../SectionTitle"
import { skills } from "@/data/Common/data"
import { Icon } from "@iconify/react"

const Skills = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title="Tech Stack" />
      <div className=" flex flex-wrap gap-1.5 ">
        {skills.map((skill) => (
          <a key={skill.id} className="skills-card">
            <Icon icon={skill.icon} />
            {skill.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Skills
