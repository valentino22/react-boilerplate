import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import 'modern-css-reset' // importing the css reset from node_modules
import './styles.css'

ReactDom.render(<App/>, document.getElementById('app'))