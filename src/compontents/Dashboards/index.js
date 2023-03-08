import React, { useState, useEffect } from 'react'
import './dashboard.css'
import parseJwt from '../utils/jwtUtils'
import fetcher from '../utils/fetcherUtil'
import { useNavigate } from 'react-router-dom'

function Dashboard(props) {

  const assignments1 = [
    {id: 1, number: 101, githubUrl: "www.github.com/somerepo/someproject101"},
    {id: 2, number: 102, githubUrl: "www.github.com/somerepo/someproject101"},
    {id: 3, number: 103, githubUrl: "www.github.com/somerepo/someproject101"},
    {id: 4, number: 104, githubUrl: "www.github.com/somerepo/someproject101"},
  ]

  const [assignments, setAssignments] = useState(null);

  const navigate = useNavigate();

  function moveToAssignmentView() {
    window.location.href = "/view";
  }

  useEffect(() => {
    fetcher("/api/assignments", "get", props.data)
    .then((assignmentsData) =>{
      setAssignments(assignmentsData);
    })
  }, [props.data])

  function createAssignment(){
    fetcher("/api/assignments", "post", props.data)
    .then((assignment) => {
      navigate(`/assignments/${assignment.id}`);
    })};
  

  return (
    <div className='mainDash'>
      <h1>Dashboard</h1>
      <h2>Welcome {props.data ? parseJwt(props.data)['sub'] : <></>}</h2>
      <div>
        <button className='mNAButton' onClick={() => createAssignment()}>Make New Assingment</button>
      </div>
      <div className='assignmentBoard'>
        <div className='assignmentsContainer'>
          {
            assignments ? assignments.map(item => {
              return (
              <div className='assignmentCard' key={item.id}>
                <h2>Assignment #{item.number}</h2>
                <p>Github URL: {item.githubURL}</p>
                {/* <button className='viewButton' onClick= {moveToAssignmentView()}>View</button> */}
              </div>
              )
            }) : <>No Assignments Present</>
          }
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard