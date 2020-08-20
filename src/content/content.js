import React from 'react';


import ContainerHolder from './containerholder';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Contact from './contact';

class Content extends React.Component {
    state = {  }
    render() { 
        return (
            <div>

                <Switch>
                    <Route path='/' exact component={ContainerHolder}></Route>
                    <Route path='/about' exact component={About}></Route>
                    <Route path='/contact' exact component={Contact}></Route>
                </Switch>

            
            </div>
          );
    }
}
 
export default Content;