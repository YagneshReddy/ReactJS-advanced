import React from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'

function ModuleCSS() {
  return (
    <div>
        <h1 className="error">Success message will be blue color</h1>
        <h1 className={styles.error}>Error Message will be red Color</h1>
        <h1 className={styles.success}>Success message will be in Green color</h1>
    </div>
  )
}

export default ModuleCSS