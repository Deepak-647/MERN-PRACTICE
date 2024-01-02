import { useAuth } from "../store/auth";
const Services = () => {
  const {courses} = useAuth();
  return (
    <div>
      <div>Service</div>
      <div>
      {courses.map((course, index) => (
      <div key={index}>
        <img src="/images/design.png" alt="design" width="200" />
          <div>
            <h1>{course.courseName}</h1>
            <p>${course.priceInRupees}</p>
            <p>{course.description}</p>
             
            <p>Duration : {course.duration}</p>
          </div>
      </div>
        ))}
      </div>

    </div>
  )
}

export default Services