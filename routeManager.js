// extend React Router RoutingContext
import { RouterContext } from 'react-router'

 export default class AugmentedRoutingContext extends RouterContext {
      createElement(component, props) {
          // inject additional props into the component to be created
          const context = this.props.context;
          console.log("hello");
          return component == null ? 
          null : this.props.createElement(component, {...props, ...{context}});
      }
};
