import IconButton from 'material-ui/IconButton';
import { NavigationExpandMore } from 'material-ui/svg-icons';
import * as React from 'react';
import { IconButtonExpandMoreStyle } from '../../styled';

const IconButtonExpandMore = (props: IconButtonExpandMoreProps) => (
    <div>
        <IconButton
            disabled={!props.active}
            style={IconButtonExpandMoreStyle}
            onClick={props.onClickMethod}
        >
            <NavigationExpandMore/>
        </IconButton>
    </div>
);

export default IconButtonExpandMore;