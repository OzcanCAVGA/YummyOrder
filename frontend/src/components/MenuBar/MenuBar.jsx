import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="one">Kahvalti</Button>,
    <Button key="two">Ana Yemek</Button>,
    <Button key="three">Icecekler</Button>,
];



export const MenuBar = () => {

    return (
        <div className=' m-auto w-9/12 mt-14'>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >

                <ButtonGroup aria-label="Medium-sized button group" sx={{color:"green"}}>
                    {buttons}
                </ButtonGroup>

            </Box>
        </div >
    )
}
