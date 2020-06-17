import React from 'react'
import 'antd/dist/antd.css'
import './index.less'
import { Button } from 'antd'
import { renderRoutes } from 'react-router-config'

const App = (props) => {
    return (
        <div>
            <Button type='primary'>open</Button>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default App
