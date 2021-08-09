import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { GiBinoculars } from "react-icons/gi";

export default function Navbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" align="center">
                        HousePICK <GiBinoculars size={28} />
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}
