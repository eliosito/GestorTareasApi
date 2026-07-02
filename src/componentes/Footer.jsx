import React from 'react'

export default function Footer() {
  return (
<footer className="footer-container">
      <div className="footer-info">
        <p>Estudiante: Elio Villarroel.</p>
        <p>Curso: 7mo 2da.</p>
        <p>Especialidad: Programacion</p>
        <p className="footer-professor">Profesor: Damian Greco</p>
      </div>
      <div className="footer-logo-container">
        <img src="/images.png" alt="Logo Institucional" className="footer-logo" />
      </div>
    </footer>
  )
}
