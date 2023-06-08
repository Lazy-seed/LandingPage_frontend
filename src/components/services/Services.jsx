import React from 'react'
import './services.scss'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Services() {
    return (
        <div className="services">

            <h2>Services Provided</h2>
            <ul>
                <li>
                    <AccessTimeIcon style={{ fontSize: '30px' }} />
                    <h3>Flexible time</h3>
                    <h5>
                        learn at your own pace, anytime, anywhere, &amp;
                        revise concepts as needed.
                    </h5>
                </li>

                <li>
                    <PeopleOutlineIcon style={{ fontSize: '30px' }} />
                    <h3>Expert Faculty </h3>
                    <h5>Recorded lectures by renowned faculty members
                        with 10+ years of teaching experience from IITs, IISc, NITs, &amp; more.
                    </h5>
                </li>
                <li>
                    <DriveFileRenameOutlineIcon style={{ fontSize: '30px' }} />
                    <h3>Practice sets </h3>
                    <h5>Get to solve daily Chapter level &amp; subject level
                        practice problems.
                    </h5>
                </li>
                <li>
                    <DriveFileRenameOutlineIcon style={{ fontSize: '30px' }} />
                    <h3>Pervasive Tests</h3>
                    <h5>Attempts mock tests by chapter level, subject
                        level &amp; full length tests as per GATE paper pattern.
                    </h5>
                </li>
                <li>
                    <EditNoteIcon style={{ fontSize: '30px' }} />
                    <h3>Extensive practice </h3>
                    <h5>Access to 8,000+ practice questions, infinite
                        custom tests, past 15 years GATE papers with solutions.
                    </h5>
                </li>
                <li>
                    <WhatsAppIcon style={{ fontSize: '30px' }} />
                    <h3>Doubt Solving</h3>
                    <h5>Get all your doubts solved through Email &amp;
                        WhatsApp.
                    </h5>
                </li>

            </ul>
        </div>
    )
}
