## React Snippets

// common snippets React

```js
    imr→ 	import React from 'react'
    imrd→ 	import ReactDOM from 'react-dom'
    imrc→ 	import React, { Component } from 'react'
    imrpc→ 	import React, { PureComponent } from 'react'

    //rafc (arrow func with export)
    export const MarkCheacker = () => {
      return (
        <div>MarkCheacker</div>
      )
    }
    
    // rafce (arrow func with export)
    const MarkCheacker = () => {
      return (
        <div>MarkCheacker</div>
      )
    }
    export default MarkCheacker

    //rfc
    export default function MarkCheacker() {
        return (
        <div>MarkCheacker</div>
        )
    }

    //rfce (regular func with export )
    function MarkCheacker() {
      return (
        <div>MarkCheacker</div>
      )
    }
    export default MarkCheacker
```

## Js + React

```js
    clg - console.log(first)

    imp→ 	import moduleName from 'module'
    imn→ 	import 'module'
    imd→ 	import { destructuredModule } from 'module'
    ime→ 	import * as alias from 'module'

    // nfn
    const first = (second) => { third }

    exp→ 	export default moduleName
    exd→ 	export { destructuredModule } from 'module'

    enf→ 	export const functionName = (params) => { }
    ednf→ 	export default function functionName(params) { }

    anfn→ 	(params) => { }
    edf→ 	export default (params) => { }
    met→ 	methodName = (params) => { }

    dob→ 	const {propName} = objectToDescruct
    dar→ 	const [propName] = arrayToDescruct

    cp→ 	const { } = this.props
    cs→ 	const { } = this.state

```


## aws CDK

```Ts
// cdk-constr
export interface BudgetProps {}
export class Budget extends Construct {
  constructor(scope: Construct, id: string, props: BudgetProps) {
    super(scope, id);
  }
}

```
