import { createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'

export const primary = {
    main: green[500],
}

export default createTheme(
    {
        palette: {
            primary,
        }
    }
)