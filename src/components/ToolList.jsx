import React, { useState } from 'react';
import { Spinner } from 'reactstrap';
import axios from 'axios';
import Search from './Components/Search.jsx';
import Tools from './Components/Tools.jsx'
import {navigate} from '@reach/router'

const ToolList = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search Users
  const searchTools = query => {
    setLoading(true);
    // Link in comments
    axios
      .get(
        
      )
      .then(res => {
        setTools(res.data.items);
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const content = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      return <Tools tools={tools} />;
    }
  };
  return (
    <div>
        <h1>RenTool</h1>
      <div className='container'>
        <Search searchTools={searchTools} />
        {content()}
      </div>
      <button className="btn btn-secondary btn-lg m-1" onClick={() => navigate("/dashboard/new")}>Add A Post</button>
    </div>
  );
};

export default ToolList;