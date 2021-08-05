import React from 'react'
// -----------------------------------------------------------------------------
import { Container } from './styles'
// -----------------------------------------------------------------------------
export default function Button({
  children, onClick, type
}) {
// -----------------------------------------------------------------------------
  return (
    <Container onClick={onClick}>
      { type === "01" && (
        <div
          className="div01"
        >{children}</div>
      )}
      { type === "02" && (
        <div
          className="div02"
        >{children}</div>
      )}
      { type === "03" && (
        <div
          className="div03"
        >{children}</div>
      )}
      { type === "04" && (
        <div
          className="div04"
        >{children}</div>
      )}
      { type === "05" && (
        <div
          className="div05"
        >{children}</div>
      )}
    </Container>
  )
}
