import React, {useState} from 'react';
import {AuthStatus, ReduxState, Tokens, UserData} from 'interface';
import {connect, ConnectedProps} from 'react-redux';
import background from 'assets/images/login-background.jpg';
import RedBox from 'assets/images/RedBox.png';
import './directMessage.style.scss';
import fakePic from "../../assets/images/dashboard/fakepic.jpg";
import {Link} from "react-router-dom";
import {RoutePath} from "../../data";
import DashboardEmptyState from "../Dashboard/emptyState/emptyState.index";
import DashboardItemsSkeleton from "../Dashboard/skeleton/dashboard.skeleton";
import {TextField} from "@material-ui/core";


const DirectMessage: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {


    return (
        <div className="vsharee-directmassage-page">


            <div className="my-container">
                <div className="friend-list">
                    <div className="search">
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>

                    </div>
                    <div className="context">
                        <div className="items">
                            <div className="left-items">
                                <img src={fakePic} alt="fakePic"/>
                            </div>
                            <div className="right-items">
                                <p>username</p>
                                <span>watching movie</span>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="chat-box">
                    <div className="top-chat">

                    </div>

                    <div className="center-chat">

                    </div>

                    <div className="bottom-chat">
                         <div className="my-input">
                            <TextField id="outlined-basic" variant="outlined"/>
                        </div>
                    </div>





                </div>


            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(DirectMessage);