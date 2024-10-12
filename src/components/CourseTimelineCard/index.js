// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <div className="course-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="unorder-course-list">
        {tagsList.map(eachtag => (
          <li key={eachtag.id} className="list">
            <p className="course-tag">{eachtag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
