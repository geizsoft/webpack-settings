import React from 'react'
import 'antd/dist/antd.css'
import './index.less'
import {Button} from 'antd'
import { renderRoutes } from 'react-router-config'

const App = (props) => {
    console.log(props)
    return <div>
        <h1>test</h1>
        <Button type="primary">1</Button>
        <React.Fragment>
            {renderRoutes(props.route.routes)}
        </React.Fragment>
    </div>
}
export default App