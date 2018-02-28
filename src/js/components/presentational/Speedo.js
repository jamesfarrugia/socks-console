import React from "react";
import PropTypes from 'prop-types'
import HumanBytes from './HumanBytes'

const Speedo = ({conn = {}}) => 
{
    const totalData = conn.DataIn + conn.DataOut;
    const sec = (conn.ActiveTime / (1000 * 1000 * 10))
    return (<span><HumanBytes bytes={totalData / sec} />/s</span>);
};

Speedo.propTypes = {
    conn: PropTypes.shape({
        DataIn: PropTypes.number,
        DataOut: PropTypes.number,
        ActiveTime: PropTypes.number
    }),
}

export default Speedo;