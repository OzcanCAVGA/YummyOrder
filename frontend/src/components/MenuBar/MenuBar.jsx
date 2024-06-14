import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export const MenuBar = ({ setCategory }) => {
    const changeCategory = (category) => {
        setCategory(category);
    }

    return (
        <div className='m-auto w-9/12 mt-14'>
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
                <ButtonGroup aria-label="Medium-sized button group" sx={{ color: "green", background:"white" }}>
                    <Button key="one" onClick={() => changeCategory("All")}>Tümü</Button>
                    <Button key="one" onClick={() => changeCategory("Yiyecekler")}>Yiyecekler</Button>
                    <Button key="two" onClick={() => changeCategory("Tatlilar")}>Tatlilar</Button>
                    <Button key="three" onClick={() => changeCategory("Icecekler")}>Icecekler</Button>
                    <Button key="four" onClick={() => changeCategory("Kahvalti Menusu")}>Kahvalti Menusu</Button>
                    <Button key="four" onClick={() => changeCategory("Sicak Yemekler")}>Sicak Yemekler</Button>
                </ButtonGroup>
            </Box>
        </div>
    )
}
