import React, { Component, useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import axios from 'axios'
import { isArray } from '../utilities/index.js'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


const Search = () => {
    const [sha,setSha] = useState([]);
    const [error,setError] = useState([]);
    const [URL, setURL]= useState('https://api.github.com/repos/');
    const [state, setState]= useState({
        profile: 'john024x',
        repository: 'GithubCommits' 
    })
    useEffect(() => {
        getData(URL)
    } , [])
    const getValues = e => {
        setState({...state, [e.target.name] : e.target.value })
    }

    function getData(url) {
                    
        axios.get(`${url}${state.profile}/${state.repository}/commits`)
        // axios.get(`https://api.github.com/repos/john024x/GithubCommits/commits`)
        .then(res => {
            setSha(res.data);
            console.log(res.data[0])
        })
        .catch(err => {
            setError(err);
        });
    }

    return(
        <section style={{ margin: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={5}>
                    <TextField fullWidth onChange={(e) => getValues(e)} id="profile" value={state.profile} name="profile" label="Github profile" variant="outlined" size="small" style={{ marginRight: '20px' }}/>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <TextField fullWidth onChange={(e) => getValues(e)} id="repository" value={state.repository} name="repository" label="Repository" variant="outlined" size="small" style={{ marginRight: '20px' }}/>
                </Grid >
                <Grid item xs={12} md={6} lg={2}>
                    <Button fullWidth onClick={() => getData(URL)} variant="contained" size="medium" >View commits</Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Timeline position="alternate">
                        {isArray(sha) && sha.map(item => (
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                    {item.commit.author.date}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                            <TimelineDot>
                                                <Avatar alt="User" src={item.author.avatar_url} />
                                            </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            {item.commit.message.substring(0, 140)}
                                        </Typography>
                                        <Typography variant="h6" component="span">
                                            <br></br><Link target="_blank" underline="none" href={item.author.html_url}>{item.author.login}</Link>
                                        </Typography>
                                        
                                    </TimelineContent>
                                </TimelineItem>
                        ))}
                    </Timeline>
                </Grid>
                
            </Grid>

        </section>
    )
}

export default Search;