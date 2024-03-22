import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NewProduct } from '../../components/NewProduct/NewProduct';
import { ListProduct } from '../../components/ListProduct/ListProduct';
import {AddWaiter} from '../../components/AddWaiter/AddWaiter.jsx'
import { RemoveWaiter } from '../../components/RemoveWaiter/RemoveWaiter.jsx';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const Admin = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Box
                sx={{ flexGrow: 1, bgcolor: 'secondary', display: 'flex', height: '91vh', mt: 2 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', mr: 10 }}
                >
                    <Tab label="Ürün ekle" {...a11yProps(0)} />
                    <Tab label="Ürün listele" {...a11yProps(1)} />
                    <Tab label="Garson Ekle" {...a11yProps(2)} />
                    <Tab label="Garson çıkar" {...a11yProps(3)} />
                    <Tab label="İstatistikleri gör" {...a11yProps(4)} />
                    <Tab label="Depoya bak" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <NewProduct />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ListProduct />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AddWaiter />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <RemoveWaiter />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel>
            </Box>
        </>

    )
}



