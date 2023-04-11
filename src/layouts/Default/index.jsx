import { Fragment } from "react";
import './Default.css'

function DefaultLayout({children}) {
    return ( 
        <Fragment>
            <div className="main-page">
                <header onClick={() => window.open('http://127.0.0.1:5173/', '_self')}>Frontend JavaScript Exam - Nguyen Minh Quan</header>
                <div style={{marginTop: '10px'}}>{children}</div>
            </div>
        </Fragment>
    )
}

export default DefaultLayout;