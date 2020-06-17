import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import router from '@/router/router'
import { renderRoutes } from 'react-router-config'

// const render = Component => {
//     ReactDOM.render(<div><Component /></div>, document.getElementById('app'))
// }
// const renderRoutesDOM = <div>
//         <Router>
//             {renderRoutes(router)}
//         </Router>
// </div>
// render(renderRoutesDOM)
ReactDOM.render(<Router>
        {renderRoutes(router)}
    </Router>, document.getElementById('app'))
