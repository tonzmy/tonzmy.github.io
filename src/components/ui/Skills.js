import React from 'react'
import Icon from '@mdi/react'
import { mdiLanguageJavascript, mdiLanguageTypescript, mdiLanguageJava, mdiLanguageCpp, mdiNodejs } from '@mdi/js';
import { mdiAndroid, mdiGit, mdiReact, mdiJquery } from '@mdi/js';
import {mdiLanguageHtml5, mdiLanguageCss3, mdiDatabase, mdiLanguagePython, mdiDocker, mdiFirebase, mdiWebpack, mdiBash} from '@mdi/js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "../css/skills.css"

const Skills = () => (
    <div>
        <div className="title">
            <Button href="#/skills" size="large">
                <Typography variant="h6" className="title">
                        Skills
                </Typography>
                <div className="line"></div>
            </Button>
        </div>
        <div className="icon-group">
            <div>
                <Icon path={mdiLanguageJavascript} size={5} color="#ebd94d"/>
                <Typography color="textSecondary">
                    JavaScript
                </Typography>
            </div>
            <div>
                <Icon path={mdiLanguageTypescript} size={5} color="#3274c0"/>
                <Typography color="textSecondary">
                Typescript
                </Typography>
            </div>
            <div>
                <Icon path={mdiLanguageHtml5} size={5} color="#d96a3a"/>
                <Typography color="textSecondary">
                    HTML 5
                </Typography>
            </div>
            <div>
                <Icon path={mdiLanguageCss3} size={5} color="#315da4" />
                <Typography color="textSecondary">
                    CSS 3    
                </Typography>
            </div>
            <div>
                <Icon path={mdiLanguageJava} size={5} color="#5b7d99"/>
                <Typography color="textSecondary">
                    Java
                </Typography>
            </div>
            <div>
                <Icon path={mdiLanguagePython} size={5} color="#5b91be"/>
                <Typography color="textSecondary">
                    Python
                </Typography>
            </div>
            <div>
                <Icon path={mdiLanguageCpp} size={5} color="#357bc1"/>
                <Typography color="textSecondary">
                    C++
                </Typography>
            </div>
            <div>
                <Icon path={mdiNodejs} size={5} color="#91bd3a"/>
                <Typography color="textSecondary">
                    NodeJS
                </Typography>
            </div>
            <div>
                <Icon path={mdiReact} size={5} color="#5fcdf2"/>
                <Typography color="textSecondary">
                    React
                </Typography>
            </div>
            <div>
                <Icon path={mdiJquery} size={5} color="#2d64a3"/>
                <Typography color="textSecondary">
                    Jquery
                </Typography>
            </div>
            <div>
                <Icon path={mdiAndroid} size={5} color="#84ac50"/>
                <Typography color="textSecondary">
                    Android
                </Typography>
            </div>
            <div>
                <Icon path={mdiFirebase} size={5} color="#efc74f"/>
                <Typography color="textSecondary">
                    Firebase
                </Typography>
            </div>
            <div>
                <Icon path={mdiDatabase} size={5}/>
                <Typography color="textSecondary">
                    Database
                </Typography>
            </div>
            <div>
                <Icon path={mdiDocker} size={5} color="#4494df"/>
                <Typography color="textSecondary">
                    Docker
                </Typography>
            </div>
            <div>
                <Icon path={mdiWebpack} size={5} color="#3872b4"/>
                <Typography color="textSecondary">
                    Webpack
                </Typography>
            </div>
            <div>
                <Icon path={mdiBash} size={5}/>
                <Typography color="textSecondary">
                    Bash
                </Typography>
            </div>
            <div>
                <Icon path={mdiGit} size={5} color="#d75a3e"/>
                <Typography color="textSecondary">
                    Git
                </Typography>
            </div>
  
        </div>
    </div>
)


export default Skills