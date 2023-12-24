import React from "react";
import '../App.css';
import TickImage from '../assets/images/icon-list.svg';
import { COLORS } from "../colors";


export function TickEntry(props)
{
   interface props {
        title: string
    }

    return (
    <div className="tickContainer" style={{display: "flex", flexDirection: "row"}}>
        <img src={TickImage} alt="Tick" className="tickImage"/>
        <div className="tickTitle" style={{color:COLORS.darkslategrey}}>{props.title}</div>
    </div>
)}