import React from 'react'
import {Link} from 'react-router-dom'
import Icon from '@mdi/react'
// import { mdiLanguageHtml5 } from '@mdi/js';
// import { mdiLanguageCss3 } from '@mdi/js';
// import { mdiLanguagePython } from '@mdi/js';
import { mdiLanguageJavascript, mdiLanguageTypescript, mdiLanguageJava, mdiLanguageCpp, mdiNodejs } from '@mdi/js';
// import { mdiLanguageTypescript } from '@mdi/js';
// import { mdiLanguageJava } from '@mdi/js';
// import { mdiLanguageCpp } from '@mdi/js';
// import { mdiNodejs } from '@mdi/js';
import { mdiAndroid, mdiGit, mdiReact, mdiJquery } from '@mdi/js';
// import { mdiGit } from '@mdi/js';
// import { mdiReact } from '@mdi/js';
// import { mdiJquery } from '@mdi/js';
import {mdiLanguageHtml5, mdiLanguageCss3, mdiDatabase, mdiLanguagePython, mdiDocker, mdiFirebase, mdiWebpack, mdiBash} from '@mdi/js';


const Skills = () => (
    <div style={{height: "1500px"}}>
        <h1><Link to={'/skills'} replace>Skills</Link></h1>
        <Icon path={mdiLanguageHtml5} size={5}/>
        <Icon path={mdiLanguageCss3} size={5}/>
        <Icon path={mdiDatabase} size={5}/>
        <Icon path={mdiLanguagePython} size={5}/>
        <Icon path={mdiDocker} size={5}/>
        <Icon path={mdiFirebase} size={5}/>
        <Icon path={mdiWebpack} size={5}/>
        <Icon path={mdiBash} size={5}/>
        <Icon path={mdiLanguageJavascript} size={5}/>
        <Icon path={mdiLanguageTypescript} size={5}/>
        <Icon path={mdiLanguageCpp} size={5}/>
        <Icon path={mdiNodejs} size={5}/>
        <Icon path={mdiAndroid} size={5}/>
        <Icon path={mdiGit} size={5}/>
        <Icon path={mdiReact} size={5}/>
        <Icon path={mdiJquery} size={5}/>
    </div>
)


export default Skills