import React, { Fragment, useState } from "react";
import TNavbar from "../TCommon/navbar.js";
import UtiInfoCss from './usertheatreinfo.module.css'
const Usertheatreinfo = () => {

    const [tname, setTname] = useState("");




    return (
        <div>
            <TNavbar />
            <div className={UtiInfoCss.maindiv}>
                <h1 className="text-[2.4rem]" style={{ textAlign: 'center', marginTop: '30px', color: 'gold' }}>About Theatre Form</h1>
                <form className={UtiInfoCss.formR}>
                    <div className={UtiInfoCss.div1}>
                        <div className={UtiInfoCss.subdiv1}>
                            <label className={UtiInfoCss.labelR} htmlFor="theatreName">Theatre Name:</label>
                            <input
                                type="text"
                                className={UtiInfoCss.inputr}
                                name="theatreName"
                                value={tname} // Replace with the appropriate React variable or state
                                readOnly
                            />
                            <br /><br />
                        </div>

                        <div className={UtiInfoCss.subdiv2}>
                            <label className={UtiInfoCss.labelR} htmlFor="imgurl">Theatre Image URL1:</label>
                            <input
                                type="text"
                                className={UtiInfoCss.inputr}
                                name="theatreimgurl1"
                                readOnly
                            />
                            <br /><br />



                        </div>
                    </div>

                    <div className={UtiInfoCss.div2}>
                        <div className={UtiInfoCss.subdiv1}>
                            <label className={UtiInfoCss.labelR} htmlFor="imgurl">Theatre Image URL2:</label>
                            <input
                                type="text"
                                className={UtiInfoCss.inputr}
                                name="theatreimgurl2"
                                readOnly
                            />
                            <br /><br />
                        </div>

                        <div className={UtiInfoCss.subdiv2}>
                            <label className={UtiInfoCss.labelR} htmlFor="imgurl">Theatre Image URL3:</label>
                            <input
                                type="text"
                                className={UtiInfoCss.inputr}
                                name="theatreimgurl3"
                                readOnly
                            />
                            <br /><br />
                        </div>
                    </div>

                    <div className={UtiInfoCss.div3}>
                        <div className={UtiInfoCss.subdiv1}>
                            <label className={UtiInfoCss.labelR} htmlFor="screentype">Screen Type:</label>
                            <input
                                type="text"
                                className={UtiInfoCss.inputr}
                                name="screentype"
                                style={{ width: '10rem' }}
                                readOnly
                            />
                            <br /><br />
                        </div>

                        <div className={UtiInfoCss.subdiv2}>
                            <label className={UtiInfoCss.labelR} htmlFor="snacksinfo">Snacks:</label>
                            <select
                                name="snacks"
                                className="snacks"
                                disabled
                            >
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                        </div>

                        <div className={UtiInfoCss.subdiv3}>
                            <label className={UtiInfoCss.labelR} htmlFor="Ttype">Theatre Type:</label>
                            <select
                                name="Ttype"
                                className="Ttype"
                                disabled
                            >
                                <option value="AC">AC</option>
                                <option value="Non-AC">Non-AC</option>
                            </select>
                        </div>

                        <div className={UtiInfoCss.subdiv4}>
                            <label className={UtiInfoCss.labelR} htmlFor="sound">Sound:</label>
                            <select
                                name="sound"
                                className="sound"
                                disabled
                            >
                                <option value="Dolby Digital 5.1/AC-3">Dolby Digital 5.1/AC-3</option>
                                <option value="DTS">DTS</option>
                                <option value="DSX">DSX</option>
                                <option value="DSX-2">DSX-2</option>
                                <option value="Dolby Atmos">Dolby Atmos</option>
                            </select>
                        </div>
                    </div>


                    <div className={UtiInfoCss.div5}>
                        <label className={UtiInfoCss.labelR} htmlFor="about">About:</label>
                        <textarea
                            className="about"
                            name="about"
                            rows="5"
                            cols="100"
                            readOnly
                        ></textarea>
                        <br /><br />
                    </div>

                    <div className={UtiInfoCss.div6}>
                        <button type="submit" className="submitbtn" disabled>
                            Submit
                        </button>
                        <button
                            type="button"
                            className="editbtn"
                            style={{
                                marginLeft: '1rem',
                                width: '5rem',
                                backgroundColor: 'green',
                                color: 'white',
                                border: '0',
                                borderRadius: '4px',
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </form>

            </div>


        </div>
    )
}

export default Usertheatreinfo
