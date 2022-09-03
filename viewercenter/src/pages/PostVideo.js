import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ajaxPost } from '../utils/helpers';
const fetch = require("node-fetch");
const { S3 } = require("aws-sdk");

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                JS Tube
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

async function postVideoSend(video_title, video_file_name, video_file) {
    const postUrl = '/api/videos/post';
    let token = localStorage.getItem('token') || 'notloggedin';
    video_file_name = Date.now() + "_" + video_file_name;

    if (video_title) {
        ajaxPost("/api/users/isloggedin", {token}, async function (result) {
            if (result.success) {
                try {
                    const s3Service = new S3({
                        region: "us-west-1",
                        credentials: {
                            secretAccessKey: process.env.AMAZONKEY,
                            accessKeyId: process.env.AMAZONKEYID
                        },
                    });

                    const uploadedImage = await s3Service.upload({
                        Bucket: "ytcloneapp",
                        //Key: req.files[0].originalFilename,
                        Key: "uploads/" + video_file_name,
                        Body: video_file,
                    }).promise()
                    console.log(uploadedImage);
                    let video_link = uploadedImage.Location;
                    const postBody = {
                        video_title: video_title,
                        video_file: video_link,
                        token: token
                    };
                    ajaxPost(postUrl, postBody, function (result) {
                        console.log(result);
                        alert("Upload Successful");
                        window.location.href = "/";
                    });

                } catch (err) {
                    console.log("ERROR", err);
                }
            }
            else {
                alert("Login to upload");
            }
            //window.location.href="/"

        });
    }

}

export default function PostVideo() {

    let tempFile;
    let tempFileData;
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (tempFile)
            postVideoSend(data.get('video_title'), tempFile.name, tempFileData);
    };

    function handleChange(event) {
        tempFile = event.target.files[0];
    console.log(tempFile);
        var fr = new FileReader();
        fr.onload = function () {
            tempFileData = fr.result;
        };
        fr.readAsArrayBuffer(tempFile);
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Post Video
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="video_title"
                            label="Video Title"
                            name="video_title"
                            autoComplete="videotitle"
                            autoFocus
                        />
                        <input type="file" onChange={handleChange} accept="video/*" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Post
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/SignIn" variant="body2">
                                    {"You have to be signed in. Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}