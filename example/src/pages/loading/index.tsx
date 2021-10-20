import * as React from 'react'
import { Aloading, Abox, Button } from "../../../../src"

export default () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setLoading(!loading)}>show loading</Button>
      <Abox 
        loading={loading}
        loadingSize="small"
        loadingText="加载中，请您稍等"
      >
        <h1>asda</h1>
        <h1>asda</h1>
      </Abox>
      <br />
      <br />
      <br />
      <br />
      <Aloading size="small" />
    </div>
  )
}