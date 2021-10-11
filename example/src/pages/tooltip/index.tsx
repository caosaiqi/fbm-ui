// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { Tooltip, Button, Grid, Box } from "../../../../src"

export default () => (
  <Box sx={{ width: 500 }}>
    <Grid container justifyContent="center">
      <Grid item>
        <Tooltip open  title="Hello world" placement="top-start">
          <Button >top-start</Button>
        </Tooltip>
        <Tooltip open  title="Hello world" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip arrow title="Hello world" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Tooltip title="Hel lo" placement="left-start">
          <Button>left-start</Button>
        </Tooltip>
        <br />
        <Tooltip title="Hello world" placement="left">
          <Button>left</Button>
        </Tooltip>
        <br />
        <Tooltip title="Hello world" placement="left-end">
          <Button>left-end</Button>
        </Tooltip>
      </Grid>
      <Grid item container xs={6} alignItems="flex-end" direction="column">
        <Grid item>
          <Tooltip title="Hello world" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Hello world" placement="right">
            <Button>right</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Hello world" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title="Hello world" placement="bottom-start">
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="Hello world" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="Hello world" placement="bottom-end">
          <Button>bottom-end</Button>
        </Tooltip>
      </Grid>
    </Grid>
  </Box>
)