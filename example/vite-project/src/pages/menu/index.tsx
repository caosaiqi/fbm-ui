// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import {
  FolderIcon, ArrowDropRightIcon,
} from '@avocadoui/icons';
import { ListRow, List, FormControlLabel, Checkbox} from "../../../../../src"

const sx = {
  margin: '20px',
  width: 400,
  boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
}

const rows = [
  {
    button: true,
    icon: <FolderIcon />,
    text: [
      'Single-line item',
      'Secondary text',
    ],
    // secondaryAction:  {},
  },
  {
    button: true,
    icon: <FolderIcon />,
    text: [
      'Single-line item2',
      'Secondary text',
    ],
    secondaryAction: <ArrowDropRightIcon />,
  },
  {
    button: true,
    icon: <FolderIcon />,
    text: [
      'Single-line item3',
      'Secondary text',
    ],
    secondaryAction: <ArrowDropRightIcon />,
  },
]


export default function BasicMenu() {
  const [dense, setDense] = React.useState(false);

  return (
    <div style={{ padding: 20 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={dense}
            onChange={(event) => setDense(event.target.checked)}
          />
        }
        label="Enable dense"
      />


      <List dense={dense} component="ul" sx={sx}>
        {
          rows.map((row) => <ListRow key={row.text[0]} {...row} />)
        }
      </List>
    </div>
  );
}
