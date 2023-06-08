import React, { PureComponent } from 'react'
import withRouter from '../hoc/withroute'

export class Bianliang extends PureComponent {
    render() {
        const { router } = this.props
        const { params } = router
        const { query } = router
        return (
            <div>{params.id}-{params.name}-{query.id}</div>
        )
    }
}

export default withRouter(Bianliang) 