import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://ancient-cliffs-97923.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses);
    return [courses, setCourses];
}

export default useCourses;