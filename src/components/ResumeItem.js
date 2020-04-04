import React from "react"

const ResumeItem = props => {
  const { title, dateStarted, dateEnded, description } = props

  return (
    <div className="resume-item">
      <h3 className="resume-item--title">{title}</h3>
      <div className="resume-item__dates">
        <div className="resume-item__dates--started">{dateStarted}</div>
        <div className="resume-item__dates--ended">{dateEnded}</div>
      </div>
      <div className="resume-item--description">{description}</div>
    </div>
  )
}

export default ResumeItem
