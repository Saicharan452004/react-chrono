// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelinecard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="full-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelinecard
