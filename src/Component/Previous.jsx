// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Previous = ({ department }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const history = useHistory();

//   const handlePrevious = () => {
//     setCurrentIndex(prevIndex => prevIndex - 1);
//     // Construct the URL with the department information and navigate
//     history.push(`/department/${department}`);
//   };

//   return (
//     <div>
//       <button onClick={handlePrevious} disabled={currentIndex === 0}>
//         Previous
//       </button>
//       <p>{data[currentIndex]}</p>
//     </div>
//   );
// };

// export default Previous;
