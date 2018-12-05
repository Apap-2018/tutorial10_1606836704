import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStafFarmasi.map(farmasi => {
                return (
                    <tr key={farmasi.id}>
                        <td>{farmasi.id}</td>
                        <td>{farmasi.nama}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}
