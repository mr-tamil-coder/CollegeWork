import React from 'react'
import { useParams } from 'react-router-dom';
const testing = () => {
    const {subjectCode } = useParams();
  
  return (
    <div>testing {subjectCode}</div>
  )
}

export default testing