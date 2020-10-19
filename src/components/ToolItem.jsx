import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap'

const ToolItem = ({tool}) => {
    return (
      <div className='col-md-3 mb-3'>
        <Card>
          <CardImg top width='100%' src={tool.avatar_url} alt={tool.login} />
          <CardBody>
                    <CardTitle>{ tool.login }</CardTitle>
                    
                    <a href={ `tools/${tool.login}` }  rel=''>
                        <Button>More</Button>
                    </a>
          </CardBody>
        </Card>
      </div>
    );
}

export default ToolItem